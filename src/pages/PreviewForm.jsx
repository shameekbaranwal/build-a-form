import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FormsContext } from '../contexts/FormsContext.jsx';
import Question from '../components/PreviewForm/Question.jsx';
import SubmitButton from '../components/PreviewForm/SubmitButton.jsx';
import useAnswers from '../hooks/useAnswers.jsx';

export default function PreviewForm() {
	// decrement because the user will see 1-indexed forms but it is stored as 0-indexed
	let { id } = useParams();
	id--;
	const { forms } = useContext(FormsContext);
	if (!forms[id])
		return (
			<div className='mt-10 text-2xl text-center text-red-600'>
				<p>404</p>
			</div>
		);
	const { questions, title } = forms[id];

	const { answers, updateAnswer, getFinalAnswers } = useAnswers(questions);

	return (
		<form className='flex flex-col' onSubmit={e => e.preventDefault()}>
			<div className='w-full py-2 my-4 font-mono text-lg text-center bg-green-400/80'>
				<h2>{title}</h2>
				<p className='text-sm'>(preview)</p>
			</div>

			<div className='flex flex-col gap-y-4'>
				{questions.map((ques, index) => {
					return (
						<Question
							key={index}
							question={ques}
							answer={answers[index]}
							index={index}
							updateAnswer={a => updateAnswer(index, a)}
						/>
					);
				})}
			</div>

			<SubmitButton getAnswers={getFinalAnswers} questions={questions} />
		</form>
	);
}
