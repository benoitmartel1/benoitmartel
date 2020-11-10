<template>
  <div class="bottom content">
    <div class="wrapper">
      <h3>
        Diplômé en graphisme et obsédé par la programmation, je travaille toujours à des solutions qui respectent trois principes :<br> <b>efficacité, simplicité </b>et<b> esthétisme</b>.
      </h3>
      <div>
        <div id="portrait" /><h3>Rien de superflu, <br>jamais compliqué, <br>toujours beau!</h3>
      </div>
      <div class="tableau">
        <section v-for="(category, index) in cat" :key="index">
          <h3>{{ category.name }}</h3>
          <ul>
            <li v-for="(skill, sindex) in category.skills" :key="sindex">
              {{ skill }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
	  cat: [
        {
          name: 'Motion',
          skills: ['Animation 2D / 3D', 'Illustration', 'Conception / Réalisation', 'Workflows et gestion de rendus']
        },
	  	{
          name: 'Code',
          skills: ['Applications web', 'Installations interactives', 'Touch Designer, Arduino, Pi']
        }
      ]
    }
  }
}
</script>
<style>
.tableau{
	background-color: lightblue;
	padding:20px;
	margin-top:40px;
	padding-left:30px;
}
ul{
	list-style-type:initial;
	margin-bottom:20px;
}
#portrait {
background-image: url('/media/face.png');
  width: 80px;
  height:80px;
  float:left;
  margin-right:20px;
  border-radius: 200px;
    background-size: 250%;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: 5% 15%;
}
.wrapper{
	width:60%;
}

section{
	max-width:50%;
	min-width:300px;
	display:inline-block;
	vertical-align:top;
}
@media screen and (max-width: 500px) {
.wrapper{
	width:100%;
}
}
</style>
