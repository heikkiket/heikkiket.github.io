<template>
    <div>
        <h2>portfolio</h2>
        <p>Tässä joitain tekemiäni projekteja.</p>
        <button @click="previousProject()"
                :disabled="firstProjectFocused">
          Edellinen
        </button>
        <button @click="nextProject()"
                :disabled="lastProjectFocused">
          Seuraava
        </button>
        <Project v-bind="selectedProject"/>
    </div>
</template>

<script>
import Project from '@/components/Project.vue';
import projects from '@/data/projects.json';

export default {
  components: {
    'Project': Project
  },
  asyncData({ params }) {
    return { projects };
  },
  data() {
    return {
      projectIndex: 0
    }
  },
  watch: {
  },
  computed: {
    selectedProject() {
      return this.projects[this.projectIndex];
    },
    firstProjectFocused() {
      return this.projectIndex === 0;
    },
    lastProjectFocused() {
      return this.projectIndex === this.projects.length - 1;
    }
  },
  methods: {
    previousProject() {
      if(!this.firstProjectFocused)
        this.projectIndex--;
    },
    nextProject() {
      if(!this.lastProjectFocused)
        this.projectIndex++;
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';

button {
  background: $darkpink;
  border: none;
  margin-right: 1em;
  padding: 0.5em 0.8em;
  color: $text;
  transition: background 0.5s;
}

button:hover {
  background: $darkpink-lighter;
}

button:active {
  transform: scaleY(0.95);
  background: $darkpink;
  padding-left: 0.9em;
  padding-right: 0.7em;
  transition: background 0s;
}

button:disabled,
button:disabled:hover
{
  color: $secondary-grey;
  background: $darkpink-grey;
  transition: all 0s;
}
</style>
 
