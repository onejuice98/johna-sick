import {
  act,
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import Predict from "@/pages/predict/index";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

/**
 * @returns Predict Page의 테스트 설정
 */
const renderPredictPage = () => {
  /* 컴포넌트 렌더링 */
  const result = render(<Predict />);

  /* input check 를 위한 MOCK data */
  const MOCK_COMMENT = { value: "테스트용댓글" };

  /* API 작동여부 테스트 */
  const F0CK_COMMENT = { value: "씨발" };
  const CENSOR_MESSAGE = "🤖 랭푸파가 작동되었습니다. 🤖";

  /* Component 에서 DOM 을 가져온다. */
  const VideoTitle = () => result.getByText("일부러 테스트 틀리기");
  const VideoMaker = () => result.getByText("OneJuice");
  const SubscribeCounts = () => result.getByText("구독자 5명");
  const VideoDesc = () => result.getByText("조회수 12회");
  const CommentCounts = () => result.getByText("댓글 0개");
  const BadDisplayButton = () => result.getByText("나쁜 댓글 보기");
  const GoodDisplayButton = () => result.queryByText("나쁜 댓글 숨기기");
  const CommentInput = () => result.getByPlaceholderText("댓글 추가...");
  const CommentSubmit = () => result.getByText("작성");
  const CommentTest = () => result.queryByText(MOCK_COMMENT.value);
  const CommentAPITest = () => result.queryByText(CENSOR_MESSAGE);

  /* DOM 요소와 상호작용을 담당 */
  const clickBadDisplayButton = async () => {
    await act(async () => {
      fireEvent.click(BadDisplayButton());
    });
  };

  const changeCommentInput = () => {
    fireEvent.change(CommentInput(), {
      target: {
        value: MOCK_COMMENT.value,
      },
    });
  };
  const changeF0ckCommentInput = () => {
    fireEvent.change(CommentInput(), {
      target: {
        value: F0CK_COMMENT.value,
      },
    });
  };
  const clickCommentSubmit = () => {
    fireEvent.click(CommentSubmit());
  };

  return {
    VideoTitle,
    VideoMaker,
    SubscribeCounts,
    VideoDesc,
    CommentCounts,
    BadDisplayButton,
    GoodDisplayButton,
    CommentInput,
    CommentSubmit,
    MOCK_COMMENT,
    F0CK_COMMENT,
    CENSOR_MESSAGE,
    clickBadDisplayButton,
    changeCommentInput,
    changeF0ckCommentInput,
    clickCommentSubmit,
    CommentTest,
    CommentAPITest,
  };
};
describe("Predict Page", () => {
  it("초기 컴포넌트 렌더링 테스트", () => {
    const {
      VideoTitle,
      VideoMaker,
      SubscribeCounts,
      VideoDesc,
      CommentCounts,
      BadDisplayButton,
      GoodDisplayButton,
      CommentInput,
      CommentSubmit,
    } = renderPredictPage();

    expect(VideoTitle()).toBeInTheDocument();
    expect(VideoMaker()).toBeInTheDocument();
    expect(SubscribeCounts()).toBeInTheDocument();
    expect(VideoDesc()).toBeInTheDocument();
    expect(CommentCounts()).toBeInTheDocument();
    expect(BadDisplayButton()).toBeInTheDocument();
    expect(GoodDisplayButton()).not.toBeInTheDocument();
    expect(CommentInput()).toBeInTheDocument();
    expect(CommentSubmit()).toBeInTheDocument();
  }),
    it("나쁜 댓글 보기 토글 버튼 클릭 테스트", async () => {
      const { GoodDisplayButton, clickBadDisplayButton } = renderPredictPage();

      expect(GoodDisplayButton()).not.toBeInTheDocument();

      await clickBadDisplayButton();

      expect(GoodDisplayButton()).toBeInTheDocument();
    }),
    it("댓글 입력 테스트", async () => {
      const {
        CommentInput,
        changeCommentInput,
        MOCK_COMMENT,
        clickCommentSubmit,
        CommentTest,
      } = renderPredictPage();

      changeCommentInput();

      expect(CommentInput()).toHaveAttribute("value", MOCK_COMMENT.value);

      mockedAxios.get.mockResolvedValue({
        data: {
          predict: "99.5248019695282",
        },
      });
      mockedAxios.get.mockClear();
      clickCommentSubmit();

      await waitFor(() => {
        expect(CommentInput()).toHaveAttribute("value", "");
        expect(CommentTest()).toBeInTheDocument();
      });
    }),
    it("API 작동 여부 테스트", async () => {
      const {
        CommentInput,
        changeF0ckCommentInput,
        F0CK_COMMENT,
        clickCommentSubmit,
        CommentAPITest,
      } = renderPredictPage();
      changeF0ckCommentInput();

      expect(CommentInput()).toHaveAttribute("value", F0CK_COMMENT.value);

      mockedAxios.get.mockResolvedValue({
        data: {
          predict: "-94.0993070602417",
        },
      });
      clickCommentSubmit();
      mockedAxios.get.mockClear();

      await waitFor(() => {
        expect(CommentInput()).toHaveAttribute("value", "");
        expect(CommentAPITest()).toBeInTheDocument();
      });
    });
});
