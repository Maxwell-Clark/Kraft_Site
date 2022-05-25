<template>
    <div class="solution">
      <b-jumbotron class="jumbotron">
        <div class="solution__header">
          <div class="solution__header__title">
            <h2>{{ title }}</h2>
          </div>
          <hr id="spacer">
          <div class="solution__header__description">
            <slot name="description"/>
          </div>
        </div>
        <div class="solution__learn-more">
          <b-button class="button" pill  href="">Learn More</b-button>
        </div>
      </b-jumbotron>
      <div class="solution__content">
        <slot name="content"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "SolutionComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.solution {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.jumbotron {
  padding: 2rem;
  border-radius: 0.6rem;
  background-color: #B6AD90;
  width: 80%;
  background-color: #A3B18A;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 30vh;
  color: white;
  justify-content: center;
  /*text-shadow: black 0.3rem 0.1rem 0.3rem;*/
}
.solution__header__description {
  font-weight: bolder;
  max-width: 60%;
  align-self: center;
}
#spacer {
  height: 3px;
  opacity: 1;
  color: #fefae0;
}
.solution__header {
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.solution__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #A3B18A;
  height: 80%;
  width: 80%;
  margin-bottom: 2rem;
  color: white;
  border-radius: 0 0 0.6rem 0.6rem;
}
p {
  font-size: 1.2em;
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