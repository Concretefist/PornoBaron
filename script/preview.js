const videoPreview = document.querySelectorAll("video").forEach((video, index) => {
    video.onloadedmetadata = () => {
        const videoDuration = video.duration;

        let previewTimeout = null;

        function startPreview() {
            video.muted = true;
            video.currentTime = 1;
            // video.playbackRate = 3;
            video.play();
            previewTimeout = setTimeout(() => {
                video.currentTime = 1 / 3 * videoDuration;
                previewTimeout = setTimeout(() => video.currentTime = 2 / 3 * videoDuration, 2000);
            }, 2000);
        }

        function stopPreview() {
            video.currentTime = 4;
            video.playbackRate = 1;
            video.pause();
        }

        video.addEventListener("mouseenter", () => {
            startPreview();
            // previewTimeout = setTimeout(stopPreview, 4000);
        });

        video.addEventListener("mouseleave", () => {
            clearTimeout(previewTimeout);
            previewTimeout = null;
            stopPreview();
        });
    }
});