'use client';
export default function UserLogin({ user }: { user: string }) {
  return (
    <div className="border border-black w-max m-2 px-5 py-3 rounded-md">
      <p>
        hello <span className="font-bold">{user}</span>{' '}
      </p>
    </div>
  );
}
