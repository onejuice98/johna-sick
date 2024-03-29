import Wrapper from "@/components/common/FlexWrapper";
import Texts from "@/components/common/Texts";
import styled from "styled-components";
import Predict from "./predict";

const ChromeDownload = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 60px;
  border-radius: 28px;
  border: none;
  font-size: large;
  font-weight: bolder;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const ShowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const ChromeHref = styled.a`
  text-decoration: none;
`;
export default function Main() {
  return (
    <Wrapper direction="column" alignItems="center">
      <Wrapper
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
        bgGray
        gap={2}
      >
        <Texts fontSize="x-large" weight="bolder">
          보기 힘든 댓글을 숨겨주는 랭푸파
        </Texts>

        <Wrapper direction="column" alignItems="center" gap={0.5}>
          <Texts fontSize="medium" weight={300}>
            랭푸파는 혐오적 표현, 욕설을 숨겨줍니다.
          </Texts>
          <Texts fontSize="medium" weight={300}>
            Chrome 확장앱으로 만나보세요!
          </Texts>
        </Wrapper>
        <ChromeHref href="https://chrome.google.com/webstore/detail/lngpufi/hckbedefieglnkogmbfonpknnakaalnk">
          <ChromeDownload>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.0005 2.00394C16.0005 2.00394 24.2527 1.63495 28.6278 9.90002H15.2983C15.2983 9.90002 12.7828 9.81923 10.634 12.8601C10.0167 14.1364 9.3532 15.4511 10.0978 18.0422C9.02517 16.2315 4.40332 8.21246 4.40332 8.21246C4.40332 8.21246 7.66332 2.33069 16.0004 2.00394H16.0005Z"
                  fill="#EF3F36"
                ></path>
                <path
                  d="M28.1994 22.986C28.1994 22.986 24.3915 30.2938 15.0244 29.9325C16.1818 27.9373 21.691 18.4305 21.691 18.4305C21.691 18.4305 23.022 16.3008 21.4518 12.9256C20.6531 11.7531 19.8391 10.5268 17.2157 9.87324C19.3261 9.85413 28.6045 9.87324 28.6045 9.87324C28.6045 9.87324 32.0805 15.6281 28.1994 22.986Z"
                  fill="#FCD900"
                ></path>
                <path
                  d="M3.85931 23.0433C3.85931 23.0433 -0.588992 16.1044 4.41095 8.20068C5.56452 10.1959 11.0737 19.7027 11.0737 19.7027C11.0737 19.7027 12.262 21.917 15.9772 22.2475C17.3932 22.1437 18.8669 22.0553 20.7497 20.1217C19.7117 21.9516 15.0551 29.9476 15.0551 29.9476C15.0551 29.9476 8.31134 30.0706 3.8592 23.0433H3.85931Z"
                  fill="#61BC5B"
                ></path>
                <path
                  d="M15.0205 30.0013L16.8955 22.2053C16.8955 22.2053 18.9557 22.0437 20.6842 20.1562C19.6115 22.0362 15.0205 30.0013 15.0205 30.0013Z"
                  fill="#5AB055"
                ></path>
                <path
                  d="M9.71973 16.089C9.71973 12.6523 12.5168 9.86523 15.9658 9.86523C19.4148 9.86523 22.2119 12.6523 22.2119 16.089C22.2119 19.5257 19.4148 22.3127 15.9658 22.3127C12.5168 22.3089 9.71973 19.5257 9.71973 16.089Z"
                  fill="white"
                ></path>
                <path
                  d="M10.7656 16.0892C10.7656 13.2292 13.0921 10.9072 15.9663 10.9072C18.8366 10.9072 21.1669 13.2254 21.1669 16.0892C21.1669 18.9494 18.8406 21.2714 15.9663 21.2714C13.0959 21.2714 10.7656 18.9494 10.7656 16.0892Z"
                  fill="url(#paint0_linear_87_7098)"
                ></path>
                <path
                  d="M28.6007 9.87673L20.8808 12.1333C20.8808 12.1333 19.7157 10.4302 17.2119 9.87673C19.384 9.86515 28.6007 9.87673 28.6007 9.87673Z"
                  fill="#EACA05"
                ></path>
                <path
                  d="M9.94735 17.7577C8.86313 15.8855 4.40332 8.2124 4.40332 8.2124L10.1209 13.8481C10.1209 13.8481 9.53441 15.0514 9.75441 16.7735L9.94724 17.7577H9.94735Z"
                  fill="#DF3A32"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_87_7098"
                    x1="15.9661"
                    y1="10.9804"
                    x2="15.9661"
                    y2="20.9594"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#86BBE5"></stop>
                    <stop offset="1" stopColor="#1072BA"></stop>
                  </linearGradient>
                </defs>
              </g>
            </svg>
            Chrome 웹스토어
          </ChromeDownload>
        </ChromeHref>
      </Wrapper>
      <ShowGrid>
        <Wrapper
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Texts fontSize="x-large" weight="bolder">
            랭푸파 사용해보세요!
          </Texts>

          <Wrapper direction="column" alignItems="center" gap={0.5}>
            <Texts fontSize="medium" weight={300}>
              댓글을 입력해봐요
            </Texts>
            <Texts fontSize="medium" weight={300}>
              나쁜 댓글 보기를 눌러
            </Texts>
            <Texts fontSize="medium" weight={300}>
              가려진 댓글도 확인해보세요
            </Texts>
          </Wrapper>
        </Wrapper>
        <Predict />
      </ShowGrid>
    </Wrapper>
  );
}
