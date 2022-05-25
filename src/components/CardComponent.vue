<template>
  <div>
    <b-card
        v-animate-css.hover.stop="'pulse'"
        :title="card.title"
        img-bottom
        style="max-width: 20rem;"
        class="mb-2 card"
        @click="onClick">
      <b-card-text>
        {{ card.text }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  height: 20em;
  width: 15em;
  font-max-size: x-small;
  margin: 5px;
  background-color: #A3B18A;
  color: white;
}

.card :hover {
  background-color: #A3B18A;
  color: white;
}

</style>