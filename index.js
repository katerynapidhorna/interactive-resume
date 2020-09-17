$(() => {
  const $w = $(window);
  const nav = $(".nav-list");
  const header = $("header");
  const body = $("body");
  const burgerMenu = $(".burger-menu");
  const mediaNavMenu = $(".media-nav-list");
  const profileId = $("#profile");
  const experienceId = $("#experience");
  const skillsId = $("#stack");
  const projectsId = $("#projects");
  const contactId = $("#contact");
  const linkToProfileId = $(".nav-list a");
  const menuItems = $(".nav-list li");
  let lastScrollTop = 0;

  console.log(profileId.offset().top, profileId.scrollTop());

  const addFixed = () => {
    const nav = $(".nav-list");
    nav.css({
      top: `110px`,
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

  burgerMenu.on("click", () => {
    console.log("clicked");
  });

  const highlightMenuSection = () => {
    if (
      $w.scrollTop() >= profileId.offset().top &&
      $w.scrollTop() < skillsId.offset().top
    ) {
      linkToProfileId.eq(0).addClass("active");
      linkToProfileId.eq(1).removeClass("active");
    } else if ($w.scrollTop() < profileId.offset().top) {
      linkToProfileId.eq(0).removeClass("active");
    } else if (
      $w.scrollTop() >= skillsId.offset().top &&
      $w.scrollTop() < experienceId.offset().top
    ) {
      linkToProfileId.eq(0).removeClass("active");
      linkToProfileId.eq(1).addClass("active");
      linkToProfileId.eq(2).removeClass("active");
    } else if (
      $w.scrollTop() >= experienceId.offset().top &&
      $w.scrollTop() < projectsId.offset().top
    ) {
      linkToProfileId.eq(1).removeClass("active");
      linkToProfileId.eq(2).addClass("active");
      linkToProfileId.eq(3).removeClass("active");
    } else if (
      $w.scrollTop() >= projectsId.offset().top &&
      $w.scrollTop() < contactId.offset().top
    ) {
      linkToProfileId.eq(2).removeClass("active");
      linkToProfileId.eq(3).addClass("active");
      linkToProfileId.eq(4).removeClass("active");
    } else if ($w.scrollTop() >= contactId.offset().top) {
      linkToProfileId.eq(3).removeClass("active");
      linkToProfileId.eq(4).addClass("active");
    }
  };

  const addBorderRadius = () => {
    if ($w.scrollTop() >= header.height() && body.width() > 585) {
      menuItems.eq(0).addClass("top-radius");
      menuItems.eq(4).addClass("bottom-radius");
    } else {
      menuItems.eq(0).removeClass("top-radius");
      menuItems.eq(4).removeClass("bottom-radius");
    }
  };

  highlightMenuSection();
  addBorderRadius();

  //add/remove classes depending on screen width_______START
  if (body.width() <= 585) {
    $("nav ul").removeClass("nav-list");
    $("nav ul").addClass("media-nav-list");
  }

  $w.on("resize", () => {
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
        lastScrollTop >= header.height() &&
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
    highlightMenuSection();
    addBorderRadius();
  });
  //changing position of the element on scroll_______END
});

// TODO: throttle scroll callback
