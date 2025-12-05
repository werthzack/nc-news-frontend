export default function Topics({ topics }) {
  return (
    <div className="category">
      {topics.map((topic) => {
        return <button>{topic}</button>;
      })}
    </div>
  );
}
