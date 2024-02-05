'use client';

type PropsUnarchivedNotes = {
  id: string;
  title: string;
  body: string;
};
import { useFetchUserLogin, useNoteNotArchived } from './lib/api-service';
import UserLogin from './lib/user-login';
import CreateNotes from './notes/create-notes.';
import DeleteNotes from './notes/delete-notes';
import UnarchivedNotes from './notes/unArchived-note';

export default function Home() {
  const { data: user } = useFetchUserLogin();
  const { data: unArchivedNote, refetch: refetchUnarchived } =
    useNoteNotArchived();

  return (
    <div>
      <UserLogin user={user} />
      <CreateNotes refetch={refetchUnarchived} />
      {unArchivedNote?.data?.map((note: PropsUnarchivedNotes) => {
        return (
          <>
            <UnarchivedNotes
              key={note.id}
              title={note.title}
              body={note.body}
            />
            <DeleteNotes id={note.id} refetch={refetchUnarchived} />
          </>
        );
      })}
    </div>
  );
}
