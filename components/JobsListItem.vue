<template>
  <div class="job-container">
    <h2 class="job-title">{{job.title}}</h2>
    <a :href="job.companyWebLink" target="_blank">
      <span class="job-company">{{job.company}}</span>
    </a>
    <span class="job-timeline">{{job.timeline}}</span>
    <div class="job-description">
      <ul class="job-responsibilities">
      <li
        v-for="responsibility in job.responsibilities" 
        :key="responsibility"
      >
      {{`- ${responsibility}`}}
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: Object,
  }
}
</script>

<style scoped>
.job-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  flex-grow: 1;
  margin-top: 32px;
}

/* moved the gradient line to the job-responsibilities ul */
.job-container:after {
  /* content: "";
  position: absolute;
  left: -10px;
  width: 2px;
  height: 100%; */
  /* background: linear-gradient(180deg, #074cf5 0%, #07f59d 100%); */
}

.job-responsibilities {
  position: relative;
  list-style-type: none;
  padding-left: 15px;
}

.job-responsibilities:after {
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #074cf5 0%, #07f59d 100%);
}

.job-title {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
}

.job-company {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.6);
}

.job-company:hover {
  color: rgba(0, 0, 0, 0.9);
}

.job-timeline {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
}

.job-description {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
}

@media (max-width: 600px) {
  .job-container {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .job-container:after {
    left: -8px;
  }

  .job-title {
    font-size: 16px;
    font-weight: 600;
  }

  .job-company {
    font-size: 13px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.6);
  }

  .job-description {
    font-size: 13px;
    font-weight: 400;
  }
}
</style>
