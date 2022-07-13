import React from 'react';

import Dropdown from '../General/Dropdown.jsx';

export default function DropdownOptions({
	options,
	answer,
	updateAnswer,
	colour,
}) {
	return (
		<Dropdown
			options={options}
			setValue={updateAnswer}
			value={answer}
			colour={colour}
			large
		/>
	);
}
