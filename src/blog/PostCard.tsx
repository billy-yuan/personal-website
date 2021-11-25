type PostCardProps = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

export function PostCard({ id, title, date, tags }: PostCardProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <>
        {tags.map((tag) => (
          <p key={"card_" + id + tag}>{tag}</p>
        ))}
      </>
    </>
  );
}
