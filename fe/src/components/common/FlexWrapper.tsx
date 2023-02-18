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

/**
 * Flex Box 로 주로 Container로 이용된다.
 * @param children React.ReactNode
 * @param direction flex-direction 설정
 * @param justifyContent Main-Axis 설정
 * @param alignItems Cross-Axis 설정
 * @param bgGray 배경 gray 설정
 * @param width Wrapper Width 설정
 * @param height Wrapper Height 설정
 * @param borderRadius border-radius 설정 (px)
 * @param px padding-left, right 설정 (px)
 * @param py padding-top, bottom 설정 (px)
 * @param gap gap 설정 (rem)
 * @param mt margin-top 설정 (mt)
 * @param mb margin-bottom 설정 (mb)
 * @returns Wrapper (Container) <HTMLDivElement>
 */
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
