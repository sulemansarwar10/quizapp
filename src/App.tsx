import React, { useEffect, useState } from 'react';
import { getquizdetails } from "./services/quiz_service"
import './App.css';
import { questiontype } from './Types/quiztypes'
import Questioncard from './components/Questioncard';
function App() {
  const [quiz, setquiz] = useState<questiontype[]>([])
  const [currstep, setcurrstep] = useState<number>(0)
  const [score, setscore] = useState<number>(0)

  const handlesubmit = (e: React.FormEvent<EventTarget>, selopt: string) => {
    console.log(e)
    e.preventDefault();
    const corrans = quiz[currstep].answer
    if (selopt === corrans) {
      setscore(score + 1);
    }

    console.log(selopt, corrans, score)
    if (currstep !== quiz.length - 1) {
      setcurrstep(currstep + 1);
    }
    else {

    }
  }

  useEffect(() => {
    async function fetchdata() {
      const questions: questiontype[] = await getquizdetails(5, 'easy');
      setquiz(questions)
      // console.log(quiz)

    }
    fetchdata()
  }, [])
  if (!quiz.length)
    return <h4>Loadimg...</h4>
  return (
    <div className="App">

      <Questioncard question={quiz[currstep].question} options={quiz[currstep].options} callback={handlesubmit} />
    </div>
  );
}

export default App;
