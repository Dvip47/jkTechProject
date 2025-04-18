import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "../utils/backToHome";

export default function QA() {
  const router = useRouter();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);

  const askQuestion = async () => {
    if (!question) return;

    // Mocking backend response
    setAnswer("Loading...");
    setTimeout(() => {
      setAnswer(`Answer for: "${question}" - Lorem ipsum stuff.`);
    }, 800);
  };

  return (
    <div className="centered-container">
      <div className="qa-box">
        <BackButton />
        <h1 className="text-xl mb-4">Ask a Question</h1>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question"
          className="qa-input"
        />
        <button
          onClick={askQuestion}
          className="qa-button"
        >
          Ask
        </button>
        {answer && (
          <div className="qa-answer">
            <strong>Answer:</strong> {answer}
          </div>
        )}
      </div>
    </div>
  );
}