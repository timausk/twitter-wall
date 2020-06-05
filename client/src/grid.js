import Utils from './utils.js';

(window => {
  const minWidthToInitGrid = 568;
  const grid = window.document.getElementById('js-grid');
  const gridItems = document.getElementsByClassName('js-gridItem');

  const alignGridItems = () => {
    let currentWidth = Utils.getDeviceWidth();
    if (currentWidth <= minWidthToInitGrid) {return;}
    for (let item of gridItems) {
      let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowSpan = Math.ceil((item.firstElementChild.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = 'span ' + rowSpan;
    }
  };

  alignGridItems();
  window.addEventListener('resize', Utils.debounce(() => {
    alignGridItems();
  }, 250));
})(window);
