<template lang="html">
<article class="projectContainer">
  <h1>{{ this.name }}</h1>
  <p>{{ this.description }}</p>
  <img src="/img.jpg" width="200" height="200" alt="Ruutukaappaus projektista">
  <aside>
    <a href="#">Linkki Github</a>
    <a href="#">Linkki demoon</a>
  </aside>
</article>
</template>

<script>
export default {
  name: '',
  props: {
    'name': {
      type: String,
      required: true
    },
    'description': {
      type: String,
      required: true
    },
    'imageUrl': {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
