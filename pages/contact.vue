<template>
  <div class="content bottom">
    <h3>N'hésitez pas à communiquer avec moi pour toute question<br>Au plaisir de travailler ensemble!</h3>
    <form
      name="contact2"
      action="/success"
      data-netlify:true
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <!--       action="/success" -->
      <input type="hidden" name="form-name" value="contact2">
      <v-text-field
        type="text"
        name="name"
        placeholder="Votre nom"
      />
      <v-text-field
        name="email"
        type="email"
        placeholder="Votre courriel"
      />
      <v-textarea
        name="message"
        placeholder="Message"
        outlined
      />
      <v-btn
        type="submit"
      >
        Envoyer
      </v-btn>
    </form>
  </div>
</template>

<style>
form {
  max-width: 420px;
}

</style>
