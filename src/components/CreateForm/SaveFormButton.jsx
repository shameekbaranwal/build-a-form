import React, { useState, useContext } from 'react';
import { SaveAsIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

import { validateFormData } from '../../util/Validation';
import { FormsContext } from '../../contexts/FormsContext.jsx';
import SaveErrorModal from './SaveErrorModal.jsx';

// formID is an optional prop, can be passed to update an existing form. if it's not passed, this will create a new form
export default function SaveFormButton({ formData, formID }) {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [msg, setMsg] = useState('');
	const { addForm, updateForm } = useContext(FormsContext);

	const onClick = () => {
		const { isValid, message } = validateFormData(formData);

		if (isValid) {
			if (formID === undefined) addForm(formData);
			else updateForm(formID, formData);

			navigate('/');
		} else {
			setMsg(message);
			setShowModal(true);
		}
	};

	return (
		<>
			<SaveErrorModal
				showModal={showModal}
				setShowModal={setShowModal}
				reasons={msg}
			/>
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
