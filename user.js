const calendarSelector = ".K2fuAf";
const calendarObserver = new MutationObserver(function(mutations) {
  disableMousewheel();
});

// Disables mousewheel events if the view is month mode
const disableMousewheel = () => {
  if (
    document.querySelector("div[data-active-view]").dataset.activeView !==
    "month"
  )
    return;
  document.querySelector(calendarSelector).addEventListener("mousewheel", e => {
    e.preventDefault();
    e.stopPropagation();
  });
};

const init = () => {
  if (!document.querySelector(calendarSelector)) {
    window.setTimeout(init, 500);
    return;
  }
  disableMousewheel();
  // Observes view mode switching
  calendarObserver.observe(document.querySelector("body"), {
    attributes: true
  });
  // Observes month to month moving
  calendarObserver.observe(document.querySelector(".Xro3Db-nUpftc"), {
    attributes: true,
    childList: true
  });
};
init();
