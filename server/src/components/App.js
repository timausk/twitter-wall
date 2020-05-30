import { html } from 'htm/preact';
import Tile from './Tile';

const App = ({data}) => {
  return html`
    <div id="js-grid" class="grid">
        <${Tile} data=${data} />
    </div>
  `;
};

export default App;
