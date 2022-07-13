import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import QuestionEditable from '../components/CreateForm/QuestionEditable.jsx';
import InputField from '../components/CreateForm/InputField.jsx';
import useQuestions from '../hooks/useQuestions.jsx';
import { PlusCircleIcon } from '@heroicons/react/solid';

export default function CreateForm() {
	const { id } = useParams();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { questions, addQuestion, removeQuestion, updateQuestion } =
		useQuestions();

	return (
		<div className='flex flex-col '>
			<h2 className='w-full py-2 my-4 font-mono text-lg text-center bg-green-400/80'>
				create a new form
			</h2>
			<InputField
				className='my-4 font-mono font-bold'
				name={'title of the form'}
				value={title}
				setValue={setTitle}
				centered
			/>

			<div className='flex flex-col gap-y-4'>
				{questions.map((ques, index) => (
					<QuestionEditable
						key={index}
						questions={questions}
						index={index}
						updateQuestion={q => updateQuestion(index, q)}
						removeQuestion={() => removeQuestion(index)}
					/>
				))}
			</div>
			<button
				className='flex items-center justify-center px-8 py-4 mt-4 transition-all duration-200 rounded bg-pink-400/40 group gap-x-2 hover:bg-pink-400/60'
				onClick={addQuestion}
			>
				<PlusCircleIcon
					className='text-fuchsia-700 group-hover:text-fuchsia-900 group-hover:animate-spin'
					width={20}
				/>
				<p className='font-mono text-base font-bold'>new question</p>
			</button>
		</div>
	);
}
