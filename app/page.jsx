"use client";
import Image from "next/image";
import GithubSigninButton from '@/app/components/GithubSigninButton';

export default function Home() {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <Image
        src="/images/cover3.jpg"
        alt="Next.js Logo"
        width={3840}
        height={2160}
        priority
      ></Image>
      <GithubSigninButton/>
    </div>
  );
}
