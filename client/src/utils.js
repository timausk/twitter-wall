const debounce = (callback, time) => {
  let timeout;
  return function() {
    const functionCall = () => callback.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

const getDeviceWidth = () => {
  return (window.visualViewport) ? window.visualViewport.width : screen.width;
};

export { debounce, getDeviceWidth };
