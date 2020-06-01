export default Object.assign({
  debounce: (callback, time) => {
    let timeout;
    return function() {
      const functionCall = () => callback.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  },

  getDeviceWidth: () => {
    return (window.visualViewport) ? window.visualViewport.width : screen.width;
  }
});
