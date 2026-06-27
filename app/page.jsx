import Link from "next/link";
import songModel from "@/libs/models/song";
import GithubSigninButton from '@/app/components/GithubSigninButton';

function formatDuration(seconds) {
  if (!seconds) {
    return "";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default async function Home() {
  const { data: songs, error } = await songModel.getAll();

  return (
    <div className="py-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">MusicTube</h1>
        <GithubSigninButton/>
      </div>

      {error ? (
        <p className="text-red-600">Unable to load songs.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(songs ?? []).map((song) => {
            const artist = song.albums?.artists;
            return (
              <Link
                key={song.id}
                href={`/songs/${song.id}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
              >
                <div className="relative aspect-video bg-slate-200">
                  <img
                    src={song.cover_image}
                    alt={song.title}
                    className="h-full w-full object-cover"
                  />
                  {song.duration_seconds && (
                    <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                      {formatDuration(song.duration_seconds)}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h2 className="line-clamp-2 font-semibold text-slate-900 group-hover:text-indigo-700">
                    {song.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{artist?.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
