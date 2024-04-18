"use client";
import React from "react";
function Meeting({ params }: { params: { id: string } }) {
  return <div>room : {params.id}</div>;
}

export default Meeting;
