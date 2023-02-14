"use client";
import { getPredict } from "@/pages/api/predict/result";
import React, { useState } from "react";
import styled from "styled-components";

const CommentForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;
const CommentInput = styled.input`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;
const CommentButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 0.25rem;
`;
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
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          type="text"
          required
          onChange={handleChange}
          value={comment}
          placeholder="댓글을 입력하세요."
        />
        <CommentButton type="submit"> 제출</CommentButton>
      </CommentForm>
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
