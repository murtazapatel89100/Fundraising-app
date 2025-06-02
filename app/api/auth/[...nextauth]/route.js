import NextAuth from "next-auth";
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/public/models/user";
import payment from "@/public/models/payment";
import connectDb from "@/db/connectdb";

// ✅ Define the config object separately
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: { scope: "read:user user:email" }, // 👈 Ensure email scope
      },
    }),
    // AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    // }),
    // EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        await connectDb();

        // Use profile.email or user.email (they should contain the email string)
        const userEmail = profile?.email || user?.email;

        if (!userEmail) {
          // No email found — reject sign in or handle accordingly
          console.log("No email found in profile/user");
          return false;
        }

        const currentUser = await User.findOne({ email: userEmail });

        if (!currentUser) {
          // create new user
          const newUser = new User({
            email: userEmail,
            username: userEmail.split("@")[0], // safe because userEmail is defined
          });

          await newUser.save();
          user.name = newUser.username; // Set the username for the session
        } else {
          user.name = currentUser.username;
        }
      }

      return true; // Important: allow sign-in
    },
    async session({ session, token }) {
      await connectDb();

      if (session?.user?.email) {
        console.log("Looking for user with email:", session.user.email);

        const userdb = await User.findOne({
          email: { $regex: new RegExp(`^${session.user.email}$`, "i") },
        });

        if (userdb) {
          // If username is missing, create it and update the record
          if (!userdb.username) {
            const generatedUsername = session.user.email.split("@")[0];
            userdb.username = generatedUsername;
            await userdb.save();
            console.log(
              `Updated user with missing username: ${generatedUsername}`
            );
          }

          session.user.name = userdb.username;
          console.log("Found user in DB:", userdb.username);
        } else {
          console.log(
            "User not found in database for email:",
            session.user.email
          );
        }
      }

      return session;
    },
  },
};

// ✅ Use authOptions with NextAuth in route handlers
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
