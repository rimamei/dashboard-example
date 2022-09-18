import React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

interface DefaultLayoutProps {
  children: JSX.Element;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
