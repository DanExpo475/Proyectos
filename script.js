document.addEventListener("DOMContentLoaded", () => {


  /* =====================================
     ANIMACIONES AL HACER SCROLL
  ===================================== */

  const elements = document.querySelectorAll(
    ".experience-item, .project-card, .video-card, .publication-list a"
  );


  elements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(20px)";

    element.style.transition =
      `opacity .6s ease ${Math.min(index * 50, 300)}ms,
       transform .6s ease ${Math.min(index * 50, 300)}ms`;

  });


  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.08
    }
  );


  elements.forEach((element) => {

    observer.observe(element);

  });


});
