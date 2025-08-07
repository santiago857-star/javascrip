  document.addEventListener("DOMContentLoaded", function () {
      const imagenes = document.querySelectorAll(".preview");

      imagenes.forEach(function (img) {
        img.addEventListener("mouseover", function () {
          img.style.transform = "scale(2)";
          img.style.zIndex = "10";
          img.style.position = "relative";
        });

        img.addEventListener("mouseout", function () {
          img.style.transform = "scale(1)";
          img.style.zIndex = "";
          img.style.position = "";
        });
    });
    });
