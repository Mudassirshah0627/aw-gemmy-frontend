"use client";
import { usePathname } from "next/navigation";
import Header from "../home/header";
import AdminHeader from "../dashboard/header";

export function HomeHeaderWrapper() {
  const router = usePathname();
  const allowedPaths = ["/"];
  return allowedPaths.includes(router) ? <Header /> : null;
}

export function AdminHeaderWrapper() {
  const router = usePathname();
  const allowedPaths = ["/dashboard", "/listings"];
  return allowedPaths.includes(router) ? <AdminHeader /> : null;
}
