<script setup lang="ts">
import UsefulLinks from "./UsefulLinks.vue";
import HomeTopics from "./HomeTopics.vue";
</script>

<template>
  <div class="home-content">
    <div class="home-content__bg" aria-hidden="true" />
    <div class="home-content__overlay" aria-hidden="true" />

    <div class="home-content__inner">
      <section class="home-content__block">
        <h2 class="home-content__title">🔗 Полезные ссылки</h2>
        <UsefulLinks />
      </section>

      <section class="home-content__block">
        <h2 class="home-content__title">📚 Разделы вики</h2>
        <HomeTopics />
      </section>
    </div>
  </div>
</template>

<style scoped>
/*
 * Единая "стеклянная" панель на сильно затемнённой гифке-фоне: внутри —
 * и полезные ссылки, и переходы по разделам вики (вместо стандартного
 * блока features темы VitePress, который отключён в index.md).
 */
.home-content {
  position: relative;
  margin: 0 24px 48px;
  border-radius: 24px;
  overflow: hidden;
  padding: 28px 20px;
}

.home-content__bg {
  position: absolute;
  inset: -30px;
  background-image: url("/assets/ferma-squad-banner.gif");
  background-size: cover;
  background-position: center;
  filter: blur(8px) saturate(1.05);
  transform: scale(1.15);
  /* Яркость/blur больше не анимируются — filter-переходы на большом
     background-image дёргаются в браузере. Затемнение делает только
     отдельный слой-оверлей ниже, анимируя исключительно opacity —
     это дешёво для браузера и идёт гладко. */
}

.home-content__overlay {
  position: absolute;
  inset: 0;
  background: rgba(8, 6, 3, 0.45);
  opacity: 0;
  transition: opacity 0.6s ease;
  will-change: opacity;
}

.home-content:hover .home-content__overlay {
  opacity: 1;
}

/* При наведении на всю область карточки дополнительно "проявляются" —
   ярче подложка и контрастнее рамка, поверх уже общего затемнения фона. */
.home-content:hover :deep(.useful-links__card),
.home-content:hover :deep(.home-topics__card) {
  background: rgba(20, 14, 6, 0.65);
  border-color: rgba(255, 255, 255, 0.32);
  transition: background 0.6s ease, border-color 0.6s ease, transform 0.2s;
}

.home-content__inner {
  position: relative;
  z-index: 1;
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.home-content__title {
  font-size: 19px;
  font-weight: 600;
  margin: 0 0 14px;
  color: #fff;
  text-align: center;
}

@media (min-width: 640px) {
  .home-content {
    margin: 0 48px 48px;
    padding: 36px 32px;
  }
}

@media (min-width: 960px) {
  .home-content {
    margin: 0 64px 56px;
    padding: 40px 40px;
  }
}
</style>
