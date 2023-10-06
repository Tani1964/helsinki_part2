import Part from "./Part";

const Content = ({ parts }) => {
  let total = parts.reduce((sum, parts) => sum + parts.exercises, 0);

  return (
    <div>
      {parts.map((parts) => (
        <Part key={parts.id} name={parts.name} exercise={parts.exercises} />
      ))}
      <h3>total of {total} exercises</h3>
    </div>
  );
};

export default Content;
