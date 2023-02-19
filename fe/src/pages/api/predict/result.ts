import axios from "axios";
export const prepareComment = (comment: string) => {
  return comment.replace(/\?/g, "%3F").replace(/\//g, "").replace(/\%/g, "%25");
};
/**
 * fetch 를 사용하였었으나,, test code 작동간 Fetch 가 오류가 떠서 axios 를 사용하였다.
 */
export const getPredict = async (comment: string) => {
  const res = await axios.get(
    `http://localhost:3000/api/predict/${prepareComment(comment)}`
  );

  return parseInt(res.data.predict);
};
