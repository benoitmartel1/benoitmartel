<template>
  <div>
	<nuxt-link exact to="/" class="fas fa-arrow-left"></nuxt-link>
	<div class="content">
		<!-- Header--> 
		<div class="header">
			<div class="client">{{ item.client }}</div>
			<div class="description">{{ item.projet }}</div>
		</div>

		<div class="row" v-for="video in item.videos" :key="video.path">
			<!-- Feature-->
			<div class="video-container" >
				<img class="play" src="/media/play.png">
				<video  controls onclick="this.paused ? this.play() : this.pause();" controlsList="nodownload">
					<source :src="videoPath(video)" type="video/mp4">
				</video>
			</div>
			<!-- descriptif latéral --> 
			<div class="text-container">
				<div class="description">{{ item.description }}</div>
				<div v-if="item.taches" class="taches">
					<ul>
						<li v-for="tache in item.taches" :key="tache">{{tache}}</li>
					</ul>
				</div>
				<div v-if="item.ressources" class="ressources">
					<h4>Ressources utilisées</h4>
					<ul>
						<li v-for="ressource in item.ressources" :key="ressource">{{ressource}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>
<script>
var contents = require("~/assets/js/content.json");
var items = contents.items;

export default {
  data: function() {
    return { item: false };
  },
  methods: {
    videoPath: function(v) {
      return "/media/" + v.path + ".mp4";
    }
  },
  mounted: function() {
    this.item = items.filter(item => item.link == this.$route.params.projet)[0];
    $("#portfolio").addClass("active");
  },
  beforeRouteLeave(to, from, next) {
    $("#portfolio").removeClass("active");
    next();
  }
};
</script>
<style>
.content {
  margin-top: 0;
}
.video .text {
  float: right;
}
.header {
  margin: 20px 0;
  animation: 400ms ease-out 0s 1 slideInFromRight;
}
.header .client {
  font-size: 1.1em;
  font-weight: 700;
}
.header .description {
  font-size: 1.4em;
}

.fas {
  transition: all 200ms ease;
  font-size: 1.5em;
  padding: 12px 8px 0 0;
}
.fas:hover {
  transform: translateX(-6px);
}
.row {
  width: 100%;
}
.row .video-container {
  width: 60%;
  margin-right: 3%;
  float: left;
}
.play {
  left: 38%;
  top: 28%;
  width: 25%;
  position: absolute;
  z-index: 100;
  opacity: 0.5;
  border: none;
}
@media screen and (max-width: 500px) {
  .row .video-container {
    width: 100%;
  }
}

video {
  width: 100%;
}
.ressources {
  margin-top: 30px;
  color: #333;
}
.ressources ul {
  font-size: 0.9em;
  margin-left: 10px;
}
.text-container .description {
  font-size: 1.4em;
}
</style>
