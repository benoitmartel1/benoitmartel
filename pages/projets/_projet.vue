<template>
  <div class="content">
    <nuxt-link exact to="/" class="fas fa-arrow-left"></nuxt-link>
    <div>
      <!-- Header-->
      <div class="header">
        <div class="client">{{ textWithoutBreaks(item.client) }}</div>
        <div class="description">{{ textWithoutBreaks(item.projet) }}</div>
      </div>

      <div class="row">
        <!-- Feature-->
        <div v-if="item.videos" class="media-container">
          <img class="play" src="/media/play.png" />
          <video
            id="video"
            controls
            onclick="this.paused ? this.play() : this.pause();"
            controlslist="nodownload"
            :poster="'/media/'+item.images[0].path+'.jpg'"
          >
            <source :src="videoPath(item.videos[0])" type="video/mp4" />
          </video>
        </div>
        <div v-else-if="item.images" class="media-container">
          <img class="featured" :src="'/media/' + item.images[0].path + '.jpg'" />
        </div>
        <!-- descriptif latéral -->
        <div class="text-container">
          <div class="description">{{ item.description }}</div>
          <div v-if="item.taches" class="taches">
            <ul>
              <li v-for="tache in item.taches" :key="tache">{{tache}}</li>
            </ul>
          </div>
          <div v-if="item.subTaches" class="subTaches">
            <ul>
              <li v-for="tache in item.subTaches" :key="tache">{{tache}}</li>
            </ul>
          </div>
          <div v-if="item.ressources" class="ressources">
            <h4>Ressources utilisées</h4>
            <ul>
              <li v-for="ressource in item.ressources" :key="ressource">{{ressource}}</li>
            </ul>
          </div>
          <div v-if="item.credits" class="ressources">
            <h4>Crédits</h4>
            <ul>
              <li v-for="credit in item.credits" :key="credit">{{credit}}</li>
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
    textWithoutBreaks: function(text) {
      return typeof text == "undefined" ? false : text.replace("<br>", " ");
    },
    videoPath: function(v) {
      return "http://media.benoitmartel.com/" + v.path + ".mp4";
    }
  },
  mounted: function() {
    this.item = items.filter(item => item.link == this.$route.params.projet)[0];
    this.$nextTick(() => {
      $("#portfolio").addClass("active");
      $(".play").on("click", function(e) {
        $(e.target)
          .siblings("video")[0]
          .play();
      });
      $("video")
        .on("pause", function(e) {
          $(e.target)
            .siblings()
            .show();
        })
        .on("play", function(e) {
          $(e.target)
            .siblings()
            .hide();
        });
    });
  },
  beforeRouteLeave(to, from, next) {
    $("#portfolio").removeClass("active");
    next();
  }
};
</script>
<style>
.video .text {
  float: right;
}
.media-container .featured {
  width: 100%;
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
.row .media-container {
  width: 60%;
  margin-right: 3%;
  float: left;
  position: relative;
  margin-bottom: 20px;
}
.play {
  transition: all 200ms ease;
  left: 50%;
  top: 45%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  opacity: 0.5;
  border: none;
  width: 20%;
  z-index: 100;
}
.play:hover {
  opacity: 1;
}
.description {
  font-size: 140%;
}
@media screen and (max-width: 500px) {
  .row .video-container,
  .row .media-container {
    width: 100%;
  }
  .description {
    font-size: 100%;
  }
}

video {
  width: 100%;
}
.ressources {
  margin-top: 30px;
  color: #333;
}
h4 {
  margin-bottom: 10px;
}

.ressources ul {
  font-size: 0.9em;
  padding: 0;
  margin: 0;
}
.taches {
  font-weight: bold;
}
.subTaches {
  position: relative;
  left: 18px;
  font-size: 0.95em;
}
.subTaches ul {
  list-style: circle;
  list-style-position: outside;
}
.subTaches li {
  margin-bottom: 10px;
}
</style>
