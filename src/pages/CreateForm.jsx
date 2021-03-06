import React, { useState } from 'react';

import QuestionEditable from '../components/CreateForm/QuestionEditable.jsx';
import InputField from '../components/CreateForm/InputField.jsx';
import useQuestions from '../hooks/useQuestions.jsx';
import AddQuestionButton from '../components/CreateForm/AddQuestionButton.jsx';
import SaveFormButton from '../components/CreateForm/SaveFormButton.jsx';

export default function CreateForm() {
	const [title, setTitle] = useState('');
	const { questions, addQuestion, removeQuestion, updateQuestion } =
		useQuestions();

	const formData = { title, questions };

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
			<AddQuestionButton onClick={addQuestion} />

			<SaveFormButton formData={formData} />
		</div>
	);
}
