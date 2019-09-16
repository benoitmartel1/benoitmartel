<!-- components/Navbar.vue -->

<template>
  <div class="top">
    <div class="logo">
      Benoit Martel
      <!-- <img src="/media/logo.png"> -->
    </div>
    <div class="titre">Développeur multimédia / Motion designer</div>
    <ul class="main menu">
      <nuxt-link id="portfolio" tag="li" exact to="/">Portfolio</nuxt-link>
      <!-- <nuxt-link id="about" tag="li" to="/about">Moi</nuxt-link> -->
      <nuxt-link id="contact" tag="li" to="/contact">Contact</nuxt-link>
    </ul>
  </div>
</template>


<style>
.logo {
  font-size: 2em;
  padding-left: 8px;
}
.titre {
  margin: 0 0 20px 0;
  padding-left: 8px;
  font-size: 1.5em;
}
.top ul {
  text-transform: uppercase;
}
.top {
  padding-top: 10px;
  width: 50%;
  background: white;
}
.nuxt-link-active,
.active {
  color: black;
  background-color: palegreen;
}
.nuxt-link:hover {
  color: black;
  background-color: palegreen;
}
</style>

