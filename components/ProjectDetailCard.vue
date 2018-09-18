<template>
  <div class="project-detail-wrapper">
    <div class="title-mobile">{{project.title}}</div>
    <div :class="`project-detail-container ${getCardBackground(project.id)}`">
      <div class="title">{{project.title}}</div>
      <div :class="`project-image${project.mobile ? ' mobile' : ''}`" :style="{ backgroundImage: `url(${require(`~/assets/images/projects/${project.image}`)})` }"></div>
      <div class="project-links-container">
        <a v-if="project.source_url !== undefined" :href="project.source_url" target="_blank" class="project-link">
          <span class="project-link-icon">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </span>
          <span class="project-link-label">Source code</span>
        </a>
        <a v-if="project.demo_url !== undefined" :href="project.demo_url" target="_blank" class="project-link">
          <span class="project-link-icon">
            <font-awesome-icon icon="external-link-alt"/>
          </span>
          <span class="project-link-label">Live demo</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    getCardBackground: function(projectId) {
      const backgroundIndex = projectId % 4;
      switch (backgroundIndex) {
        case (0):
          // 0, 4, 8,...
          return 'background-gradient-one';
        case (1):
          // 1, 5, 9,...
          return 'background-gradient-two';
        case (2):
          // 2, 6, 10,...
          return 'background-gradient-three';
        case (3):
          // 3, 7, 11,...
          return 'background-gradient-four';
        default:
          return 'background-gradient-one';
      }
    }
  }
}
</script>


<style scoped>
.project-detail-wrapper {
  position: absolute;
  right: 0;
}

.project-detail-container {
  width: 400px;
  height: 400px;
  border-radius: 3px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
}
.background-gradient-one {
  background: linear-gradient(180deg, #12c2e9 0%, #c471ed 50.83%, #f64f59 100%);
}

.background-gradient-two {
  background: linear-gradient(180deg, #1446a0, #db3069 100%);
}

.background-gradient-three {
  background: linear-gradient(180deg, #6e44ff, #f06543 100%);
}

.background-gradient-four {
  background: linear-gradient(180deg, #074cf5 0%, #07f59d 100%);
}

.project-detail-container:before {
  content: "";
  width: 845px;
  height: 285px;
  position: absolute;
  left: -485px;
  right: 9.98%;
  top: 18.75%;
  bottom: 9.8%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
  border-radius: 1px;
}

.project-image {
  width: 370px;
  height: 285px;
  position: absolute;
  left: -10px;
  right: 9.98%;
  top: 18.75%;
  bottom: 9.8%;
  border-radius: 1px;
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: center;
}

.project-image.mobile {
  background-size: 120px;
}

.title {
  padding: 20px;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1px;
  color: #000;
  position: absolute;
  left: -485px;
  top: 80px;
  max-width: 430px;
}

.title-mobile {
  display: none;
}

.project-links-container {
  position: absolute;
  left: -485px;
  bottom: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.project-link {
  margin-top: 5px;
  font-size: 16px;
  color: #000;
}

.project-link:hover {
  color: #9da6ba;
}

.project-link-label {
  margin-left: 12px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 1px;
}

@media (max-width: 960px) {
  .project-detail-wrapper {
    position: relative;
  }

  .project-detail-container {
    width: 80vw;
    height: 80vw;
    max-width: 300px;
    max-height: 300px;
    position: relative;
    margin-top: 16px;
  }

  .project-detail-container:before {
    width: 75vw;
    height: 95vw;
    max-width: 270px;
    max-height: 340px;
    left: -10px;
    right: 9.98%;
    top: 18.75%;
    bottom: 9.8%;
  }

  .project-image {
    width: 75vw;
    height: 95vw;
    max-width: 270px;
    max-height: 210px;
    left: -10px;
    right: 9.98%;
    top: 18.75%;
    bottom: 9.8%;
    background-size: 200px;
  }

  .project-image.mobile {
    background-size: 80px;
  }

  .project-links-container {
    left: 0;
    bottom: -90px;
    padding: 0;
  }

  .project-link {
    font-size: 13px;
  }

  .title {
    display: none;
  }

  .title-mobile {
    display: inherit;
    padding: 0;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    color: #000;
    max-width: 430px;
    margin-top: 16px;
  }
}
</style>

