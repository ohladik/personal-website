<template>
  <div class="projects-container">
    <nuxt-link to="/" class="navigation-icon"><font-awesome-icon icon="arrow-left"/></nuxt-link>
    <h1 class="header">Projects</h1>
    <div class="projects-cards-container">
      <project-card 
        v-for="project in projects" 
        :project="project"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  data: function() {
    return  {
      projects: this.$store.getters.projects,
    }
  },
  components: {
    ProjectCard
  },
}
</script>

<style scoped>
.projects-container {
  flex-shrink: 0;
  flex-grow: 1;
  margin-top: 72px;
  margin-bottom: 72px;
}

.navigation-icon {
  color: #9da6ba;
  font-size: 30px;
}

.navigation-icon:hover {
  color: #626875;
}

.header {
  font-weight: 500;
  font-size: 48px;
  letter-spacing: 1px;
  margin-top: 16px;
}

.projects-cards-container {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-column-gap: 64px;
  grid-row-gap: 64px;
}

@media (max-width: 600px) {
  .projects-cards-container {
    margin-top: 16px;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  .projects-container {
    margin-top: 36px;
  }

  .navigation-icon {
    font-size: 20px;
  }

  .header {
    font-weight: 500;
    line-height: 36px;
    font-size: 26px;
    letter-spacing: 1px;
  }
}
</style>
