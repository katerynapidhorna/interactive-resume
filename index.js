$(() => {
  const $w = $(window);

  const doSomething = () => {
    if ($w.width() <= 600) {
      return;
    } else {
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
    }
  };

  //add/remove classes depending on screen width_______START
  if ($w.width() <= 600) {
    $("nav ul").removeClass("nav-list");
    $("nav ul").addClass("media-nav-list");
  } else {
    $("nav ul").removeClass("media-nav-list");
    $("nav ul").addClass("nav-list");
  }

  $w.on("resize", () => {
    if ($w.width() <= 600) {
      $("nav ul").removeClass("nav-list");
      $("nav ul").addClass("media-nav-list");
    } else {
      $("nav ul").removeClass("media-nav-list");
      $("nav ul").addClass("nav-list");
    }
  });
  //add/remove classes depending on screen width_______END

  //changing position of the element on scroll_______START
  const nav = $(".nav-list");
  let lastScrollTop = 0;
  if ($w.scrollTop() >= 698) {
    nav.css({
      top: `40px`,
      position: "fixed",
    });
  }

  $w.on("scroll", () => {
    if ($w.width() <= 600) {
      nav.css({
        top: "0",
        position: "absolute",
      });
      return;
    } else {
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
    }
  });
  //changing position of the element on scroll_______END
});

// TODO: throttle scroll callback
