import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function Toggle({ value, setValue }) {
	return (
		<div className=''>
			<Switch
				checked={value}
				onChange={setValue}
				className={`${value ? 'bg-teal-700' : 'bg-gray-400'}
          relative inline-flex h-6 w-10 shrink-0 items-center cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 group`}
			>
				<span className='sr-only'>Use setting</span>
				<span
					aria-hidden='true'
					className={`${
						value
							? 'group-focus:translate-x-2 translate-x-4'
							: 'translate-x-0'
					}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white group-hover:shadow-xl  transition-all duration-300 ease-in-out group-focus:w-7`}
				/>
			</Switch>
		</div>
	);
}
