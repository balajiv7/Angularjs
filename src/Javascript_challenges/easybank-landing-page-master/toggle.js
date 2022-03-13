
    const closeIcon = document.getElementById("close")
    const openIcon = document.getElementById("open")
    const mobileLinks = document.getElementById("mobile-links")


    closeIcon.onclick = function () {
      closeIcon.style.display = "none";
      openIcon.style.display = "block";
      closeIcon.style.opacity = 0;
      openIcon.style.opacity = 1;
      mobileLinks.style.display = "none";
      // this will prevent scrolling
     document.body.style.overflowY = "visible"
    }

    openIcon.onclick = function () {
      openIcon.style.display = "none";
      closeIcon.style.display = "block";
      openIcon.style.opacity = 0;
      closeIcon.style.opacity = 1;
      mobileLinks.style.display = "block";
      // preventing scrolling
      document.body.style.overflowY = "hidden"
    }
