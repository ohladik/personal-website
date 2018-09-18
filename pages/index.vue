<template>
  <main class="container">
    <div>
      <h1 class="title">I'm Ondřej Hladík</h1>
      <h1 class="subtitle">a web developer.</h1>
      <nuxt-link to="/contact" class="career-status">I'm available for work.</nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'with_navigation'
}
</script>


<style scoped>
.container {
  padding-top: 100px;
  flex-grow: 1;
  flex-shrink: 0;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 48px;
  color: #000e;
}

.subtitle {
  font-weight: 500;
  font-size: 48px;
  color: #000;
  line-height: 40px;
  padding-bottom: 35px;
}

.career-status {
  color: #9da6ba;
  font-weight: 300;
  font-size: 22px;
}

@media (max-width: 600px) {
  .title,
  .subtitle {
    font-size: 26px;
  }

  .subtitle {
    padding-bottom: 20px;
  }

  .career-status {
    font-size: 16px;
  }
}

.career-status:hover {
  color: #626875;
}
</style>

