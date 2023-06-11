function moveRight() {
	$("#list li:last-of-type").insertAfter("#moveR");
}

function moveLeft() {
	$("#list li:first-of-type").insertBefore("#moveL");
}

// setInterval(moveRight, 4000);

$("#moveR").click(moveRight);
$("#moveL").click(moveLeft);

const clientElemWidth = $(".client").width();
let clientsSectionTranslateX = clientElemWidth;

setInterval(() => {
	$(".clients-section").css(
		"transform",
		`translateX(${clientsSectionTranslateX}px)`
	);

	if (clientsSectionTranslateX / clientElemWidth === 3) {
		clientsSectionTranslateX = 0;
	} else {
		clientsSectionTranslateX += clientElemWidth;
	}
}, 2000);

$(".last-link").click(function() {
	$(".search-section").toggle();
});

window.addEventListener("scroll", handleScrollUp);

function handleScrollUp() {
	$(".footer-scroll-up").css(
		"display",
		document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000
			? "block"
			: "none"
	);
}

function scrollToTop() {
	const scroll = document.body.scrollTop || document.documentElement.scrollTop;

	$("body").css({ overflow: "auto" });

	if (scroll) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo({ top: 0 }, scroll - scroll / 8);
		$("body").css({ overflow: "hidden" });
	}
}

$(".footer-scroll-up").click(function(e) {
	e.preventDefault();
	scrollToTop();
});

window.onload = () => {
	for (let i = 1; i <= 10; i++) {
		$(
			`<style>.last-projects-cards__card.card-${i}:hover::before { content : "Project ${i}"}</style>`
		).appendTo("head");
	}
};
