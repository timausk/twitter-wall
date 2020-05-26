import { hydrate } from 'preact';
import App from '../../server/src/components/App';

hydrate(App(), document.getElementById('root'));
