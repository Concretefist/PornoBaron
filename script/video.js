let videosHTML = "";


videos.forEach((videos) => {
    videosHTML += `<div class="video-preview">
    <div class="video">
      <video src="videos/${id}.mp4" muted controls></video>
    </div>
    <div class="video-tags">${videoDescription}}</div>
  </div>
  <div class="video">
    <video src="videos/2.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/3.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/4.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/5.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/6.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/7.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/8.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/9.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/10.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/11.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/12.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/13.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/14.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/15.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/16.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/17.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/18.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/19.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/20.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/21.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/22.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/23.mp4" muted controls></video>
  </div>
  <div class="video">
    <video src="videos/24.mp4" muted controls></video>
  </div>`
});

document.querySelector('.js-video-container').innerHTML = videosHTML;