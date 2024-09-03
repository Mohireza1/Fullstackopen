import Header from "./Header";
import Part from "./Part";

const Course = ({ courses }) => {
  return (
    <div>
      <Header name={courses.name} />
      {courses.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Course;
