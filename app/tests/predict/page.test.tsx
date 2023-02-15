import { fireEvent, render } from "@testing-library/react";
import Page from "@/app/predict/page";

describe("predict <Page />", () => {
  const setup = () => {
    const { getByText, getByPlaceholderText, findByText } = render(<Page />);
    const title = getByText("이건 프레딕트");
    const input = getByPlaceholderText("댓글 추가...");
    const button = getByText("제출");
    const MOCK_COMMENT = "테스트용댓글";

    return {
      title,
      input,
      button,
      MOCK_COMMENT,
      getByText,
      findByText,
    };
  };
  it("Predict render test", () => {
    const { title, input, button } = setup();

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  }),
    it("changes input", () => {
      const { input, MOCK_COMMENT } = setup();

      fireEvent.change(input, {
        target: {
          value: MOCK_COMMENT,
        },
      });

      expect(input).toHaveAttribute("value", MOCK_COMMENT);
    });
});
