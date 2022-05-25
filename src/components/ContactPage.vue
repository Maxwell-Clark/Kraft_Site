<template>
  <b-card class="contact">
    <b-card-header class="contact_header">
        <h4>Contact</h4>
    </b-card-header>
    <b-card-body class="contact_form">
      <b-form-group label="Name" label-for="name">
        <b-form-input id="name" v-model="name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Email" label-for="email">
        <b-form-input id="email" v-model="email" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Message" label-for="message">
        <b-form-textarea id="message" v-model="message" required></b-form-textarea>
      </b-form-group>
      <b-button class="button" type="submit" variant="primary" @click="submit">Submit</b-button>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "ContactPage"
}
</script>

<style scoped>
.contact {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bolder;
  color: white;
  align-items: center;
}
.contact_header {
  padding: 0.5rem;
  background-color: #656D4A;
  color: white;
}
.contact_form {
  width: 50em;
  background-color: #B6AD90;
  border-radius: 0 0 .6em .6em;
  font-size: large;
}
.button {
  margin-top: 1rem;
  background-color: #656D4A;
  color: white;
  border: none;
}
.button:hover{
  background-color: #936639;
  color: white;
  border: none;
}
</style>