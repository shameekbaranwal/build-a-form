import { PlusCircleIcon } from '@heroicons/react/solid';

export default function AddOptionButton({ onClick }) {
	return (
		<button
			className='flex items-center justify-center px-8 py-2 mt-4 transition-all duration-200 rounded bg-teal-400/40 group gap-x-2 hover:bg-teal-400/60'
			onClick={onClick}
		>
			<PlusCircleIcon
				className='text-teal-700 group-hover:text-teal-900 group-hover:animate-spin'
				width={20}
			/>
			<p className='text-sm'>new option</p>
		</button>
	);
}
