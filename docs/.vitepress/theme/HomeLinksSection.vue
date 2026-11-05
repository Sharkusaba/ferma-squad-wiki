<script setup lang="ts">
import UsefulLinks from "./UsefulLinks.vue";
</script>

<template>
  <div class="home-links-section">
    <div class="home-links-section__inner">
      <h2 class="home-links-section__title">🔗 Полезные ссылки</h2>
      <UsefulLinks />
    </div>
  </div>
</template>

<style scoped>
.home-links-section {
  padding: 0 24px 40px;
}

.home-links-section__inner {
  max-width: 1152px;
  margin: 0 auto;
}

.home-links-section__title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  text-align: center;
}

@media (min-width: 640px) {
  .home-links-section {
    padding: 0 48px 40px;
  }
}

@media (min-width: 960px) {
  .home-links-section {
    padding: 0 64px 40px;
  }
}
</style>
