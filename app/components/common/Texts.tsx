import styled from "styled-components";

interface TextStyleType {
  fontSize?: "x-large" | "large" | "small";
  color?: "gray";
  weight?: "bold" | 300;
  lineHeight?: number; //rem
  mr?: number; // px
  children?: React.ReactNode;
}
const TextStyle = styled.span<TextStyleType>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.color};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight + "rem"};
  margin-right: ${(props) => props.mr + "px"};
`;
const Texts = ({
  children,
  fontSize,
  color,
  weight,
  lineHeight,
  mr,
}: TextStyleType) => {
  return (
    <TextStyle
      fontSize={fontSize}
      color={color}
      weight={weight}
      lineHeight={lineHeight}
      mr={mr}
    >
      {children}
    </TextStyle>
  );
};

export default Texts;
