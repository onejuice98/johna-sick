import Wrapper from "@/components/common/FlexWrapper";
import { Avatar } from "@/pages/predict";
import styled from "styled-components";

const CForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  width: 90%;
`;
const CInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 4px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const CButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #cecdcd;
    transition-duration: 500ms;
  }
`;
interface CommentInputType {
  submit: React.FormEventHandler<HTMLFormElement>;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const CommentInput = ({ submit, change, value = "" }: CommentInputType) => {
  return (
    <Wrapper direction="row" gap={1}>
      <Avatar />
      <CForm onSubmit={submit}>
        <CInput
          type="text"
          required
          onChange={change}
          value={value}
          placeholder="댓글 추가..."
        />
        <CButton type="submit"> 작성 </CButton>
      </CForm>
    </Wrapper>
  );
};

export default CommentInput;
