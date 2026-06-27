import songModel from "@/libs/models/song";
import WatchRecorder from "@/app/components/WatchRecorder";
import Link from "next/link";
import { notFound } from 'next/navigation';

function getYoutubeEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.hostname.includes("youtu.be")
      ? parsedUrl.pathname.slice(1)
      : parsedUrl.searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
}

export default async function Songs({ params }) {
  const { id } = await params;
  const { data: song, error } = await songModel.getDetail(id);

  if(!song || error) {
      console.error(error);
      console.log(song);
      notFound()
  }
  const embedUrl = getYoutubeEmbedUrl(song.youtube_url);
  const artist = song.albums?.artists;

  
  return (
    <div className="py-6">
      <WatchRecorder songId={song.id} />
      <div className="aspect-video overflow-hidden rounded-lg bg-black">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={song.title}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold">{song.title}</h1>
      {artist && (
        <Link
          href={`/artists/${artist.id}`}
          className="mt-2 inline-flex items-center gap-3 text-slate-700 hover:text-indigo-700"
        >
          <img
            src={artist.image}
            alt={artist.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span>{artist.name}</span>
        </Link>
      )}
    </div>
  );
}
