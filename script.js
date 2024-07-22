const btn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const inner_btn = document.getElementById("close-btn");

btn.addEventListener('click',() => sidebar.style.left = '0px');
inner_btn.addEventListener('click',() => sidebar.style.left = '-250px');