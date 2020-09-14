$(() => {
  const $w = $(window);
  const nav = $(".nav-list");
  const header = $("header");
  const body = $("body");
  let lastScrollTop = 0;

  const addFixed = () => {
    const nav = $(".nav-list");
    nav.css({
      top: `40px`,
      position: "fixed",
      "z-index": "1000",
    });
  };
  const addAbsolute = () => {
    const nav = $(".nav-list");
    nav.css({
      top: "0",
      position: "absolute",
    });
  };

  //add/remove classes depending on screen width_______START
  if (body.width() <= 585) {
    console.log(body.width());
    $("nav ul").removeClass("nav-list");
    $("nav ul").addClass("media-nav-list");
  }

  $w.on("resize", () => {
    console.log($(window).width(), body.width());
    if (body.width() <= 585) {
      $("nav ul").removeClass("nav-list").addClass("media-nav-list");
    } else {
      $("nav ul").removeClass("media-nav-list").addClass("nav-list");
    }
  });
  //add/remove classes depending on screen width_______END

  //changing position of the element on scroll_______START
  if ($w.scrollTop() >= header.height() && body.width() > 585) {
    $("nav ul").removeClass("media-nav-list").addClass("nav-list");
    addFixed();
  }

  $w.on("scroll", () => {
    if (body.width() <= 585) {
      $("nav ul").removeClass("nav-list").addClass("media-nav-list");
      return;
    } else {
      const currentScrollTop = $w.scrollTop();
      const direction = lastScrollTop < currentScrollTop ? "down" : "up";
      lastScrollTop = currentScrollTop;
      if (
        direction === "down" &&
        lastScrollTop >= header.height() - 20 &&
        body.width() > 585
      ) {
        addFixed();
      } else if (direction === "up") {
        if (
          nav.offset().top <= $(".profile-container").offset().top &&
          body.width() > 585
        ) {
          addAbsolute();
        }
      }
    }
  });
  //changing position of the element on scroll_______END
});

// TODO: throttle scroll callback
