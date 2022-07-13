import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import QuestionEditable from '../components/CreateForm/QuestionEditable.jsx';
import InputField from '../components/CreateForm/InputField.jsx';
import useQuestions from '../hooks/useQuestions.jsx';
import AddQuestionButton from '../components/CreateForm/AddQuestionButton.jsx';
import SaveFormButton from '../components/CreateForm/SaveFormButton.jsx';
import { FormsContext } from '../contexts/FormsContext.jsx';

export default function CreateForm() {
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

	const [title, setTitle] = useState(forms[id].title);
	const { questions, addQuestion, removeQuestion, updateQuestion } =
		useQuestions(forms[id].questions);

	const formData = { title, questions };

	return (
		<div className='flex flex-col '>
			<h2 className='w-full py-2 my-4 font-mono text-lg text-center bg-green-400/80'>
				edit form #{id + 1}
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

			<SaveFormButton formData={formData} formID={id} />
		</div>
	);
}
