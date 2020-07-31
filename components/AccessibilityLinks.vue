<template lang="html">
  <ul id="accessibilityLinks">
    <li><a href="#content">Jump to content</a></li>
    <li><a href="#nav">Jump to navigation</a></li>
  </ul>
</template>

<script>
  export default {
  name: 'AccessibilityLinks',
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

<style type="scss">
#accessibilityLinks {
  padding: 0;
}

#accessibilityLinks:before {
  content: '[ ';
}

#accessibilityLinks:after {
  content: ' ]';
}

#accessibilityLinks li {
  display: inline;
  margin-left: 1em;
}

#accessibilityLinks li:first-child {
  display: inline;
  margin-left: 0;
}

</style>
