import artistModel from "@/libs/models/artists";
import Link from "next/link";
import { notFound } from 'next/navigation';

export default async function Artist({ params }) {
  const { id } = await params;
  const { data: artist, error } = await artistModel.getDetail(id);
  if(!artist || error) {
      console.error(error);
      console.log(artist);
      notFound()
  }
  const songs = artist.albums?.flatMap((album) =>
    (album.songs ?? []).map((song) => ({ ...song, album }))
  ) ?? [];

  return (
    <div className="py-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
        <img className="h-40 w-40 rounded-full object-cover" src={artist.image} alt={artist.name} />
        <div>
          <h1 className="text-4xl font-bold">{artist.name}</h1>
          <p className="mt-2 text-slate-600">{artist.genre}</p>
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-bold">Songs</h2>
      <div className="mt-4 space-y-3">
        {songs.map((song) => (
          <Link
            key={song.id}
            href={`/songs/${song.id}`}
            className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
          >
            <img
              src={song.cover_image || song.album.cover_image}
              alt={song.title}
              className="h-16 w-24 rounded object-cover"
            />
            <div>
              <h3 className="font-semibold text-slate-900">{song.title}</h3>
              <p className="text-sm text-slate-500">{song.album.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
