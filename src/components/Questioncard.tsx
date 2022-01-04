import React, { SyntheticEvent, useState } from 'react';
import { questionpropstype } from '../Types/quiztypes'
const Questioncard: React.FC<any> = ({ question, options, callback }) => {
    const [currsel, setcurrsel] = useState<string>("")
    // console.log(question, options)

    const handleselection = (e: any) => {
        console.log(e)
        setcurrsel(e.target.value)
    }

    return (
        <div className='question-container'>
            <div className='question'>
                {question}
            </div>

            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, currsel)}>
                {options.map((opt: string, ind: number) => {
                    return (
                        <div key={ind}> <label>
                            <input type='radio' name='opt' required checked={currsel === opt} value={opt} onChange={handleselection} />
                            {opt}
                        </label>
                        </div>)
                })}
                <input type='submit' />
            </form>
        </div>
    )
}

export default Questioncard
