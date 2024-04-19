"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

function Meeting({ params }: { params: { id: string } }) {
  const { user, isLoaded } = useUser();
  return (
    <>
      <div>room : {params.id}</div>
      {user && <div>room : {user.username}</div>}
    </>
  );
}

export default Meeting;
