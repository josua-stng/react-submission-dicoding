type PropsUnarchivedNotes = {
  title: string;
  body: string;
};
export default function UnarchivedNotes({ title, body }: PropsUnarchivedNotes) {
  return (
    <div className="space-y-3 ">
      <p className="font-semibold font-sans text-xl">{title}</p>
      <p className="break-all font-serif">{body}</p>
    </div>
  );
}
