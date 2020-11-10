<template>
  <div class="top content">
    <div class="logo">
      Benoit Martel
      <!-- <img src="/media/logo.png"> -->
    </div>
    <div class="titre">
      Développeur multimédia <br>\ Motion designer
    </div>
    <ul class="main menu">
      <nuxt-link id="portfolio" tag="li" exact to="/" :class="isPortfolioActive">
        Portfolio
      </nuxt-link>
      <nuxt-link id="about" tag="li" to="/about">
        Mon profil
      </nuxt-link>
      <nuxt-link id="contact" tag="li" to="/contact" :class="isContactActive">
        Contact
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    isContactActive () {
      return (this.$route.name === 'success') ? 'nuxt-link-active' : ''
    },
    isPortfolioActive () {
      return (this.$route.path.includes('projets')) ? 'nuxt-link-active' : ''
    }
  }
}
</script>
<style>
.logo {
  font-size: 2em;
  /* color:orange; */
}
.titre {
/* color:white!important; */
  margin: 0 0 20px 0;
  font-size: 1.5em;
}
.top ul {
  text-transform: uppercase;
}
.top {

  padding-top: 20px;
  width: 100%;
  background: white;
  /* background-image: url('/media/arduino.jpg'); */
  background-size: 150%;
  background-position: 10% 20%;
}
.menu li:hover {
  text-decoration: underline;
}
.nuxt-link-active,
.active {
  background-color: palegreen;
}

.titre {
  color: orange;
}
.menu {
  list-style: none;
  padding-left: 0;
  width: 100%;
  /* border-bottom: 1px dotted #ccc; */
  overflow: auto;
  display: table;
  margin: 0 auto;
}

.menu li {
  padding: 10px 10px;
  float: left;
  display: block;
}

.menu li:hover:not(.nuxt-link-active) {
  color: black;
}
@media screen and (max-width: 500px) {
  .menu li{
	font-size: 90%;
	padding:10px 10px;
  }
}
</style>
