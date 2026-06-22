// import supabase from "@/libs/supabase";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import artistModel from "@/libs/models/artists";
import Link from "next/link";
import {notFound, redirect } from 'next/navigation';


export default async function Artists() {
  let artists = [];
  const { data, error } = await artistModel.getAll();
    if(!data || error) {
      console.error(error);
      console.log(data);
      notFound()
  }
  artists = [...data];
  return (
    <div>
      <h1 className="text-3xl font-bold m-3">Artists</h1>
      <div className="grid grid-cols-3">
        {
        artists.map(artist => (
          <Card key={artist.id} imgUrl={artist.image} title={artist.name}>
            <div className="card-button  flex justify-end">
              <Link href={`/artists/${artist.id}`}>
                 <Button title="View Profile" />
              </Link>
            </div>
          </Card>
        ))
        }
      </div>
    </div>
  );
}
