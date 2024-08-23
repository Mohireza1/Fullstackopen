// Ex 1.0-1.2

// const Header = (props) => {
//   return <h1>{props.coursename}</h1>;
// };

// const Content = (props) => {
//   return (
//     <p>
//       {props.part} {props.exno}
//     </p>
//   );
// };

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.hours.reduce((sum, curr) => sum + curr, 0)}
//     </p>
//   );
// };

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <Header coursename={course} />
//       <ul>
//         <li>
//           <Content part={part1} exno={exercises1} />
//         </li>
//         <li>
//           <Content part={part2} exno={exercises2} />
//         </li>
//         <li>
//           <Content part={part3} exno={exercises3} />
//         </li>
//       </ul>

//       <Total hours={[exercises1, exercises2, exercises3]} />
//     </div>
//   );
// };

// // Ex 1.3

// const Header = (props) => {
//   return <h1>{props.coursename}</h1>;
// };

// const Content = (props) => {
//   return (
//     <p>
//       {props.part} {props.exno}
//     </p>
//   );
// };

// const Total = (props) => {
//   return (
//     <p>
//       <b>Number of exercises:</b>{" "}
//       {props.hours.reduce((sum, curr) => sum + curr, 0)}
//     </p>
//   );
// };

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = {
//     name: "Fundamentals of React",
//     exercises: 10,
//   };
//   const part2 = {
//     name: "Using props to pass data",
//     exercises: 7,
//   };
//   const part3 = {
//     name: "State of a component",
//     exercises: 14,
//   };

//   return (
//     <div>
//       <Header coursename={course} />
//       <ul>
//         <li>
//           <Content part={part1.name} exno={part1.exercises} />
//         </li>
//         <li>
//           <Content part={part2.name} exno={part2.exercises} />
//         </li>
//         <li>
//           <Content part={part3.name} exno={part3.exercises} />
//         </li>
//       </ul>

//       <Total hours={[part1.exercises, part2.exercises, part3.exercises]} />
//     </div>
//   );
// };

// Ex 1.4

// const Header = (props) => {
//   return <h1>{props.coursename}</h1>;
// };

// const Content = (props) => {
//   return (
//     <div>
//       <ul>
//         <li>
//           {props.part[0].name} {props.part[0].exercises}
//         </li>
//         <li>
//           {props.part[1].name} {props.part[1].exercises}
//         </li>
//         <li>
//           {props.part[2].name} {props.part[2].exercises}
//         </li>
//       </ul>
//     </div>
//   );
// };

// const Total = (props) => {
//   const sum = props.hours.reduce((acc, crr) => acc + crr.exercises, 0);
//   console.log(props.hours, sum);
//   return (
//     <p>
//       <b>Number of exercises:</b> {sum}
//     </p>
//   );
// };

// const App = () => {
//   const course = "Half Stack application development";
//   const parts = [
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//     },
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//     },
//     {
//       name: "State of a component",
//       exercises: 14,
//     },
//   ];

//   return (
//     <div>
//       <Header coursename={course} />
//       <Content part={parts} />
//       <Total hours={parts} />
//     </div>
//   );
// };

// Ex 1.5

const Header = (props) => {
  return <h1>{props.coursename}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.part[0].name} {props.part[0].exercises}
        </li>
        <li>
          {props.part[1].name} {props.part[1].exercises}
        </li>
        <li>
          {props.part[2].name} {props.part[2].exercises}
        </li>
      </ul>
    </div>
  );
};

const Total = (props) => {
  const sum = props.hours.reduce((acc, crr) => acc + crr.exercises, 0);
  return (
    <p>
      <b>Number of exercises:</b> {sum}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header coursename={course.name} />
      <Content part={course.parts} />
      <Total hours={course.parts} />
    </div>
  );
};
export default App;
