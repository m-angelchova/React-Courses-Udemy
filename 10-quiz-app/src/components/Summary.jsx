import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAswShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAswShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAswShare = 100 - skippedAswShare - correctAswShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAswShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAswShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAswShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let ccsClass = "user-answer";

          if (answer === null) {
            ccsClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            ccsClass += " correct";
          } else {
            ccsClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={ccsClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
