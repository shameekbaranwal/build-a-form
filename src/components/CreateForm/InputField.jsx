import React from 'react';

function InputField({ name, value, setValue, className, centered, id }) {
	return (
		<label
			htmlFor={name + ' ' + id}
			className={`text-sm md:text-base relative ${className}`}
		>
			<input
				type='text'
				value={value}
				name={name}
				id={name + ' ' + id}
				onChange={val => setValue(val.target.value)}
				className={`w-full px-4 py-2 text-gray-800 placeholder-transparent transition bg-transparent rounded shadow-sm peer ring-0 focus:outline-none  hover:shadow focus:shadow-lg ${
					centered && 'text-center'
				}`}
				placeholder={name}
			/>
			<p
				className={`absolute text-xs transition-all duration-100 -top-3 opacity-60 peer-focus:opacity-60 peer-focus:-top-3 peer-focus:text-xs peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:opacity-100 cursor-text ${
					centered
						? 'text-center w-full'
						: 'peer-placeholder-shown:left-2 peer-focus:left-0 left-0'
				}`}
			>
				{name}
			</p>
		</label>
	);
}

export default InputField;
