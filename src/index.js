import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App';
import './index.css';
import { MiniApp } from './miniapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MiniApp />
	</React.StrictMode>,
);
