import { html } from 'htm/preact';
import Tile from './Tile';

const dataArray = ['tile one', 'tile two', 'tile three'];

const App = () => {
  return html`
    <${Tile} data=${dataArray} />
  `;
};

export default App;
