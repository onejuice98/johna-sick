import { fireEvent, render, screen } from "@testing-library/react";
import Page from "@/app/predict/page";

describe("predict <Page />", () => {
  const setup = () => {
    const utils = render(<Page />);
    const title = screen.getByText("이건 프레딕트");
    const input = screen.getByPlaceholderText("댓글을 입력하세요.");
    const button = screen.getByText("제출");

    return {
      ...utils,
      title,
      input,
      button,
    };
  };
  it("Predict render test", () => {
    const { title, input, button } = setup();

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  }),
    it("changes input", () => {
      const { input } = setup();

      fireEvent.change(input, {
        target: {
          value: "댓글입력테스트",
        },
      });

      expect(input).toHaveAttribute("value", "댓글입력테스트");
    });
});
