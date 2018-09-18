<template>
  <nav class="navigation-container">
    <nuxt-link to="/projects" class="navigation-item">Projects</nuxt-link>
    <nuxt-link to="/career" class="navigation-item">Career</nuxt-link>
    <nuxt-link to="/contact" class="navigation-item">Contact</nuxt-link>
  </nav>
</template>

<style scoped>
.navigation-container {
  margin-top: 72px;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .navigation-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 36px;
  }

  .navigation-item {
    margin: 20px;
    margin-left: 0;
    font-size: 14px;
  }
}

@media (min-width: 601px) {
  .navigation-container {
    display: flex;
    justify-content: flex-end;
  }

  .navigation-item {
    margin: 20px;
  }
}

.navigation-item {
  color: #9da6ba;
  font-weight: 300;
}

.navigation-item:hover {
  color: #626875;
}
</style>

