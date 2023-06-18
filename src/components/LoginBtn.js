"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>
          <Image
            id="image"
            src={session.user.image}
            alt="Profile image"
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
