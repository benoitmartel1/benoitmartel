<template>
	<div id="portfolio" class="content">
	<filters></filters>

		<div class="container">
			<div v-for="item in items" class="item" :class="item.type" :key="item.link">
				<a :href="'/projets/'+ item.link">
					<img :src="imgPath(item.images)">
					<div class="text">
						<div class="client" v-html="item.client"></div>
						<div class="description" v-html="item.projet"></div>
					</div>
				</a>
			</div>
		</div>
	</div>

</template>

<script>
import Filters from "../components/portfolio-menu";

var contents = require("~/assets/js/content.json");
var items = contents.items;

export default {
  data: function() {
    return {
      items
    };
  },
  components: {
    Filters
  },
  methods: {
    imgPath: function(p) {
      for (var i = 0; i < p.length; i++) {
        if (p[i].isThumb) {
          return "/media/" + p[i].path + ".jpg";
        }
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      var $grid = $(".container").isotope({
        // main isotope options
        itemSelector: ".item",
        // set layoutMode
        layoutMode: "fitRows"
      });
      //Filter Portfolio items
      $(".filter a").click(function(e) {
        var selector = $(this).attr("data-filter");
        $grid.isotope({
          filter: selector
        });
        toggleSelected($(e.target).parent(), "selected");
        return false;
      });
    });
  }
};
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

.client {
  color: white;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 0;
}
.description {
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
@media screen and (max-width: 500px) {
  .item {
    max-width: 100%;
  }
}
</style>
