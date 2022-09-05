// Functionality for sidebar-toggle

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

// Clicking-sidebar toggle
toggleBtn.addEventListener('click', () => {
  sideBar.classList.toggle('show-sidebar');
});

// Closing sidebar
closeBtn.addEventListener('click', () =>
  sideBar.classList.remove('show-sidebar')
);
