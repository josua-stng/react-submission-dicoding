type PropsUnarchivedNotes = {
  title: string;
  body: string;
};
export default function UnarchivedNotes({ title, body }: PropsUnarchivedNotes) {
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>

    </div>
  );
}
