import React, { useEffect, useState } from 'react';

export default function useAnswers(questions) {
	const defaultAns = questions.map(q => (q.type === 'checkbox' ? {} : ''));

	const [answers, setAnswers] = useState(defaultAns);

	const updateAnswer = (index, value) => {
		const newAnswers = [...answers];
		newAnswers[index] = value;
		setAnswers(newAnswers);
	};

	const getFinalAnswers = () => {
		const finalAnswers = [];
		questions.forEach((q, index) => {
			if (q.type === 'checkbox') {
				const keys = Object.keys(answers[index]);
				const val = keys.filter(k => answers[index][k]);
				finalAnswers.push(val);
			}
			if (q.type === 'dropdown') finalAnswers.push(answers[index]);
		});
		return finalAnswers;
	};

	return { answers, updateAnswer, getFinalAnswers };
}
