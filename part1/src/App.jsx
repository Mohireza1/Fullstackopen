const Greeting = (props) => {
  console.log(props);
  const plural = props.number > 1 ? "s" : "";
  const verb = props.number > 1 ? "are" : "is";
  return (
    <div>
      <p>Greetings, {props.name}. There {verb} {props.number} other robot{plural} on this page as well!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <p>Hello World!</p>
      <Greeting name = "Daniel" number = {7 + 8} />
      <Greeting name = "Marry" number = {1} />
    </div>
  )
}

export default App