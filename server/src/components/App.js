import { html } from 'htm/preact';
import Tile from './Tile';

const App = ({data}) => {
  return html`
    <${Tile} data=${data} />
  `;
};

export default App;
