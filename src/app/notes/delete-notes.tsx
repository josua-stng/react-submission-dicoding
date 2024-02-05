import { useDeleteNote } from '../lib/api-service';
type PropsDeleteNote = {
  id: any;
  refetch: any;
};
export default function DeleteNotes({ id, refetch }: PropsDeleteNote) {
  const { mutate: deleteNote } = useDeleteNote({
    onSuccess: () => {
      refetch();
    },
  });
  return (
    <div>
      <button
        className="bg-red-300 px-3 mx-2 py-1 rounded-md hover:bg-red-400"
        onClick={() => deleteNote(id)}
      >
        DeleteNote
      </button>
    </div>
  );
}
