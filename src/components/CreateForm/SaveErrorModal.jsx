import React from 'react';

import Modal from '../General/Modal.jsx';

export default function SaveErrorModal({ showModal, setShowModal, reasons }) {
	return (
		<Modal open={showModal} setOpen={setShowModal}>
			<div className='font-Nunito'>
				<h3 className='text-xl font-bold text-center text-red-500'>
					error
				</h3>
				<p className='mt-4'>
					the form could not be saved for the following reasons:{' '}
				</p>
				<ul className='mx-4'>
					{reasons.split('\n').map(
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
	);
}
