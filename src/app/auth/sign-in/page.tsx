'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
type IFormInput = {
  email: string;
  password: string;
};
export default function Signin() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;
    const body = {
      email,
      password,
    };
    try {
      const userLoginResponse = await axios.post(
        `https://notes-api.dicoding.dev/v1/login`,
        body
      );
      const token = userLoginResponse.data.data.accessToken;
      localStorage.setItem('token', token);
      router.push('/');
      return userLoginResponse;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        className="flex flex-col justify-center border border-black p-5 mx-auto space-y-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center">Sign up</h1>
        <input
          type="email"
          placeholder="email"
          className="border border-black px-2 py-1 rounded-md"
          {...register('email', { required: true })}
        />
        <input
          type="text"
          placeholder="password"
          className="border border-black px-2 py-1 rounded-md"
          {...register('password', { required: true })}
        />
        <button className="border border-black py-0.5 hover:bg-gray-200">
          Sign up
        </button>
      </form>
    </div>
  );
}
