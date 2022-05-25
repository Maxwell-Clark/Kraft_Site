<template>
  <b-navbar toggleable="lg" type="dark" id="navBar">
<!--    <b-navbar-brand  href="#">NavBar</b-navbar-brand>-->

<!--    <b-collapse  is-nav>-->
      <b-navbar-nav class="navbar-collapse">
        <b-nav-item class="nav-link" @click="scrollTo('Home')">Home</b-nav-item>
        <b-nav-item class="nav-link" @click="scrollTo('WhatWeDo')">What We Do</b-nav-item>
        <b-nav-item class="nav-link" @click="scrollTo('Contact')">Contact</b-nav-item>
      </b-navbar-nav>

<!--    </b-collapse>-->
  </b-navbar>
<!--  <div id="navBar">-->
<!--    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">-->
<!--      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->

<!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--&lt;!&ndash;        <ul class="navbar-nav mr-auto">&ndash;&gt;-->
<!--&lt;!&ndash;          <li class="nav-item active">&ndash;&gt;-->
<!--&lt;!&ndash;            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>&ndash;&gt;-->
<!--&lt;!&ndash;          </li>&ndash;&gt;-->
<!--&lt;!&ndash;          <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;            <router-link class="nav-link" to="/about">About</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;          </li>&ndash;&gt;-->
<!--&lt;!&ndash;          <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;            <router-link class="nav-link" to="/contact">Contact</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;          </li>&ndash;&gt;-->
<!--&lt;!&ndash;        </ul>&ndash;&gt;-->
<!--&lt;!&ndash;        <ul class="navbar-nav">&ndash;&gt;-->
<!--&lt;!&ndash;          <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;            <router-link class="nav-link" to="/login">Login</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;          </li>&ndash;&gt;-->
<!--&lt;!&ndash;          <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;            <router-link class="nav-link" to="/register">Register</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;          </li>&ndash;&gt;-->
<!--&lt;!&ndash;        </ul>&ndash;&gt;-->
<!--&lt;!&ndash;            <a v-b-toggle.sidebar-variant class="nav-link" ><b-icon icon="list"></b-icon></a>&ndash;&gt;-->
<!--            <div id="router_links">-->
<!--              <a class="nav-link" @click="scrollTo('Home')">Home</a>-->
<!--              <a class="nav-link"  @click="scrollTo('WhatWeDo')">What We Do</a>-->
<!--              <a class="nav-link" @click="scrollTo('Contact')">Contact</a>-->
<!--            </div>-->
<!--&lt;!&ndash;            <a class="nav-link" id="logo" >Akorn Consulting</a>&ndash;&gt;-->

<!--      </div>-->
<!--    </nav>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    scrollTo(whereToScroll) {
      this.$emit('scrollTo', whereToScroll);
    }
  }
}
</script>

<style scoped>
#navBar {
  font-weight: bolder;
  position: sticky;
  top: 0;
  z-index:1;
  background-color: #333;
}
.navbar-collapse {
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* we could make this transparent */
}
@media (max-width: 576px) {
  .navbar-collapse {
    flex-direction: column;
  }
}
.sidebar_title {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Calistoga', Avenir, Arial, sans-serif;
}
.nav-link {
  color: #fefae0 !important;
  cursor: pointer;
  margin: 0 1em 0 1em;
}
.nav-link:hover {
  color: darkgrey !important;
}
#logo {
  float: right;
}
#router_links {
  display: flex;
  flex-direction: row;
}

</style>