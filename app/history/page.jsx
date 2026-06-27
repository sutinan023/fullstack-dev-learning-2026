"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser } from "@/libs/authentication";
import watchHistoryModel from "@/libs/models/watchHistory";

function formatDuration(seconds) {
  if (!seconds) {
    return "";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function History() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadHistory() {
      const user = await getUser();
      if (!user) {
        setStatus("signed-out");
        return;
      }

      const { data, error } = await watchHistoryModel.getByUser(user.id);
      if (error) {
        setStatus("error");
        return;
      }

      setItems(data ?? []);
      setStatus("ready");
    }

    loadHistory();
  }, []);

  if (status === "loading") {
    return <p className="py-8 text-slate-500">Loading watch history...</p>;
  }

  if (status === "signed-out") {
    return <p className="py-8 text-slate-500">Login with GitHub to see your watch history.</p>;
  }

  if (status === "error") {
    return <p className="py-8 text-red-600">Unable to load watch history.</p>;
  }

  return (
    <div className="py-6">
      <h1 className="mb-6 text-3xl font-bold">Watch History</h1>
      {items.length === 0 ? (
        <p className="text-slate-500">No songs watched yet.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => {
            const song = item.songs;
            const artist = song?.albums?.artists;
            return (
              <Link
                key={item.id}
                href={`/songs/${song.id}`}
                className="flex gap-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
              >
                <img
                  src={song.cover_image}
                  alt={song.title}
                  className="h-24 w-36 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{song.title}</h2>
                  <p className="text-sm text-slate-600">{artist?.name}</p>
                  <p className="text-sm text-slate-500">{formatDuration(song.duration_seconds)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
