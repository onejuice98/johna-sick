"use client";
import { getPredict } from "@/pages/api/predict/result";
import React, { useState } from "react";

const CENSOR_MESSAGE = "^^ld가 작동하였습니다.";
type censorListType = {
  comment: string;
  censor: boolean;
};
const Page = () => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<censorListType[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tempPredict = await getPredict(comment);
    setComments([
      ...comments,
      {
        comment: comment,
        censor: parseInt(tempPredict.predict) < -60 ? true : false,
      },
    ]);
    setComment("");
  };

  return (
    <div>
      이건 프레딕트
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={handleChange} value={comment} />
        <button type="submit"> 제출</button>
      </form>
      <button> censor </button>
      <div>
        {comments.map((value, index) => (
          <div key={index}>
            {value.comment} / {value.censor && "censored"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
