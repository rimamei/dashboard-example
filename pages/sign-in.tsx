import Link from "next/link";
import React from "react";
import { EmptyLayout } from "../layout/EmptyLayout";

export default function SignIn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Sign In No Default Layout</div>
      <button style={{ width: "fit-content" }}>
        <Link href="/">Dashboard</Link>
      </button>
    </div>
  );
}

SignIn.Layout = EmptyLayout;
