import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateNewFormButton() {
	return (
		<button className='flex items-center justify-center w-full h-full mb-4 font-mono transition duration-200 bg-green-400/80 group hover:bg-green-300/100'>
			<Link
				to='/create/0'
				className='relative flex items-center justify-center w-full py-2'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='relative w-5 h-5 transition-all duration-200 right-4 group-hover:animate-spin group-hover:w-6 group-hover:h-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
				<p>create a new form</p>
			</Link>
		</button>
	);
}
