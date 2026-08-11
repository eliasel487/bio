const gallery = document.querySelector(".terrace-gallery");
const galleryButtons = document.querySelectorAll("[data-gallery-direction]");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCloseButton = lightbox.querySelector(".gallery-lightbox__close");

galleryButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.dataset.galleryDirection === "next" ? 1 : -1;
		const imageWidth = gallery.querySelector("img").clientWidth + 16;

		gallery.scrollBy({
			left: direction * imageWidth,
			behavior: "smooth",
		});
	});
});

gallery.querySelectorAll("img").forEach((image) => {
	image.addEventListener("click", () => {
		lightboxImage.src = image.src;
		lightboxImage.alt = image.alt;
		lightbox.showModal();
	});
});

lightboxCloseButton.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
	if (event.target === lightbox) {
		lightbox.close();
	}
});
