import { hydrate } from 'preact';
import App from '../../server/src/components/App';
import '../scss/main.scss';
import './grid.js';

hydrate(App(), document.getElementById('root'));
