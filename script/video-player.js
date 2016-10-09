

    function startVideo(clickedElement) {
        var source = clickedElement.getAttribute("data-source");
        var title = clickedElement.innerText;
        var video = document.getElementById("active-video");

        document.getElementById("video-title").innerText = title;
        video.setAttribute("src", source);

    }

// not Working >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // function setDuration() {
    //     var videosList = document.querySelectorAll(".hiddenVideo")
    //     for (var i = 0; i < videosList.length; i++) {
    //         var videoDuration = videosList[i].duration;
    //         var durationCell = videosList[i].parentElement.nextElementSibling;
    //
    //         if (videoDuration >= 3600) {
    //             durationCell.innerText = String(Math.round((videoDuration / 3600) * 100) / 100) + " hours"
    //         } else if (videoDuration >= 60) {
    //             durationCell.innerText = String(Math.round((videoDuration / 60) * 100) / 100) + " min";
    //         } else {
    //             durationCell.innerText = String(Math.round(videoDuration)) + " sec";
    //         }
    //     } //End for
    // } // end setDuration()
    // not Working >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
