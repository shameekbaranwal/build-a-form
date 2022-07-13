import React from 'react';

import CreateNewFormButton from '../components/Home/CreateNewFormButton.jsx';
import FormsList from '../components/Home/FormsList.jsx';
// welcome to form builder

export default function Home() {
	const forms = JSON.parse(localStorage.getItem('forms'));

	return (
		<div className='flex flex-col w-full h-full gap-y-8'>
			<FormsList forms={forms} />
			<CreateNewFormButton />
		</div>
	);
}
