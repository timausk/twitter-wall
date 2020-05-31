import { html } from 'htm/preact';
import Tweet from './Tweet';

const App = ({data}) => {
  return html`
    <div id="js-grid" class="grid">
        <${Tweet} data=${data} />
    </div>
  `;
};

export default App;
