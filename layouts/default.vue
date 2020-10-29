<!-- layouts/default.vue -->

<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from '../components/nav'

export default {
  components: {
    Nav
  }
}
</script>
