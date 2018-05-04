<template>
	<div class="content">
		<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true"> 
		<p class="hidden">
		<label>Don’t fill this out if you're human: <input name="bot-field"></label>
		</p>     
		<input name="name" type="text" class="feedback-input" placeholder="Nom" />   
		<input name="email" type="email" class="feedback-input" placeholder="Email" />
		<textarea name="text" class="feedback-input" placeholder="Message"></textarea>
		<button type="submit" value="Envoyer"></button>
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
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
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

