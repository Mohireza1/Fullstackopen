import { useState } from "react";

// Simple button component
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

// Statistics displat
const Vote = ({ feedback, option }) => (
  <p>
    {feedback[option][0]}: {feedback[option][1]}
  </p>
);

// A feedback app which lets you give feedback based on the three options "Good," "Neutral," and "Bad."
// The data gets reset when the session is terminated.
const App = () => {
  // The state. The feedback options can be changed if needed.
  const [feedback, setFeedback] = useState({
    good: ["Delicious", 0],
    neutral: ["Meh", 0],
    bad: ["Awful", 0],
  });

  const voteNums = [feedback.good[1], feedback.neutral[1], feedback.bad[1]];
  const totalVotes = voteNums.reduce((curr, vote) => curr + vote, 0);
  const score = (voteNums[0] - voteNums[2]) / totalVotes;
  const posPercent = (voteNums[0] / totalVotes) * 100;

  // Accepts a vote and increases it.
  const voteIncease = (state) => {
    setFeedback({
      ...feedback,
      [state]: [feedback[state][0], feedback[state][1] + 1],
    });
  };

  return (
    <div>
      <h1>Food Voting System</h1>
      <Button text={feedback.good[0]} onClick={() => voteIncease("good")} />
      <Button
        text={feedback.neutral[0]}
        onClick={() => voteIncease("neutral")}
      />
      <Button text={feedback.bad[0]} onClick={() => voteIncease("bad")} />
      <h2>Statistics:</h2>
      <Vote feedback={feedback} option={"good"} />
      <Vote feedback={feedback} option={"neutral"} />
      <Vote feedback={feedback} option={"bad"} />
      <p>Total: {totalVotes}</p>
      <p>Score: {isNaN(score) ? 0 : score.toFixed(2)}</p>
      <p>Positive Percent: {isNaN(posPercent) ? 0 : posPercent.toFixed(2)}%</p>
    </div>
  );
};

export default App;
