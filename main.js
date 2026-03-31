// Changes content when clicking on button/tab
const setUpTabs = () => {
  document.querySelectorAll(".tabs__button").forEach(button => {
      button.addEventListener("click", () => {
        const sideBar = button.parentElement;
        const tabsContainer = sideBar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

        sideBar.querySelectorAll(".tabs__button").forEach(button => {
          button.classList.remove("tabs__button--active");
        });

        tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
          tab.classList.remove("tabs__content--active");
        });

        button.classList.add("tabs__button--active");
        tabToActivate.classList.add("tabs__content--active");
        
     });
  });
}

// Invoke setUpTabs
document.addEventListener("DOMContentLoaded", () => {
    setUpTabs();

    // Activate first button/tab after loadiing

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
      tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
  });
});



