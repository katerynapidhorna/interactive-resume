$(() => {
  const $w = $(window);
  const menuUl = $("nav ul");
  const anyMenuItem = $("nav ul li");
  const nav = $(".nav-list");
  const header = $("header");
  const body = $("body");
  const burgerMenu = $(".burger-menu");
  const profileId = $("#profile");
  const experienceId = $("#experience");
  const skillsId = $("#stack");
  const projectsId = $("#projects");
  const contactId = $("#contact");
  const linkToProfileId = $(".nav-list a");
  const menuItems = $(".nav-list li");
  let lastScrollTop = 0;

  const addFixed = () => {
    console.log("class fixed added");
    nav.css({
      top: `110px`,
      position: "fixed",
      "z-index": "1000",
    });
  };
  const addAbsolute = () => {
    console.log("class absolute added");
    if (body.width() > 585) {
      menuUl.css({
        top: "0",
        position: "absolute",
      });
    } else {
      menuUl.css({
        top: "2.8em",
        position: "absolute",
      });
    }
  };

  const addBorderRadius = () => {
    if ($w.scrollTop() >= header.height() && body.width() > 585) {
      menuItems.eq(0).addClass("top-radius");
      menuItems.eq(4).addClass("bottom-radius");
      linkToProfileId.eq(0).addClass("top-radius");
      linkToProfileId.eq(4).addClass("bottom-radius");
    } else {
      menuItems.eq(0).removeClass("top-radius");
      menuItems.eq(4).removeClass("bottom-radius");
      linkToProfileId.eq(0).removeClass("top-radius");
      linkToProfileId.eq(4).removeClass("bottom-radius");
    }
  };

  const highlightMenuSection = () => {
    if ($w.width() <= 585) {
      return;
    } else if (
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
  //if the window bigger then 585 and the page is reloaded call this funcs
  highlightMenuSection();
  addBorderRadius();
  //if the window less then 585px
  burgerMenu.on("click", () => {
    menuUl.css({
      display: "block",
    });
  });

  const changingMenuClassDependingOnWindowWidth = () => {
    if (body.width() <= 585) {
      menuUl.removeClass("nav-list").addClass("media-nav-list");
      linkToProfileId.removeClass("active");
      addAbsolute();
    } else {
      menuUl.removeClass("media-nav-list").addClass("nav-list");
      addFixed();
    }

    if (body.width() > 585 && $w.scrollTop() >= header.height()) {
      highlightMenuSection();
      addBorderRadius();
    }
    if (body.width() > 585) {
      menuUl.css({
        display: "block",
      });
    } else {
      menuUl.css({
        display: "none",
      });
    }
  };

  anyMenuItem.on("click", () => {
    if ($w.width() >= 585) {
      return;
    }
    menuUl.css({
      display: "none",
    });
  });

  //add/remove classes depending on screen width_______START
  changingMenuClassDependingOnWindowWidth();

  $w.on("resize", () => {
    changingMenuClassDependingOnWindowWidth();
  });
  //add/remove classes depending on screen width_______END

  //changing position of the element on scroll_______START
  if ($w.scrollTop() >= header.height() && body.width() > 585) {
    menuUl.removeClass("media-nav-list").addClass("nav-list");
    addFixed();
    highlightMenuSection();
    addBorderRadius();
  }

  $w.on("scroll", () => {
    if (body.width() <= 585) {
      menuUl.removeClass("nav-list").addClass("media-nav-list");
      addAbsolute();
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
