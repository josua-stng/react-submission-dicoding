'use client';
type PropsUnarchivedNotes = {
  id: string;
  title: string;
  body: string;
};
import { useEffect } from 'react';
import ButtonArchivedNote from './actions/button-archived-note';
import DeleteNotes from './actions/button-delete-notes';
import ButtonUnarchivedNote from './actions/button-unArchived-note';
import {
  useFetchUserLogin,
  useNoteArchived,
  useNoteNotArchived,
} from './lib/api-service';
import UserLogin from './lib/user-login';
import ArchivedNote from './notes/archived-note';
import CreateNotes from './notes/create-notes.';
import UnarchivedNotes from './notes/unArchived-note';

export default function Home() {
  const { data: user } = useFetchUserLogin();
  const { data: unArchivedNote, refetch: refetchUnarchived } =
    useNoteNotArchived();
  const { data: archivedNotes, refetch: refetchArchived } = useNoteArchived();
  const isEmptyArchivedNotes = archivedNotes?.length === 0;

  return (
    <div>
      <UserLogin user={user} />
      <CreateNotes refetch={refetchUnarchived} />
      <div className="flex mx-auto justify-center gap-5">
        <div className="border border-slate-300 m-5 rounded-md">
          <p className="px-4 mt-2 font-bold italic font-sans">
            Unarchived note
          </p>
          <div className="grid grid-cols-2 p-3 gap-4 border">
            {unArchivedNote?.map((note: PropsUnarchivedNotes) => {
              return (
                <div
                  key={note.id}
                  className="border border-slate-400 px-4 py-3 rounded-md space-y-2 text-wrap max-w-sm"
                >
                  <UnarchivedNotes title={note.title} body={note.body} />
                  <div className="flex">
                    <DeleteNotes id={note.id} refetch={refetchUnarchived} />
                    <ButtonArchivedNote
                      id={note.id}
                      refetch={refetchUnarchived}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border border-slate-300 m-5 rounded-md">
          <p className="px-4 mt-2 font-bold italic font-sans">Archived note</p>
          <div className="grid grid-cols-2 p-3 gap-4 border">
            {isEmptyArchivedNotes ? (
              <p className="font-bold text-xl p-5 italic ">Notes Empty</p>
            ) : (
              archivedNotes?.map((note: PropsUnarchivedNotes) => {
                return (
                  <div
                    key={note.id}
                    className="border border-slate-400 px-4 py-3 rounded-md space-y-2 text-wrap max-w-sm"
                  >
                    <ArchivedNote title={note.title} body={note.body} />
                    <div className="flex">
                      <DeleteNotes id={note.id} refetch={refetchArchived} />
                      <ButtonUnarchivedNote
                        id={note.id}
                        refetch={refetchArchived}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
