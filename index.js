$(() => {
  const $w = $(window);
  const nav = $(".nav-list");
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

  const checkOnScroll = () => {
    $w.on("scroll", () => {
      if ($w.width() <= 600) {
        addAbsolute();
        return;
      } else {
        const currentScrollTop = $w.scrollTop();
        const direction = lastScrollTop < currentScrollTop ? "down" : "up";
        lastScrollTop = currentScrollTop;
        if (direction === "down" && lastScrollTop >= 650) {
          addFixed();
        }
        if (direction === "up") {
          if (nav.offset().top <= $(".profile-container").offset().top) {
            addAbsolute();
          }
        }
      }
    });
  };

  //add/remove classes depending on screen width_______START
  if ($w.width() <= 600) {
    $("nav ul").removeClass("nav-list");
    $("nav ul").addClass("media-nav-list");
  }

  $w.on("resize", () => {
    if ($w.width() <= 600) {
      $("nav ul").removeClass("nav-list").addClass("media-nav-list");
      return;
    } else {
      $("nav ul").removeClass("media-nav-list").addClass("nav-list");
      checkOnScroll();
    }
  });
  //add/remove classes depending on screen width_______END

  //changing position of the element on scroll_______START
  if ($w.scrollTop() >= 698 && $w.width() > 600) {
    addFixed();
  }

  $w.on("scroll", () => {
    if ($w.width() <= 600) {
      addAbsolute();
      return;
    } else {
      const currentScrollTop = $w.scrollTop();
      const direction = lastScrollTop < currentScrollTop ? "down" : "up";
      lastScrollTop = currentScrollTop;
      if (direction === "down" && lastScrollTop >= 650) {
        addFixed();
      }
      if (direction === "up") {
        if (nav.offset().top <= $(".profile-container").offset().top) {
          addAbsolute();
        }
      }
    }
  });
  //changing position of the element on scroll_______END
});

// TODO: throttle scroll callback
