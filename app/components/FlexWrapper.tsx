import React from "react";
import styled from "styled-components";

interface WrapperStyleType extends React.Component<HTMLDivElement> {
  direction?: "row" | "column";
  justifyContent?: "flex-end";
  bgGray?: boolean;
}

const WrapperStyle = styled.div<WrapperStyleType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) => (props.bgGray ? "#80808035" : "#fff")};
`;
