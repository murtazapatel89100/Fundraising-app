"use client";
import React from "react";
import { useState } from "react";
import Script from "next/script";
import { useEffect } from "react";
import { initiate } from "@/actions/useractions";
import Image from "next/image";
import Link from "next/link";
import FailedAlert from "./FailedAlert";
import SucsessAlert from "./SucsessAlert";

const PaymentPage = ({ username }) => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentForm, setpaymentForm] = useState({
    name: "",
    amount: 0,
    message: "",
  });
  useEffect(() => {
    const url = new URL(window.location.href);
    const paymentDone = url.searchParams.get("paymentdone");

    if (paymentDone === "true") {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // optional auto-dismiss
    }
  }, []);
  const handleChange = (e) => {
    setpaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };
  const pay = async (amount) => {
    if (amount < 1) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // auto-dismiss
      return;
    }
    const rupees = (amount * 100).toString();
    let order = await initiate(rupees, username, paymentForm);
    let orderId = order.id;
    var options = {
      key: process.env.NEXT_PUBLIC_RAZOR_KEY,
      amount: rupees, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "GET ME A CHAI",
      description: "Test Transaction",
      order_id: orderId, // This is the order_id created in the backend
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, // Your success URL
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
      <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      </>
      <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-2 items-end">
        {showSuccess && <SucsessAlert text={`Payment successfully done`} />}
      </div>
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
      <div className="mt-24 flex flex-col items-center justify-center text-center">
        <div className="font-bold text-xl">@{username}</div>
        <div className="text-slate-400 text-sm">
          Creating Animated art for VTT's
        </div>
        <div className="text-slate-400 text-sm">
          17,884 members · 98 posts · $17,910/release
        </div>
      </div>
      <div className="m-5 relative flex mx-auto justify-center items-stretch gap-3 w-[80%]">
        <div className="bg-gray-900 h-[80vh] overflow-y-auto supporters p-8 w-1/2 rounded-2xl">
          <ul>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
            <li className="flex my-2 items-center gap-2">
              <Image src={"/avatar.gif"} alt="image" width={25} height={25} />
              <b>xyz</b> doated <b>$1000</b> with a{" "}
              <b>
                <i>message</i>
              </b>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 payment gap-3 p-8 w-1/2 flex flex-col justify-center rounded-2xl">
          {showError && <FailedAlert text={`Minimum amount should be ₹1`} />}
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Please Fill the requried Details
          </label>
          <input
            required
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            name="name"
            onChange={handleChange}
            value={paymentForm.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Name"
          />
          <input
            required
            type="number"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            onChange={handleChange}
            value={paymentForm.amount}
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Amount"
          />
          <input
            required
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            onChange={handleChange}
            value={paymentForm.message}
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Message"
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => {
                setpaymentForm({ ...paymentForm, amount: 10 });
              }}
              className="bg-slate-800 cursor-pointer rounded-lg p-2"
            >
              Pay ₹10
            </button>
            <button
              onClick={() => {
                setpaymentForm({ ...paymentForm, amount: 30 });
              }}
              className="bg-slate-800 cursor-pointer rounded-lg p-2"
            >
              Pay ₹30
            </button>
            <button
              onClick={() => {
                setpaymentForm({ ...paymentForm, amount: 50 });
              }}
              className="bg-slate-800 cursor-pointer rounded-lg p-2"
            >
              Pay ₹50
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              pay(paymentForm.amount);
            }}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            PAY
          </button>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
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
      </div>
    </>
  );
};

export default PaymentPage;
