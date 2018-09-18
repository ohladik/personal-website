<template>
  <a :href="technologyLinks[technology]" target="_blank">
    <div class="technology-image-container" :title="technology" :style="{ backgroundImage: `url(${require(`~/assets/images/technologies/${technology}.png`)})` }">
    </div>
  </a>
</template>

<script>
export default {
  data: function() {
    return {
      technologyLinks: {
        apollo: 'https://www.apollographql.com/',
        docker: 'https://www.docker.com/',
        firebase: 'https://firebase.google.com/',
        graphql: 'https://graphql.org/',
        mysql: 'https://www.mysql.com/',
        node: 'https://nodejs.org',
        nuxt: 'https://nuxtjs.org/',
        php: 'https://secure.php.net/',
        prisma: 'https://www.prisma.io/',
        "react-native": 'https://facebook.github.io/react-native/',
        react: 'https://reactjs.org/',
        "styled-components": 'https://www.styled-components.com/',
        vue: 'https://vuejs.org/',
        webpack: 'https://webpack.js.org/'
      }
    }
  },
  props: {
    technology: String
  }
}
</script>

<style scoped>
.technology-image-container {
  width: 100px;
  height: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 200ms;
}

.technology-image-container:hover {
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .technology-image-container {
    width: 80px;
    height: 35px;
  }
}
</style>
