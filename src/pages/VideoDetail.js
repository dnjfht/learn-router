import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const params = useParams().videoId;
  console.log(params);
  return (
    <div>
      <h1>VideosDetail</h1>
      <p>{params}</p>
    </div>
  );
}
