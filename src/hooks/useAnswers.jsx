import React, { useEffect, useState } from 'react';

export default function useAnswers(questions) {
	const defaultAns = questions.map(q => (q.type === 'checkbox' ? {} : ''));

	const [answers, setAnswers] = useState(defaultAns);

	// useEffect(() => {
	// 	questions.forEach(q => {
	// 		if (q.type === 'checkbox') {
	// 			answers.push([]);
	// 		}
	// 		if (q.type === 'dropdown') answers.push('');
	// 	});

	// 	setAnswers(answers);
	// }, []);

	const updateAnswer = (index, value) => {
		const newAnswers = [...answers];
		newAnswers[index] = value;
		setAnswers(newAnswers);
	};

	const getFinalAnswers = () => {
		const finalAnswers = [];
		questions.forEach((q, index) => {
			if (q.type === 'checkbox')
				finalAnswers.push(answers[index].join(','));
			if (q.type === 'dropdown') finalAnswers.push(answers[index]);
		});
		return finalAnswers;
	};

	return { answers, updateAnswer, getFinalAnswers };
}
