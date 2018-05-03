<!-- components/Navbar.vue -->

<template>
<div class="top">
	<div class="logo">benoit martel
		<!-- <img src="/media/logo.png"> -->
	</div>
	<ul class="main menu">
			<nuxt-link id="portfolio" tag="li" exact to="/">Portfolio</nuxt-link>
			<nuxt-link id="about" tag="li" to="/about">About</nuxt-link>
			<nuxt-link id="contact" tag="li" to="/contact">Contact</nuxt-link>
	</ul>
</div>
</template>


<style>
.logo {
  font-size: 2em;
  margin: 20px 0;
  padding-left: 8px;
}
.top ul {
  text-transform: uppercase;
}
.nuxt-link-active,
.active {
  color: black;
  background-color: white;
}
.nuxt-link:hover {
  color: black;
  background-color: yellow;
}
</style>

