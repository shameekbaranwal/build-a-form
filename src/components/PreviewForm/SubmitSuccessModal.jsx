import React from 'react';

import Modal from '../General/Modal.jsx';

export default function SubmitSuccessModal({
	showModal,
	setShowModal,
	content,
}) {
	return (
		<Modal open={showModal} setOpen={setShowModal}>
			<div className='font-Nunito'>
				<h3 className='text-xl font-bold text-center text-green-600'>
					success
				</h3>
				<p className='m-4'>your submission was made successfully.</p>
				<ul className='mx-4'>
					{content.map((q, index) => (
						<li
							key={index}
							className='flex flex-col font-extralight'
						>
							<p className='font-bold'>{`Q) ${q.question}`}</p>
							<p className=''>{`A) ${
								q.answer.length === 0
									? 'not answered'
									: q.answer
							}`}</p>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	);
}
