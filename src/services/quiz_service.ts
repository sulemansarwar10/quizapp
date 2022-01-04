import { Quiz, questiontype } from '../Types/quiztypes';

const shufflearray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)

export const getquizdetails = async (questions: Number, level: string): Promise<questiontype[]> => {
    const res = await fetch(`https://opentdb.com/api.php?%20amount=${questions}&%20difficulty=${level}&type=multiple`)
    let { results } = await res.json();

    const quiz: questiontype[] = results.map((questionobj: Quiz) => {
        return {
            question: questionobj.question,
            answer: questionobj.correct_answer,
            options: shufflearray(questionobj.incorrect_answers.concat(questionobj.correct_answer)),
        }
    })

    return quiz;
}