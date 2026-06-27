"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getUser } from "@/libs/authentication";
import supabase from "@/libs/supabase";

const routes = [
  { name: "Home", href: "/" },
  { name: "Songs", href: "/songs" },
  { name: "Artists", href: "/artists" },
  { name: "History", href: "/history" },
];

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M3 20c4-8 11-8 15 0s11 8 15 0"
        stroke="#818cf8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12c4-8 11-8 15 0s11 8 15 0"
        stroke="#6366f1"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const name =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.user_name ||
    user?.email;
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <nav className="bg-slate-950 text-slate-300 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Logo />
        <ul className="flex items-center gap-1">
          {routes.map((route) => (
            <li key={route.href}>
              <a
                href={route.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white"
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {user && (
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-white">{name}</span>
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt={name ?? "User avatar"}
              width={32}
              height={32}
              unoptimized
              className="rounded-full"
            />
          )}
        </div>
      )}
    </nav>
  );
}
