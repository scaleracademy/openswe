const tooltips = document.querySelectorAll('.oswe-tooltip');

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

tooltips.forEach((tooltip) => {
  const { parentid } = tooltip.dataset;

  const parentEl = document.getElementById(parentid);
  const popperInstance = Popper.createPopper(parentEl, tooltip, {
    placement: 'top',
    modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
  });

  const show = () => {
    tooltip.setAttribute('data-show', '');
    popperInstance.update();
  }
  
  const hide = () => {
    tooltip.removeAttribute('data-show');
  }
  
  showEvents.forEach((event) => {
    parentEl.addEventListener(event, show);
  });
  
  hideEvents.forEach((event) => {
    parentEl.addEventListener(event, hide);
  });
});
