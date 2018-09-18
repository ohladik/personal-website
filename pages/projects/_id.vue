<template>
  <div class="container">
    <nuxt-link to="/projects" class="navigation-icon"><font-awesome-icon icon="times"/></nuxt-link>
    <project-detail-card :project="project"/>
    <div class="project-description">
      {{project.description}}
    </div>
    <div class="project-technologies">
      <span class="project-technologies-label">
        made with
      </span>
      <div class="project-technologies-list">
        <project-technology-icon
          v-for="technology in project.technologies" 
          :technology="technology"
          :key="technology"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDetailCard from "~/components/ProjectDetailCard.vue";
import ProjectTechnologyIcon from "~/components/ProjectTechnologyIcon.vue";

export default {
  validate ({ params, store }) {
    // Check if `params.id` is an existing project
    return store.state.projects.some((project) => project.id == params.id);
  },
  mounted() {
    // this.project = this.$store.state.selectedProject;
  },
  asyncData: function({ params: { id }, store }) {
    // Get ID of selected project from URL
    // and set selectedProject in store with this ID
    store.commit('setSelectedProjectFromURL', id);
  },
  data: function() {
    return {
      project: this.$store.getters.selectedProject,
    }
  },
  components: {
    ProjectDetailCard,
    ProjectTechnologyIcon,
  }
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.project-description {
  margin-top: 432px;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 1px;
  white-space: pre-line;
}

.project-technologies {
  margin-top: 144px;
}

.project-technologies-list {
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
}

.project-technologies-label {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 60px;
  color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 960px) {
  .container {
    margin-top: 36px;
  }

  .navigation-icon {
    font-size: 20px;
  }

  .project-description {
    margin-top: 132px;
    max-width: 300px;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0px;
    line-height: 20px;
  }

  .project-technologies {
    margin-top: 32px;
  }

  .project-technologies-label {
    line-height: 40px;
  }
}
</style>
