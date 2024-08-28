import { useState } from "react";

// Simple button component
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

// Statistic line
const StatisticLine = ({ name, value }) => (
  <tr>
    <th style={{ textAlign: "left" }}>{name}:</th>
    <td>{value}</td>
  </tr>
);

// Statistics display
const Statistics = ({ feedback }) => {
  const voteNums = [feedback.good, feedback.neutral, feedback.bad];
  const totalVotes = voteNums.reduce((curr, vote) => curr + vote, 0);
  const score = ((voteNums[0] - voteNums[2]) / totalVotes).toFixed(2);
  const posPercent = ((voteNums[0] / totalVotes) * 100).toFixed(2);

  if (!totalVotes) return <p>Not enough data</p>;
  else
    return (
      <table>
        <tbody>
          <StatisticLine name={"Good"} value={voteNums[0]} />
          <StatisticLine name={"Neutral"} value={voteNums[1]} />
          <StatisticLine name={"Bad"} value={voteNums[2]} />
          <StatisticLine name={"Total"} value={totalVotes} />
          <StatisticLine name={"Score"} value={score} />
          <StatisticLine name={"Positive Percentage"} value={posPercent} />
        </tbody>
      </table>
    );
};

// A feedback app which lets you give feedback based on the three options "Good," "Neutral," and "Bad."
// The data gets reset when the session is terminated.
const App = () => {
  // The state. The feedback options can be changed if needed.
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Accepts a vote and increases it.
  const voteIncease = (state) => {
    setFeedback({
      ...feedback,
      [state]: feedback[state] + 1,
    });
  };

  return (
    <>
      <h1>Food Voting System</h1>
      <Button text={"Good"} onClick={() => voteIncease("good")} />
      <Button text={"Neutral"} onClick={() => voteIncease("neutral")} />
      <Button text={"Bad"} onClick={() => voteIncease("bad")} />
      <Statistics feedback={feedback} />
    </>
  );
};

export default App;
