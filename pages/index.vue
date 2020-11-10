<template>
  <div id="portfolio" class="content">
    <ul class="menu filter">
      <li v-for="(filter, index) in filters" :key="index" :class="{selected:appliedFilterIndex==index}">
        <a href="#" @click="filterProjets(index, filter)">{{ filter }}</a>
      </li>
    </ul>
    <div>
      <div class="row grid isotope">
        <div v-for="(item, index) in sortByPriority(projets)" :key="index" :class="'item '+item.type.toLowerCase()">
          <nuxt-link :to="'/projets/'+ item.slug">
            <img :src="imgPath(item.images)">
            <div class="text">
              <div class="client" v-html="item.client" />
              <div class="description" v-html="item.projet" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let Isotope

if (process.browser) {
  Isotope = require('isotope-layout')
}

export default {
  async asyncData ({ $content, params }) {
    const projets = await $content('projets').fetch()
    return {
      projets,
      iso: null
    }
  },
  data () {
    return {
      filters: ['Tout', 'Motion', 'Code'],
      appliedFilterIndex: 0
    }
  },
  mounted () {
    this.isotope()
  },
  methods: {
    sortByPriority (arr) {
      return arr.slice().sort(function (a, b) {
        a.priority = a.priority === undefined ? 0 : a.priority
        b.priority = b.priority === undefined ? 0 : b.priority
        if (a.priority > b.priority) { return -1 }
        if (a.priority < b.priority) { return 1 }
        return 0
      })
    },
    isotope () {
      this.iso = new Isotope('.grid', {
        itemSelector: '.item'
      })
      this.iso.layout()
    },
    filterProjets (index, slug) {
      this.appliedFilterIndex = index
      slug = (slug === 'Tout') ? '*' : '.' + slug.toLowerCase()
      this.iso.arrange({
        filter: slug
      })
    },
    imgPath (images) {
      if (images) {
        for (let i = 0; i < images.length; i++) {
          if (images[i].isThumb) {
            return '/media/' + images[i].path + '.jpg'
          }
        }
      }
    }
  }
}
</script>
<style>

.item {
  position: absolute;
  width: 360px;
  height: 240px;
  overflow: hidden;
  margin: 0 3px 3px 0;
}

.item img {
  transition: all 200ms linear;
  flex-shrink: 0;
  min-width: 360px;
  max-height: 240px;
}

.item .text {
  color: palegreen;
  transition: all 150ms linear;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item .client {
  color: white;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 0;
}
.item .description {
  font-size: 1.5em;
  max-width: 80%;
  margin: 0 auto;
}

.text div {
  transition: all 200ms ease;
  position: relative;
  top: 30px;
}

.item:hover img {
  transform: scale(1.1);
}

.item:hover .text {
  opacity: 1;
}

.item:hover .text div {
  top: 0px;
}
.filter a:hover {
  text-decoration: underline;
}
.selected {
  text-decoration: none;
  background-color: orange;
  color: white;
}
@media screen and (max-width: 500px) {
  .item {
    max-width: 100%;
  }
}
@media (hover: none) {
.item .text{
opacity: 1;
font-size: 120%;
background: radial-gradient(circle, rgba(0,0,0,0.5) 16%, rgba(0,0,0,0.3) 100%);
}
.text div{
top:0px;
}
}
</style>
