const menu = document.querySelector(".menu");
const navigationLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
	const isMenuOpen = navigationLinks.style.display === "flex";

	navigationLinks.style.display = isMenuOpen ? "none" : "flex";
	navigationLinks.style.position = "absolute";
	navigationLinks.style.top = "84px";
	navigationLinks.style.right = "17px";
	navigationLinks.style.padding = "22px";
	navigationLinks.style.background = "#fbf7ef";
	navigationLinks.style.flexDirection = "column";
	navigationLinks.style.alignItems = "flex-start";
});
