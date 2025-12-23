"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Play,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/fitness-dashboard" },
  { icon: Users, label: "Users", href: "/fitness-dashboard/users" },
  { icon: Play, label: "Trainers", href: "/fitness-dashboard/trainers" },
  { icon: Settings, label: "Settings", href: "/fitness-dashboard/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/fitness-dashboard") {
      return pathname === "/fitness-dashboard";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        <Image
          src="/mymedpal-4.png"
          alt="MyMedPal Logo"
          width={160}
          height={48}
          className="h-11 w-auto"
          priority
        />
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200
          flex flex-col transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:fixed lg:inset-y-0
          pt-16 lg:pt-0
        `}
      >
        <div className="hidden lg:flex items-center justify-center px-6 py-6 border-b border-gray-200">
          <Image
            src="/Image.png"
            alt="MyMedPal Logo"
            width={180}
            height={54}
            className="h-28"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 mb-1
                    ${active
                      ? "bg-blue-600 text-white shadow-sm border-l-4 border-blue-700"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                    }
                  `}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${active ? "text-white" : "text-gray-500"}`} />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200 bg-white">
            <Button
              variant="outline"
              className="w-full justify-start py-6 text-left font-medium hover:bg-gray-100"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      <div className="h-16 lg:pl-64" />
    </>
  );
}