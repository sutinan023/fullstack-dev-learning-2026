"use client";

import { useEffect } from "react";
import { getUser } from "@/libs/authentication";
import watchHistoryModel from "@/libs/models/watchHistory";

export default function WatchRecorder({ songId }) {
  useEffect(() => {
    let cancelled = false;

    async function recordWatch() {
      const user = await getUser();
      if (!cancelled && user) {
        await watchHistoryModel.create({ user_id: user.id, song_id: songId });
      }
    }

    recordWatch();

    return () => {
      cancelled = true;
    };
  }, [songId]);

  return null;
}
