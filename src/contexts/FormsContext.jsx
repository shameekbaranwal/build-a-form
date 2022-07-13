import React, { useState, createContext } from 'react';

const FormsContext = createContext();

const FormsProvider = ({ children }) => {
	let ls = JSON.parse(localStorage.getItem('forms'));
	if (ls === null) ls = [];

	const [forms, setForms] = useState(ls);

	const updateForm = (index, formData) => {
		const newForms = [...forms];
		newForms[index] = formData;
		setForms(newForms);
		localStorage.setItem('forms', JSON.stringify(newForms));
	};

	const addForm = formData => {
		const newForms = [...forms, formData];
		setForms(newForms);
		localStorage.setItem('forms', JSON.stringify(newForms));
	};

	const deleteForm = index => {
		const newForms = [...forms];
		newForms.splice(index, 1);
		setForms(newForms);
		localStorage.setItem('forms', JSON.stringify(newForms));
	};

	const value = { forms, updateForm, addForm, deleteForm };

	return (
		<FormsContext.Provider value={value}>{children}</FormsContext.Provider>
	);
};

export { FormsContext, FormsProvider };
