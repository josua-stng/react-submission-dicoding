'use client';

import { useRouter } from 'next/navigation';

export default function UserLogin({ user }: { user: string }) {
  const router = useRouter();
  const handlerUserLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/sign-in');
  };
  return (
    <div className="border border-black w-max m-2 px-5 py-3 rounded-md space-y-1">
      <p>
        hello <span className="font-bold">{user}</span>{' '}
      </p>
      <button
        className="bg-red-600 text-white px-3 py-0.5 rounded-md"
        onClick={handlerUserLogout}
      >
        Logout
      </button>
    </div>
  );
}
