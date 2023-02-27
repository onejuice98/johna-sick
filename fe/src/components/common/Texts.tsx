import styled from "styled-components";

interface TextStyleType {
  fontSize?: "x-large" | "large" | "small" | "medium";
  color?: "gray";
  weight?: "bolder" | "bold" | 300;
  mr?: number; // px
  children?: React.ReactNode;
}

/**
 * @param fontSize font-size 조절(글자크기)
 * @param color font-color 설정
 * @param weight font 굵기 설정
 * @param mr margin-right 설정 (mr)
 */
const TextStyle = styled.span<TextStyleType>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin-right: ${(props) => props.mr + "px"};
`;
const Texts = ({ children, fontSize, color, weight, mr }: TextStyleType) => {
  return (
    <TextStyle fontSize={fontSize} color={color} weight={weight} mr={mr}>
      {children}
    </TextStyle>
  );
};

export default Texts;
