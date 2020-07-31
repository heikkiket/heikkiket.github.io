<template lang="html">
<header>
  <p>The online portfolio of</p>
  <h1>Heikki Ketoharju</h1>
  <Navigation />
</header>
</template>

<script>
import  Navigation from '@/components/Navigation.vue';
export default {
  name: 'Header',
  components: {
    'Navigation': Navigation
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

<style lang="scss">
@import '@/assets/scss/colors.scss';

header {
  background: $secondary-grey;
  padding: 1em $grid-margin;

  /* For transitions to work: */
  position: relative;
  z-index: 1;

  p {
    margin: 0;
  }

  h1 {
    font-size: 4em;
    margin:0;
    color: $darkpink;
  }
}
</style>
