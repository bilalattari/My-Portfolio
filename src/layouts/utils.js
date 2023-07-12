export const tony = {
  stickyNav() {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      const sticky = document.querySelectorAll("header");
      for (let i = 0; i < sticky.length; i++) {
        const stick = sticky[i];
        if (stick) {
          if (offset > 10) {
            stick.classList.add("fixed-header");
          } else {
            stick.classList.remove("fixed-header");
          }
        }
      }
    });
  },
  scrollToActiveNav() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".nav-ul li");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        let a = li.getElementsByTagName("a")[0];
        if (current !== null) {
          a.classList.remove("active");
        }
        if (a.getAttribute("href") == `#${current}`) {
          a.classList.add("active");
        }
      });
    });
  },
  activeSkillProgress() {
    window.addEventListener("scroll", () => {
      const progress_inner = document.querySelectorAll(".skill-bar"),
        triggerBottom = (window.innerHeight / 5) * 5;
      progress_inner.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top,
          boxElement = box.getElementsByClassName("skill-bar-in"),
          boxItem = boxElement[0],
          pWidth = boxItem.getAttribute("aria-valuenow");
        if (boxTop < triggerBottom) {
          boxItem.style.width = `${pWidth}%`;
        } else {
          boxItem.style.width = `${0}%`;
        }
      });
    });
  },
};
