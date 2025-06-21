"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import FailedAlert from "./FailedAlert";
import SucsessAlert from "./SucsessAlert";
import { initiate, getMessages } from "@/actions/useractions";

const PaymentPage = ({ username }) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [messages, setMessages] = useState([]);
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    amount: 0,
    message: "",
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const paymentDone = url.searchParams.get("paymentdone");

    const fetchMessages = async () => {
      const result = await getMessages(username);
      setMessages(result);
    };
    fetchMessages();

    if (paymentDone === "true") {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } else if (paymentDone === "false") {
      setShowFailure(true);
      setTimeout(() => setShowFailure(false), 3000);
    }
  }, [username]);

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    if (amount < 1) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    const rupees = (amount * 100).toString();
    let order = await initiate(rupees, username, paymentForm);
    let orderId = order.id;
    var options = {
      key: process.env.NEXT_PUBLIC_RAZOR_KEY,
      amount: rupees,
      currency: "INR",
      name: "GET ME A CHAI",
      description: "Test Transaction",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-2 items-end">
        {showSuccess && <SucsessAlert text={`Payment successfully done`} />}
        {showFailure && <FailedAlert text={`Payment failed`} />}
      </div>

      {/* Banner */}
      <div className="relative w-full">
        <Image
          className="object-cover w-full h-[50vh]"
          width={1920}
          height={350}
          src={"/pexels-philippedonn-1114690.jpg"}
          alt="bg image"
        />
        <div className="absolute -bottom-[75px] left-1/2 transform -translate-x-1/2">
          <Image
            className="rounded-2xl border-4 border-white"
            width={150}
            height={150}
            src="/WhatsApp Image 2025-05-01 at 13.17.49_430e6b99.jpg"
            alt="profile"
          />
        </div>
      </div>

      {/* Profile */}
      <div className="mt-24 flex flex-col items-center justify-center text-center">
        <div className="font-bold text-xl">@{username}</div>
        <div className="text-slate-400 text-sm">
          Creating Animated art for VTT&apos;s
        </div>
        <div className="text-slate-400 text-sm">
          17,884 members · 98 posts · $17,910/release
        </div>
      </div>

      {/* Content Area */}
      <div className="m-5 flex flex-col lg:flex-row-reverse gap-5 w-[90%] mx-auto">
        {/* Form Section */}
        <div className="bg-gray-900 p-8 w-full lg:w-1/2 flex flex-col justify-center rounded-2xl lg:min-h-[80vh] lg:self-center">
          {showError && <FailedAlert text={`Minimum amount should be ₹1`} />}
          <label className="block mb-2 text-sm font-medium text-white">
            Please Fill the required Details
          </label>
          <input
            required
            type="text"
            name="name"
            onChange={handleChange}
            value={paymentForm.name}
            className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter Your Name"
          />
          <input
            required
            type="number"
            name="amount"
            onChange={handleChange}
            value={paymentForm.amount}
            className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter Your Amount"
          />
          <input
            required
            type="text"
            name="message"
            onChange={handleChange}
            value={paymentForm.message}
            className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter Your Message"
          />
          <div className="flex gap-2 mt-3">
            {[10, 30, 50].map((amt) => (
              <button
                key={amt}
                onClick={() =>
                  setPaymentForm((prev) => ({ ...prev, amount: amt }))
                }
                className="bg-slate-800 cursor-pointer rounded-lg p-2 text-white"
              >
                Pay ₹{amt}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => pay(paymentForm.amount)}
            className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
          >
            PAY
          </button>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We’ll never share your details. Read our{" "}
            <Link
              href={"/TACs"}
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Messages Section */}
        <div className="bg-gray-900 h-[80vh] overflow-y-auto p-8 w-full lg:w-1/2 rounded-2xl">
          <ul>
            {messages.map((msg, index) => (
              <li
                key={index}
                className="flex my-2 items-center gap-2 text-white"
              >
                <Image
                  src={"/avatar.gif"}
                  alt="avatar"
                  width={25}
                  height={25}
                />
                <b>{msg.name}</b> donated amount <b>₹{msg.amountdone}</b> with{" "}
                message{" "}
                <b>
                  <i>{msg.message}</i>
                </b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
