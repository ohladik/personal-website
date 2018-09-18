<template>
    <div class="technology-icon-container" :style="{ backgroundImage: `url(${image})` }"></div>
</template>

<script>
export default {
  props: {
    technology: String
  }
}
</script>


<style scoped>
.technology-icon-container {
}
</style>

