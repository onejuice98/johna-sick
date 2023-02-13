"use client";
const prepareComment = (comment: string) => {
  return comment.replace(/\?/g, "%3F").replace(/\//g, "").replace(/\%/g, "%25");
};
export const getPredict = async (comment: string) => {
  const res = await fetch(
    `http://localhost:3000/api/predict/${prepareComment(comment)}`
  );
  const data = await res.json();
  return data;
};
