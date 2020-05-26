import { html } from 'htm/preact';

const List = ({ data }) => {
  return html`
    <!-- loop over tweets -->
    ${data.map(i => html`
      <div>
        ${i}
      </div>
    `)}
  `;
};

export default List;
