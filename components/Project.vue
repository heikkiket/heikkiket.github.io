<template lang="html">
<article class="projectContainer">
  <h1>{{ this.name }}</h1>
  <p>{{ this.description }}</p>
  <a :href="fullImageUrl">
    <img :src="thumbUrl" alt="Ruutukaappaus projektista" class="projectThumb">
  </a>
  <aside>
    <ul>
      <li>
        <a :href="repositoryLink"
           target="_blank">
          {{ this.repositoryLinkText }}
        </a>
      </li>
      <li>
        <a :href="demoLink"
           target="_blank">
          {{ this.demoLinkText }}
        </a>
    </li>
    </ul>
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
    },
    'repositoryLink': {
      type: String,
      required: false
    },
    'repositoryLinkText': {
      type: String,
      required: false
    },
    'demoLink': {
      type: String,
      required: false
    },
    'demoLinkText': {
      type: String,
      required: false
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
    thumbUrl() {
      if (this.imageUrl === "")
        return '';
      let filenameArr = this.imageUrl.split('.');
      let ext = filenameArr.pop();
      filenameArr.push('thumb', ext);
      return this.webpackRequest(filenameArr.join('.'));
    },
    fullImageUrl() {
      if (this.imageUrl === "")
        return '';
      return this.webpackRequest(this.imageUrl);
    }
  },
  methods: {
    webpackRequest(url) {
      return require(`../assets/img/projects/${url}`);
    }
  }
}
</script>

<style scoped>

.projectThumb {
  max-width: 100%;
}

</style>
