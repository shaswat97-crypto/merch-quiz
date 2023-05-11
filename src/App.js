import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./components/StartPage";
import Question from "./components/Question";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [result, setResult] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/question/:id",
      element: <Question timeLeft={timeLeft} setTimeLeft={setTimeLeft} setResult={setResult} />,
    },
    {
      path: "/result",
      element: <Result result={result} timeLeft={timeLeft} />,
    },
  ]);

  return (
    <div className="cont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
