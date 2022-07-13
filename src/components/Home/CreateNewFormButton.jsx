import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/outline';

export default function CreateNewFormButton() {
	return (
		<button className='flex items-center justify-center w-full h-full mb-4 font-mono transition duration-200 bg-green-400/80 group hover:bg-green-300/100'>
			<Link
				to={'/create'}
				className='relative flex items-center justify-center w-full py-2'
			>
				<PlusCircleIcon className='relative w-5 h-5 transition-all duration-200 right-2 group-hover:animate-spin group-hover:w-6 group-hover:h-6' />
				<p>build a new form</p>
			</Link>
		</button>
	);
}
