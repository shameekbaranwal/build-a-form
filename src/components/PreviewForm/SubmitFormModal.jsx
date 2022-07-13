import React from 'react';

import SubmitErrorModal from './SubmitErrorModal.jsx';
import SubmitSuccessModal from './SubmitSuccessModal.jsx';

export default function SubmitFormModal({
	showModal,
	setShowModal,
	error,
	content,
}) {
	return (
		showModal &&
		(error ? (
			<SubmitErrorModal
				content={content}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		) : (
			<SubmitSuccessModal
				content={content}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		))
	);
}
