"use client";

import { sendContactEmail } from "@/util/contact";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const onValid = (form: FormData) => {
    const { name, email, subject, message } = form;
    sendContactEmail(form)
      .then((data: any) => {
        console.log(data);
      })
      .catch((data: any) => {
        console.log(data);
      });
  };
  const onInValid = () => {
    alert("다시 입력");
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <p className="flex flex-col mb-[15px]">
        <span className="font-bold">Your name</span>
        <input
          className="mt-[10px] py-[15px] px-[25px] border border-[#f0f0fd] bg-[#f9f9fe] outline-none text-[#596172] text-sm font-serif"
          {...register("name", { required: true })}
          type="text"
        />
      </p>

      <p className="flex flex-col mb-[15px]">
        <span className="font-bold">Your email</span>
        <input
          className="mt-[10px] py-[15px] px-[25px] border border-[#f0f0fd] bg-[#f9f9fe] outline-none text-[#596172] text-sm font-serif"
          {...register("email", { required: true })}
          type="email"
        />
      </p>

      <p className="flex flex-col mb-[15px]">
        <span className="font-bold">Subject</span>
        <input
          className="mt-[10px] py-[15px] px-[25px] border border-[#f0f0fd] bg-[#f9f9fe] outline-none text-[#596172] text-sm font-serif"
          {...register("subject", { required: true })}
          type="text"
        />
      </p>

      <p className="flex flex-col mb-[15px]">
        <span className="font-bold">Your message</span>
        <textarea
          className="mt-[10px] py-[15px] px-[25px] border border-[#f0f0fd] bg-[#f9f9fe] outline-none text-[#596172] text-sm font-serif"
          {...register("message", { required: true })}
          cols={40}
          rows={10}
        ></textarea>
      </p>

      <button
        type="submit"
        className="py-[12px] px-[35px] bg-uRed text-white text-lg font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
