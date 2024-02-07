type PropsArchivedNotes = {
  title: string;
  body: string;
};
export default function ArchivedNote({ title, body }: PropsArchivedNotes) {
  return (
    <div className="space-y-3 ">
      <p className="font-semibold font-sans text-xl">{title}</p>
      <p className="break-all font-serif">{body}</p>
    </div>
  );
}
