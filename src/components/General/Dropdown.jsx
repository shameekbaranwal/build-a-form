/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Dropdown({ options, setValue, value }) {
	return (
		<Menu as='div' className='relative z-10 inline-block w-1/3 text-left'>
			<div>
				<Menu.Button
					className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none hover:bg-gray-100 hover:shadow focus:shadow-lg'
				>
					{value}
					<ChevronDownIcon
						className='w-5 h-5 ml-2 -mr-1'
						aria-hidden='true'
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1'>
						{options.map((option, index) => (
							<Menu.Item key={index}>
								{({ active }) => (
									<button
										className={classNames(
											active
												? 'bg-gray-100 text-gray-900'
												: 'text-gray-700',
											'block px-4 py-2 text-sm w-full',
										)}
										onClick={() => setValue(option)}
									>
										{option}
									</button>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
