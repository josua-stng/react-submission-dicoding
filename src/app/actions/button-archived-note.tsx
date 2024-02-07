import { useNoteButtonArchived } from '../lib/api-service';
type PropsArchivedNote = {
  id: any;
  refetch: any;
};
export default function ButtonArchivedNote({ id, refetch }: PropsArchivedNote) {
  const { mutate: archivedNote } = useNoteButtonArchived({
    onSuccess: () => {
      refetch();
    },
  });
  return (
    <div>
      <button
        className="bg-blue-300 px-3 mx-2 py-1 rounded-md hover:bg-blue-400"
        onClick={() => archivedNote(id)}
      >
        Archived
      </button>
    </div>
  );
}
