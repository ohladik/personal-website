<template>
  <div class="career-container">
    <nuxt-link to="/" class="navigation-icon"><font-awesome-icon icon="arrow-left"/></nuxt-link>
    <h1 class="header">Career</h1>
    <div class="career-description">
      <p>
      I am a web developer with the most of my experience being on frontend where I built single page applications, data visualizations and also made UI design in Adobe XD and Figma. The stack included React, ReactNative, Redux, GraphQL, Apollo, D3.js, three.js, styled-components, Jest, Enzyme, and Webpack.
      </p>
      <br/>
      <p>
      On the backend I have experience with MySQL, PostgreSQL, node.js, PHP, GraphQL (using Apollo) and Prisma.
      </p>
    </div>
    <h2 class="subheader">Professional experience</h2>
    <div class="career-jobs-list">
      <jobs-list-item 
        v-for="job in jobs" 
        :job="job"
        :key="job.id"
      />
    </div>
  </div>
</template>

<script>
import JobsListItem from "~/components/JobsListItem.vue";
export default {
  data: function() {
    return  {
      jobs: this.$store.getters.jobs,
    }
  },
  components: {
    JobsListItem
  },
}
</script>

<style scoped>
.career-container {
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
.subheader {
  font-size: 2em;
  font-weight: 500;
}

.career-description {
  margin-top: 32px;
  margin-bottom: 64px;
  font-weight: 500;
  font-size: 22px;
  line-height: 42px;
  letter-spacing: 1px;
}

.career-jobs-list {
  margin-bottom: 72px;
}

@media (max-width: 600px) {
  .career-container {
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

  .subheader {
    font-size: 1.5em;
  }

  .career-description {
    max-width: 300px;
    margin-top: 16px;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0px;
    line-height: 20px;
  }
}
</style>

<style>
/* custom gradient line border */
.career-jobs-list
  > div:nth-child(2)
  > .job-description
  > .job-responsibilities:after {
  background: linear-gradient(180deg, #1446a0, #db3069 100%);
}
</style>
