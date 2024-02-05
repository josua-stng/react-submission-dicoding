'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePostNote } from '../lib/api-service';
type IFormInput = {
  title: string;
  body: string;
};
export default function CreateNotes({ refetch }: any) {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { title, body } = data;
    const bodyNotes: any = {
      title,
      body,
    };
    mutate(bodyNotes);
    reset();
  };

  const { mutate } = usePostNote({
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col max-w-xs mx-auto border border-black p-5 space-y-3 rounded-md">
        <h1 className="text-center font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="title"
          className="border border-black px-2 py-1 rounded-md"
          {...register('title', { required: true })}
        />
        <input
          type="text"
          placeholder="description"
          className="border border-black px-2 py-1 rounded-md"
          {...register('body', { required: true })}
        />
        <button
          type="submit"
          className="bg-slate-300 py-1 rounded-md hover:bg-slate-400"
        >
          Create Note
        </button>
      </div>
    </form>
  );
}
