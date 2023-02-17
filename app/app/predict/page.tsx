"use client";
import Wrapper, { WrapperStyle } from "@/components/common/FlexWrapper";
import Texts from "@/components/common/Texts";
import { getPredict } from "@/pages/api/predict/result";
import React, { useState } from "react";
import styled from "styled-components";

const PredictWrapper = styled.div`
  padding: 20px;
`;
const VideoOptions = styled(WrapperStyle)`
  border-top: 4px solid #fff;
`;

const VideoInfoParagraph = styled.p`
  font-size: small;
  line-height: 1rem;
`;
const VisibleButton = styled.button`
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: gray;
  &:hover {
    font-weight: bold;
    background-color: #a8a3a310;
    transition-duration: 500ms;
  }
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
  width: 90%;
  &:focus {
    outline: none;
  }
`;
const CommentText = styled.p`
  font-size: small;
  margin-top: 12px;
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
    <PredictWrapper>
      <Wrapper
        direction="column"
        justifyContent="flex-end"
        width="100%"
        height={360}
        bgGray
        px={10}
      >
        <VideoOptions
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height={40}
        >
          <Wrapper gap={0.5}>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z"
                fill="#000000"
              />
            </svg>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
                fill="#292D32"
              />
              <path
                d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
                fill="#292D32"
              />
            </svg>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 14V10C3 9.44772 3.44772 9 4 9H6.64922C6.87629 9 7.0966 8.92272 7.27391 8.78087L10.3753 6.29976C11.0301 5.77595 12 6.24212 12 7.08062V16.9194C12 17.7579 11.0301 18.2241 10.3753 17.7002L7.27391 15.2191C7.0966 15.0773 6.87629 15 6.64922 15H4C3.44772 15 3 14.5523 3 14Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8302 15.2139C16.5435 14.3639 16.9537 13.3008 16.9963 12.1919C17.0389 11.0831 16.7114 9.99163 16.0655 9.08939"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.8944 17.7851C20.2406 16.1807 20.9852 14.1571 20.9998 12.0628C21.0144 9.96855 20.2982 7.93473 18.9745 6.31174"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Wrapper>

          <svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523 16 19 16H12Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </VideoOptions>
      </Wrapper>
      <Wrapper direction="column" mt={10}>
        <Texts fontSize="x-large" weight="bold">
          Language-Purifier 를 소개합니다!
        </Texts>
        <Wrapper justifyContent="space-between" mt={10}>
          <Wrapper gap={1}>
            <Avatar />
            <Wrapper direction="column" gap={0.25}>
              <Texts fontSize="large" weight="bold">
                One Juice
              </Texts>
              <Texts fontSize="small" weight={300} color="gray">
                구독자 5명
              </Texts>
            </Wrapper>
          </Wrapper>
          <Wrapper gap={0.5}>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8 14V4M8 14L4 14V4.00002L8 4M8 14L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002L8 4"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 13M16 8L12 4M12 4L8 8M12 4L12 16"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <svg
              width={30}
              height={30}
              fill="#000000"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              id="Glyph"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z"
                  id="XMLID_287_"
                ></path>
                <path
                  d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z"
                  id="XMLID_289_"
                ></path>
                <path
                  d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z"
                  id="XMLID_291_"
                ></path>
              </g>
            </svg>
          </Wrapper>
        </Wrapper>
        <Wrapper
          direction="column"
          mt={10}
          gap={0.5}
          borderRadius={10}
          px={8}
          py={12}
          bgGray
        >
          <Texts fontSize="small" weight="bold">
            조회수 12회
          </Texts>
          <VideoInfoParagraph>
            안녕하세요 🙌 <br />
            Language-Purifier 제작자 OneJuice입니다. <br />
            많이 부족한 프로그램이고, 완벽하진 않지만 욕은 확실하게 거른다구요!
            많이 사용해주세요!
          </VideoInfoParagraph>
        </Wrapper>
      </Wrapper>
      <hr />
      <Wrapper direction="column" gap={1}>
        <div>
          <Texts weight="bold" mr={20}>
            댓글 {comments.length}개
          </Texts>
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
        <div>
          {comments.map((value, index) => (
            <Wrapper key={index} gap={1} mb={32}>
              <Avatar />
              <Wrapper direction="column" width="90%">
                <Texts fontSize="small" weight="bold">
                  One Juice
                </Texts>
                <CommentText>
                  {visible && value.censor ? CENSOR_MESSAGE : value.comment}
                </CommentText>
                <Wrapper alignItems="center" gap={0.5} mt={6}>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M8 14V4M8 14L4 14V4.00002L8 4M8 14L13.1956 20.0615C13.6886 20.6367 14.4642 20.884 15.1992 20.7002L15.2467 20.6883C16.5885 20.3529 17.1929 18.7894 16.4258 17.6387L14 14H18.5604C19.8225 14 20.7691 12.8454 20.5216 11.6078L19.3216 5.60779C19.1346 4.67294 18.3138 4.00002 17.3604 4.00002L8 4"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <Texts fontSize="small"> 답글 </Texts>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          ))}
        </div>
      </Wrapper>
    </PredictWrapper>
  );
};

export default Page;
