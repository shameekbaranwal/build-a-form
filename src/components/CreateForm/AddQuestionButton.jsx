import { PlusCircleIcon } from '@heroicons/react/solid';

export default function AddQuestionButton({ onClick }) {
	return (
		<button
			className='flex items-center justify-center px-8 py-3 mx-20 mt-3 transition-all duration-200 rounded bg-pink-400/40 group gap-x-2 hover:bg-pink-400/60'
			onClick={onClick}
		>
			<PlusCircleIcon
				className='text-fuchsia-700 group-hover:text-fuchsia-900 group-hover:animate-spin'
				width={20}
			/>
			<p className='font-mono text-base font-bold'>new question</p>
		</button>
	);
}
