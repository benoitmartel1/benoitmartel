<template>
  <div class="content padded">
    <form
      name="contact2"
      netlify
      method="post"
      action="/pages/success"
      netlify-honeypot="bot-field"
    >
      <v-text-field
        name="name"
        placeholder="Nom"
      />
      <v-text-field
        name="email"
        type="email"
        placeholder="Courriel"
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
