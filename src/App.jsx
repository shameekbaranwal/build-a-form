import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home.jsx';
import CreateForm from './pages/CreateForm.jsx';
import EditForm from './pages/EditForm.jsx';
import PreviewForm from './pages/PreviewForm.jsx';

function App() {
	if (localStorage.getItem('forms') === null)
		localStorage.setItem('forms', JSON.stringify([]));

	return (
		<div className='flex items-center justify-center w-full h-full min-h-screen py-10 bg-blue-200'>
			<div className='w-full pb-10 mx-2 bg-white rounded-md sm:max-w-sm md:max-w-xl'>
				<Link to='/'>
					<h1 className='my-2 text-2xl font-semibold text-center font-Montserrat'>
						build a form
					</h1>
				</Link>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<CreateForm />} />
					<Route path='/edit/:id' element={<EditForm />} />
					<Route path='/preview/:id' element={<PreviewForm />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
