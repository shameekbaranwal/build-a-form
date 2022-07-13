import React, { useState } from 'react';
import { SaveAsIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

import Modal from '../General/Modal.jsx';
import validateFormData from '../../util/Validation';

// formID is an optional prop, can be passed to update an existing form. if it's not passed, this will create a new form
export default function SaveFormButton({ formData, formID }) {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [msg, setMsg] = useState('');

	const onClick = () => {
		const { isValid, message } = validateFormData(formData);
		if (isValid) {
			const forms = JSON.parse(localStorage.getItem('forms'));
			if (formID) forms[formID] = formData;
			else forms.push(formData);
			localStorage.setItem('forms', JSON.stringify(forms));
			navigate('/');
		} else {
			setMsg(message);
			setShowModal(true);
		}
	};

	return (
		<>
			<Modal open={showModal} setOpen={setShowModal}>
				<div className='font-Nunito'>
					<h3 className='text-xl font-bold text-center text-red-500'>
						error
					</h3>
					<p className='mt-4'>
						the form could not be saved for the following reasons:{' '}
					</p>
					<ul className='mx-4'>
						{msg.split('\n').map(
							(line, index) =>
								line !== '' && (
									<li
										key={index}
										className='flex font-extralight'
									>
										{'‣ ' + line}
									</li>
								),
						)}
					</ul>
				</div>
			</Modal>
			<button
				className='flex items-center justify-center px-8 py-4 mt-6 transition-all duration-200 bg-orange-400/40 group gap-x-2 hover:bg-orange-400/60'
				onClick={onClick}
			>
				<SaveAsIcon
					className='text-orange-700 group-hover:text-orange-900 group-hover:animate-bounce'
					width={20}
				/>
				<p className='font-mono text-lg font-bold'>save the form</p>
			</button>
		</>
	);
}
