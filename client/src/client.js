import { hydrate } from 'preact';
import App from '../../server/src/components/App';
import '../scss/main.scss';

hydrate(App(), document.getElementById('root'));
