import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  let sumOfExe = 0;

  courses.forEach(
    (course) =>
      (sumOfExe += course.parts.reduce((acc, curr) => {
        return acc + curr.exercises;
      }, 0))
  );

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} courses={course} />
      ))}
      <p>
        <b>Total exercises: {sumOfExe}</b>
      </p>
    </div>
  );
};

export default App;
