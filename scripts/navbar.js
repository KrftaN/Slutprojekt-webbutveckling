function init (){
	const body = document.querySelector("body");
	const menu = document.querySelector(".menu-icon");

	menu.addEventListener("click", () => {
		toggleNav();
	});

	const toggleNav = () => {
		if (body.classList.contains("nav-active")) body.classList.remove("nav-active");
		else body.classList.add("nav-active");
	};
};

document.addEventListener("DOMContentLoaded", init);
