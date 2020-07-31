<template>
    <div>
        <h2>Yhteystiedot</h2>
        <dl>
          <dt>Puhelin</dt>
          <dd>0509189139</dd>
          <dt>Sähköposti</dt>
          <dd>heikki . ketoharju [at] iki.fi</dd>
          <dt>Sosiaalinen media</dt>
          <dd><a href="https://www.linkedin.com/in/heikki-ketoharju§/">Linkedin-profiilini</a></dd>
        </dl>
    </div>
</template>

<script>
export default {
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
  @import './assets/scss/colors.scss';
  dt {
    margin-top: 1em;
  }

  dd {
    color: $orange;
  }
</style>
