import { CloudUploadIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateAnswers } from '../../util/Validation.js';
import SubmitFormModal from './SubmitFormModal.jsx';

export default function SubmitButton({ questions, getAnswers }) {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [msg, setMsg] = useState('');
	const [hasError, setHasError] = useState(true);
	const answers = getAnswers();

	const onClick = () => {
		const { isValid, message } = validateAnswers(questions, answers);

		if (isValid) {
			const result = answers.map((a, i) => ({
				question: questions[i].label,
				answer: a,
			}));
			console.log(result);
			setMsg(result);
			setHasError(false);
			setShowModal(true);

			// navigate('/');
		} else {
			setMsg(message);
			console.log(message);
			setHasError(true);
			setShowModal(true);
		}
	};
	return (
		<>
			<SubmitFormModal
				showModal={showModal}
				setShowModal={setShowModal}
				content={msg}
				error={hasError}
			/>
			<button
				className='flex items-center justify-center px-8 py-4 mt-6 transition-all duration-200 bg-green-400/40 group gap-x-2 hover:bg-green-400/60'
				onClick={onClick}
				type='submit'
			>
				<CloudUploadIcon
					className='text-green-700 group-hover:text-green-900 group-hover:animate-bounce'
					width={20}
				/>
				<p className='font-mono text-lg font-bold'>submit</p>
			</button>
		</>
	);
}
