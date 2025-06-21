"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getTotalAmount, latestDonationDate } from "@/actions/useractions";
import { uniqueDonors } from "@/actions/useractions";
import { getAllDonations } from "@/actions/useractions";
import { deletePaymentsForAdmin } from "@/actions/useractions";

export default function AdminDashboard({ params }) {
  const router = useRouter();
  const { data: session } = useSession();

  const [toatlPayment, setToatlPayment] = useState(0);
  const [uniqueDonars, setuniqueDonars] = useState(0);
  const [doantion, setDonation] = useState("");
  const [logs, setLogs] = useState({});

  const { admin } = use(params);

  useEffect(() => {
    if (session === undefined) return;

    if (!session) {
      router.push("/Login");
    }

    const totalAmount = async () => {
      const result = await getTotalAmount(admin);
      setToatlPayment(result);
    };

    const donations = async () => {
      const result = await getAllDonations(admin);
      setLogs(result);
    };

    const UniqueDonars = async () => {
      const result = await uniqueDonors(admin);
      setuniqueDonars(result);
    };

    const lastDate = async () => {
      const result = await latestDonationDate(admin);
      setDonation(result);
    };

    donations();
    totalAmount();
    UniqueDonars();
    lastDate();
  }, [session, router, admin]);

  console.log(logs);

  const initialUser = {
    name: admin,
    email: "murtazapatel@example.com",
    avatar: "/WhatsApp Image 2025-05-01 at 13.17.49_430e6b99.jpg",
  };
  const [user, setUser] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(user.name);
  const [tempAvatar, setTempAvatar] = useState(user.avatar);

  const clearLogs = async () => {
    if (confirm("Clear all payment logs? these logs cannot be bought back"))
      await deletePaymentsForAdmin(admin);
    setLogs([]);
  };

  const handleProfileUpdate = () => {
    setUser({ ...user, name: tempName, avatar: tempAvatar });
    setEditing(false);
  };

  return (
    <div className="min-h-screen px-6 py-10 text-white bg-[#1a1a1a]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="flex items-center gap-4">
          <Image
            src={user.avatar}
            width={64}
            height={64}
            alt="avatar"
            className="rounded-full border border-gray-700"
          />
          <div>
            <h1 className="text-2xl font-bold">Hello, {admin}</h1>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={clearLogs}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Clear Logs
          </button>
          <Link
            href="/add-project"
            className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            + Add Project
          </Link>
          <button
            onClick={() => setEditing(!editing)}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            {editing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Editable Profile Section */}
      {editing && (
        <div className="bg-[#0f0f0f] border border-[#1a1a1a] p-6 rounded-lg mb-10 max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Username
              </label>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Profile Picture URL
              </label>
              <input
                type="text"
                value={tempAvatar}
                onChange={(e) => setTempAvatar(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#1a1a1a] border border-gray-600 text-white"
              />
            </div>
            <button
              onClick={handleProfileUpdate}
              className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Stat label="Total Donations" value={`₹${toatlPayment}`} />
        <Stat label="Unique Donors" value={uniqueDonars} />
        <Stat label="Logs Count" value={logs.length} />
        <Stat label="Last Donation" value={doantion} />
      </div>

      {/* Logs Table */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Payment Logs</h2>
        {logs.length > 0 ? (
          <div className="overflow-x-auto rounded-lg border border-[#1a1a1a] bg-[#0d0d0d]">
            <table className="w-full text-sm">
              <thead className="uppercase bg-[#111] text-gray-400 text-xs">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Donor</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {logs.map((log) => (
                  <tr key={log.id} className="border-t border-[#1f1f1f]">
                    <td className="px-4 py-2">{log.id}</td>
                    <td className="px-4 py-2">{log.donor}</td>
                    <td className="px-4 py-2">₹{log.amount}</td>
                    <td className="px-4 py-2">{log.method}</td>
                    <td className="px-4 py-2">{log.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No logs available.</p>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4 shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}
