<template>
  <div class="content">
    <form name="contact" method="POST" data-netlify="true">
		<input
			class="form-control valid"
			name="name"
			id="name"
			type="text"
			onfocus="this.placeholder = ''"
			onblur="this.placeholder = 'Votre nom'"
			placeholder="Nom"
		/>
		<input
  class="hidden"
  name="bot-field"
  placeholder="Don't fill this out if you're a human"
/>/>
<input
			class="form-control valid"
			name="email"
			id="email"
			type="email"
			onfocus="this.placeholder = ''"
			onblur="this.placeholder = 'Votre courriel'"
			placeholder="Courriel"
		/>
		<button type="submit" class="button button-contactForm boxed-btn">
			Envoyer
		</button>
    </form>
  </div>
</template>

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

