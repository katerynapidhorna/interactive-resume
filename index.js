$(() => {
  const nav = $(".nav-list");
  let lastScrollTop = 0;
  const $w = $(window);
  if ($w.scrollTop() >= 698) {
    nav.css({
      top: `40px`,
      position: "fixed",
    });
  }
  // TODO: throttle scroll callback
  $w.on("scroll", () => {
    const currentScrollTop = $w.scrollTop();
    const direction = lastScrollTop < currentScrollTop ? "down" : "up";
    lastScrollTop = currentScrollTop;
    if (direction === "down" && lastScrollTop >= 650) {
      nav.css({
        top: "40px",
        position: "fixed",
      });
    }
    if (direction === "up") {
      if (nav.offset().top <= $(".profile-container").offset().top) {
        nav.css({
          top: "0",
          position: "absolute",
        });
      }
    }
  });
});
