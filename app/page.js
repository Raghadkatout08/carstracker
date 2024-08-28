"use client";
import { useState } from "react";
import { AuthContext } from "./context/auth";
import LoginForm from "./components/loginForm";
import { useContext } from "react";
import Car from "./components/car";
import Head from "@/head";

export default function Home() {
  const { tokens } = useContext(AuthContext)
  return (
    <div className="flex flex-col min-h-screen">
      {!tokens ? (
        <LoginForm />
      ) : (
        <>
          <Head title="Car Tracker">
            <meta name="description" content="Car Tracker App" />
          </Head>
          <main className="flex-grow p-4 pt-16 relative bg-gray-300 dark:bg-[#353839]">
            <Car />
          </main>
        </>
      )}
    </div>
  );
}