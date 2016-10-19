

    function startVideo(clickedElement) {
        var source = clickedElement.getAttribute("data-source");
        var title = clickedElement.innerText;
        var video = document.getElementById("active-video");

        document.getElementById("video-title").innerText = title;
        video.setAttribute("src", source);

  }
