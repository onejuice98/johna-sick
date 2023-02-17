import React from "react";
import styled from "styled-components";

interface WrapperStyleType {
  direction?: "row" | "column";
  justifyContent?: "space-between" | "flex-end";
  alignItems?: "center";
  bgGray?: boolean;
  width?: "100%" | "90%";
  height?: number; // px
  borderRadius?: number; // px
  px?: number; // px
  py?: number; // py
  gap?: number; // rem
  mt?: number; // px
  mb?: number; // px
  children: React.ReactNode;
}

export const WrapperStyle = styled.div<WrapperStyleType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.bgGray && "#80808035"};
  width: ${(props) => props.width};
  height: ${(props) => props.height + "px"};
  border-radius: ${(props) => props.borderRadius + "px"};
  ${(props) =>
    props.px &&
    `padding-right : ${props.px + "px"}; padding-left : ${props.px + "px"};`}
  ${(props) =>
    props.py &&
    `padding-top : ${props.py + "px"}; padding-bottom : ${props.py + "px"};`}
  gap : ${(props) => props.gap + "rem"};
  margin-top: ${(props) => props.mt + "px"};
  margin-bottom: ${(props) => props.mb + "px"};
`;

const Wrapper = ({
  children,
  direction,
  justifyContent,
  alignItems,
  bgGray,
  width,
  height,
  borderRadius,
  px,
  py,
  gap,
  mt,
  mb,
  ...rest
}: WrapperStyleType) => {
  return (
    <WrapperStyle
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      bgGray={bgGray}
      width={width}
      height={height}
      borderRadius={borderRadius}
      px={px}
      py={py}
      gap={gap}
      mt={mt}
      mb={mb}
      {...rest}
    >
      {children}
    </WrapperStyle>
  );
};

export default Wrapper;
