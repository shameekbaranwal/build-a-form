import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { FormsProvider } from './contexts/FormsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<FormsProvider>
				<App />
			</FormsProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
