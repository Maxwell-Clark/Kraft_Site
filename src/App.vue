<template>
  <div id="app">
    <nav-bar @scrollTo="propScroll"></nav-bar>
    <main-page
        :scrollTo="scrollTo"
        @scrollComplete="scrollTo=''"/>
    <footer-component/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainPage from "@/components/MainPage";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  data() {
    return {
      scrollTo: "",
    };
  },
  components: {
    NavBar,
    MainPage,
    FooterComponent
  },
  methods: {
    propScroll(to) {
      this.scrollTo = to;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Calistoga&family=Plus+Jakarta+Sans:wght@300&family=Unna&display=swap');
@import './assets/css/global.css';

#app {
  font-family: 'Plus Jakarta Sans', Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Calistoga', Avenir, Arial, sans-serif;
}
.button{
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
