"use client";
import { getPredict } from "@/pages/api/predict/result";
import React, { useState } from "react";
import styled from "styled-components";

const VisibleButton = styled.button`
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  background-color: #2feff3;
  &:hover {
    background-color: #20b0b0;
    transition-duration: 500ms;
  }
`;
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;
`;
const CommentCount = styled.span`
  font-weight: bold;
  margin-right: 20px;
`;
const Avatar = styled.div`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: gray;
`;
const CommentForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;
const CommentInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 4px;
  &:focus {
    outline: none;
  }
`;
const CommentButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 0.25rem;
`;
const CommentList = styled.div``;
const Comment = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  gap: 1rem;
`;
const CommentContext = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const CommentWriter = styled.span`
  font-size: small;
  font-weight: bold;
`;
const CommentText = styled.p`
  font-size: small;
  margin-top: 12px;
`;
const CommentOptions = styled.div`
  display: flex;
`;
const CENSOR_MESSAGE = "^^ld가 작동하였습니다.";
type censorListType = {
  comment: string;
  censor: boolean;
};
const Page = () => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<censorListType[]>([]);
  const [visible, setVisible] = useState<boolean>(true);
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
      <CommentWrapper>
        <div>
          <CommentCount> 댓글 {comments.length}개</CommentCount>
          <VisibleButton onClick={() => setVisible((prev) => !prev)}>
            {visible ? "나쁜 댓글 보기" : "나쁜 댓글 숨기기"}
          </VisibleButton>
        </div>
        <CommentForm onSubmit={handleSubmit}>
          <Avatar />
          <CommentInput
            type="text"
            required
            onChange={handleChange}
            value={comment}
            placeholder="댓글 추가..."
          />
        </CommentForm>
        <CommentList>
          {comments.map((value, index) => (
            <Comment key={index}>
              <Avatar />
              <CommentContext>
                <CommentWriter>One Juice</CommentWriter>
                <CommentText>
                  {visible && value.censor ? CENSOR_MESSAGE : value.comment}
                </CommentText>
              </CommentContext>
            </Comment>
          ))}
        </CommentList>
      </CommentWrapper>
    </div>
  );
};

export default Page;
