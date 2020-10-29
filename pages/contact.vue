<template>
  <div class="content">
    <form name="contact2" netlify method="post" action="/">
      <v-text-field
        name="name"
        label="Nom"
        outlined
      />
      <v-text-field
        name="email"
        type="email"
        label="Courriel"
        outlined
      />
      <v-textarea
        name="message"
        type="text"
        label="Message"
      />
      <v-btn
        class="mr-4"
        type="submit"
      >
        Envoyer
      </v-btn>
    </form>
  </div>
</template>
<script>

export default {

}
</script>
<style>
form {
  padding: 10px 20px 20px 0;

  max-width: 420px;
}
.hidden {
  display: none;
}
.feedback-input {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  background-color: white;
  box-shadow: 3px;
  /* border: 1px solid #cc6666; */
  transition: all 0.3s;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  background: white;
  border: 0;
  cursor: pointer;
  color: black;
  font-size: 1em;
  padding: 10px 20px;
  border: 1px #999 solid;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 400;
}
[type="submit"]:hover {
  background: palegreen;
}
</style>
