<template>
<div>
  <AccessibilityLinks/>
  <div id="container">
    <Header />
    <main id="content">
      <nuxt/>
    </main>
  </div>
</div>
</template>

<script>
import  Header from '@/components/Header.vue';
import  AccessibilityLinks from '@/components/AccessibilityLinks.vue';

export default {
  name: 'default',
  components: {
    'Header': Header,
    'AccessibilityLinks': AccessibilityLinks
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
body {
  background: $background;
  color: $text;
}

#container {
  margin: 0 auto;
  max-width: 800px;
}

main {
  padding: 0 $grid-margin;
}
</style>
