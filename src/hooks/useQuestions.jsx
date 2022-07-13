import { useState } from 'react';

export default function useQuestions(
	startingQuestions = [
		{
			label: '',
			type: 'checkbox',
			mandatory: false,
			options: ['New Option'],
		},
		{
			label: '',
			type: 'checkbox',
			mandatory: false,
			options: ['New Option'],
		},
	],
) {
	const [questions, setQuestions] = useState(startingQuestions);

	const updateQuestion = (index, question) => {
		const newQuestions = [...questions];
		newQuestions[index] = question;
		setQuestions(newQuestions);
	};

	const addQuestion = () => {
		const newQuestions = [...questions];
		newQuestions.push({
			label: '',
			type: 0,
			mandatory: false,
			options: ['Option 1'],
		});
		setQuestions(newQuestions);
	};

	const removeQuestion = index => {
		const newQuestions = [...questions];
		newQuestions.splice(index, 1);
		setQuestions(newQuestions);
	};

	return {
		questions,
		setQuestions,
		updateQuestion,
		addQuestion,
		removeQuestion,
	};
}
