<template>
    <div>
        <h2>portfolio</h2>
        <p>Tässä joitain ohjelmointiprojekteja. Paina nappeja jotta saat kuvaukset esiin.</p>
        <ul id="projects">
          <li v-for="project in projects">
            <button @click="selectProject(project.name)">
              {{ project.name }}
            </button>
          </li>
        </ul>
        <Project v-if="selectedProject" v-bind="selectedProject"/>
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
      selectedProject: ''
    }
  },
  methods: {
    selectProject(name) {
      this.selectedProject = projects.filter(p => p.name === name)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';

#projects li {
  display: inline;
}

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
 
