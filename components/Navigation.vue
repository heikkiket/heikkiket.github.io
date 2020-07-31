<template lang="html">
    <nav id="nav">
      <ul>
        <li>
          <nuxt-link to="/">home</nuxt-link>
        </li>
        <li><nuxt-link to="/portfolio">portfolio</nuxt-link></li>
        <li>
          <nuxt-link to="/about">hieman minusta</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">yhteystiedot</nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
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

$menu-separator: #aaa;
$menu-background: #fff;
$menu-text: $pink;
$menu-hover: $green;

nav {

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    padding: 0 1em;
    border-left: 1px solid $menu-separator;
  }
  
  li:first-child {
    padding-left: 0;
    border-left: 0;
  }
  
  a {
    color: $menu-text;
    transition: color 0.5s;
  }
  
a:hover {
  color: $menu-hover;
}
}
</style>
