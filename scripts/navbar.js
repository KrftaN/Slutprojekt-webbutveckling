document.addEventListener("DOMContentLoaded", () => {
	let body;
	let menu;
	let nav;

	const init = () => {
		body = document.querySelector("body");
		menu = document.querySelector(".menu-icon");

		applyListeners();
	};

	const applyListeners = () => {
		menu.addEventListener("click", () => {
			toggleNav(body, "nav-active");
			nav.style.display = "inline-block";
		});
	};

	const toggleNav = () => {
		if (body.classList.contains("nav-active")) body.classList.remove("nav-active");
		else body.classList.add("nav-active");
	};

	init();
});
