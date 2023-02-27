import Wrapper, { WrapperStyle } from "@/components/common/FlexWrapper";
import Texts from "@/components/common/Texts";
import CommentInput from "@/components/predict/svgs/CommentInput";
import DisLike from "@/components/predict/svgs/DisLike";
import Display from "@/components/predict/svgs/Display";
import Like from "@/components/predict/svgs/Like";
import NextPlay from "@/components/predict/svgs/NextPlay";
import NoAvatar from "@/components/predict/svgs/NoAvatar";
import Play from "@/components/predict/svgs/Play";
import Share from "@/components/predict/svgs/Share";
import ThreeDot from "@/components/predict/svgs/ThreeDot";
import Volume from "@/components/predict/svgs/Volume";
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

const CommentText = styled.p`
  font-size: medium;
  margin-top: 12px;
`;

const CENSOR_MESSAGE = "🤖 랭푸파가 작동되었습니다. 🤖";
type censorListType = {
  comment: string;
  censor: boolean;
};
const Predict = () => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<censorListType[]>([]);
  const [visible, setVisible] = useState<boolean>(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setComments([
      ...comments,
      {
        comment: comment,
        censor: (await getPredict(comment)) < -60 ? true : false,
      },
    ]);
    setComment("");
  };

  return (
    <PredictWrapper>
      <Wrapper
        direction="column"
        justifyContent="flex-end"
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
            <Play w={30} h={30} />
            <NextPlay w={30} h={30} />
            <Volume w={30} h={30} />
          </Wrapper>
          <Display w={30} h={30} />
        </VideoOptions>
      </Wrapper>
      <Wrapper direction="column" mt={10}>
        <Texts fontSize="x-large" weight="bold">
          랭푸파를 소개합니다!
        </Texts>
        <Wrapper justifyContent="space-between" mt={10}>
          <Wrapper gap={1}>
            <NoAvatar w={40} h={40} />
            <Wrapper direction="column" gap={0.25}>
              <Texts fontSize="large" weight="bold">
                OneJuice
              </Texts>
              <Texts fontSize="small" weight={300} color="gray">
                구독자 5명
              </Texts>
            </Wrapper>
          </Wrapper>
          <Wrapper gap={0.5}>
            <Like w={30} h={30} />
            <DisLike w={30} h={30} />
            <Share w={30} h={30} />
            <ThreeDot w={30} h={30} />
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
            "랭푸파" 제작자 OneJuice입니다. <br />
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
        <CommentInput
          submit={handleSubmit}
          change={handleChange}
          value={comment}
        />

        <div>
          {comments.map((value, index) => (
            <Wrapper key={index} gap={1} mb={32}>
              <NoAvatar w={40} h={40} />
              <Wrapper direction="column" width="90%">
                <Texts fontSize="medium" weight="bolder">
                  OneJuice
                </Texts>
                <CommentText>
                  {visible && value.censor ? CENSOR_MESSAGE : value.comment}
                </CommentText>
                <Wrapper alignItems="center" gap={0.5} mt={6}>
                  <Like w={20} h={20} />
                  <DisLike w={20} h={20} />
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

export default Predict;
