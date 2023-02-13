"use client";
import { getPredict } from "@/pages/api/predict/result";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type hookFormType = {
  comment: string;
};
const page = () => {
  const [comments, setComments] = useState<hookFormType[]>([]);
  const { register, handleSubmit, reset } = useForm<hookFormType>();
  const onValid = (data: hookFormType) => {
    setComments([...comments, data]);
    reset();
  };
  const onCensor = () => {
    console.log(getPredict("개쌔끼들아"));
  };
  return (
    <div>
      이건 프레딕트
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("comment")} type="text" required />
        <button type="submit"> 제출</button>
      </form>
      <button onClick={onCensor}> censor </button>
      <div>
        {comments.map((value) => (
          <div key={value.comment}>{value.comment}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
