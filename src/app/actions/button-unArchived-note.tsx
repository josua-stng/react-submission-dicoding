import { useNoteButtonUnarchived } from '../lib/api-service';
type PropsArchivedNote = {
  id: any;
  refetch: any;
};
export default function ButtonUnarchivedNote({
  id,
  refetch,
}: PropsArchivedNote) {
  const { mutate: unArchivedNote } = useNoteButtonUnarchived({
    onSuccess: () => {
      refetch();
    },
  });
  return (
    <div>
      <button
        className="bg-blue-300 px-3 mx-2 py-1 rounded-md hover:bg-blue-400"
        onClick={() => unArchivedNote(id)}
      >
        UnArchived
      </button>
    </div>
  );
}
