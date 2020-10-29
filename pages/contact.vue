<template>
  <div class="content">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form name="contact-2" method="POST" data-netlify="true">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required"
        >
          <v-text-field
            v-model="name"
            :error-messages="errors"
            label="Nom"
            required
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="Courriel"
            required
          />
        </validation-provider>
        <v-textarea
          v-model="textarea"
          auto-grow
          :error-messages="errors"
          label="Message"
          type="textarea"
        />
        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
        >
          Envoyer
        </v-btn>
      </form>
    </validation-observer>
  </div>
</template>
<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Ce champ est requis.'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('email', {
  ...email,
  message: 'Entrez une adresse courriel valide.'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: '',
    email: '',
    textarea: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: null
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    }
  }
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
