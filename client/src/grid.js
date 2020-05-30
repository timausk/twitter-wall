(function () {
  const grid = window.document.getElementById('js-grid');
  const gridItem = document.getElementsByClassName('js-gridItem');
  window.onload = resizeGridItems();
  window.addEventListener('resize', resizeGridItems);

  function resizeGridItems(){
    for (let item of gridItem) {
      let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowSpan = Math.ceil((item.firstChild.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = 'span ' + rowSpan;
    }
  }
})();
