const validateFormData = formData => {
	let message = '';
	let isValid = true;

	const validateTitle = () => {
		if (!formData.title) {
			message += 'form title cannot be left empty.\n';
			isValid = false;
		}
	};

	const validateOption = (option, index, quesIndex) => {
		if (option.length === 0) {
			message += `option ${index + 1} of question ${
				quesIndex + 1
			} cannot be left empty.\n`;
			isValid = false;
		}
	};
	const validateOptions = (options, index) => {
		if (options.length === 0) {
			message += `question ${index + 1} can't have zero options.\n`;
			isValid = false;
		}

		options.forEach((option, i) => validateOption(option, i, index));
	};

	const validateQuestion = (question, index) => {
		if (!question.label) {
			message += `question ${index + 1} label cannot be left empty.\n`;
			isValid = false;
		}
		if (question.type != 'checkbox' && question.type != 'dropdown') {
			message += `invalid type for question ${index + 1}.\n`;
			isValid = false;
		}
		validateOptions(question.options, index);
	};

	const validateQuestions = () => {
		if (formData.questions.length === 0) {
			message += 'form must have atleast one question.\n';
			isValid = false;
		}

		formData.questions.forEach((question, index) =>
			validateQuestion(question, index),
		);
	};

	validateTitle();
	validateQuestions();
	return { message, isValid };
};

export default validateFormData;
