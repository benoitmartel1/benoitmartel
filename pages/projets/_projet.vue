<template>
  <div class="content">
    <nuxt-link exact to="/" class="fas fa-arrow-left" />
    <div>
      <!-- Header-->
      <div class="header">
        <div v-if="item.client" class="client">
          {{ textWithoutBreaks(item.client) }}
        </div>
        <h3 v-if="item.projet">
          {{ textWithoutBreaks(item.projet) }}
        </h3>
      </div>

      <div class="row projet">
        <!-- Feature-->
        <div v-if="item.videos" class="media-container">
          <img v-show="videoIsPaused" class="play" src="/media/play.png" @click="playVideo()">
          <video
            id="video"
            controls
            controlslist="nodownload"
            :poster="'/media/'+item.images[0].path+'.jpg'"
            @playing="videoIsPaused = false"
            @pause="videoIsPaused = true"
          >
            <source :src="videoPath(item.videos[0])" type="video/mp4">
          </video>
        </div>
        <div v-else-if="item.images" class="media-container">
          <img class="featured" :src="'/media/' + item.images[0].path + '.jpg'">
        </div>
        <!-- descriptif latéral -->
        <div class="text-container">
          <h3>
            {{ item.description }}
          </h3>
          <div v-if="item.taches" class="taches">
            <ul>
              <li v-for="(tache, index) in item.taches" :key="index">
                {{ tache }}
              </li>
            </ul>
          </div>
          <div v-if="item.subTaches" class="subTaches">
            <ul>
              <li v-for="(tache, index) in item.subTaches" :key="index">
                {{ tache }}
              </li>
            </ul>
          </div>
          <div v-if="item.ressources" class="ressources">
            <h4>Ressources utilisées</h4>
            <ul>
              <li v-for="(ressource,index) in item.ressources" :key="index">
                {{ ressource }}
              </li>
            </ul>
          </div>
          <div v-if="item.credits" class="ressources">
            <h4>Crédits</h4>
            <ul>
              <li v-for="(credit,index) in item.credits" :key="index">
                {{ credit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  async asyncData ({ $content, params }) {
    const item = await $content('projets', params.projet).fetch()
    return { item }
  },
  data () {
    return {
      videoIsPaused: true
    }
  },
  methods: {
    isPlaying () {
      this.videoIsPaused = false
    },
    playVideo () {
      document.getElementsByTagName('video')[0].play()
    },
    textWithoutBreaks (text) {
      return text.replace('<br>', ' ')
    },
    videoPath (v) {
      return 'https://media.benoitmartel.com/' + v.path + '.mp4'
    }
  }
}
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
.row.projet{
display:inline-block!important;
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
