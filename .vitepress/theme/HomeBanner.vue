<template>
  <div class="home-banner">
    <img
      class="home-banner__img"
      src="/assets/ferma-squad-banner.png"
      alt="FermaSquad"
    />
  </div>
</template>

<style scoped>
.home-banner {
  position: relative;
  width: 100%;
  height: clamp(170px, 24vw, 340px);
  overflow: hidden;
  margin-bottom: -16px; /* чуть "подныриваем" под следующий hero-блок темы */
}

.home-banner__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
}
</style>
