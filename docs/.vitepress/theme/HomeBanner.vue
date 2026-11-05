<template>
  <div class="home-banner">
    <div class="home-banner__blur" aria-hidden="true" />
    <div class="home-banner__overlay" aria-hidden="true" />
    <img
      class="home-banner__fg"
      src="/assets/ferma-squad-banner.gif"
      alt="FermaSquad"
    />
  </div>
</template>

<style scoped>
/*
 * Полноширинный, но невысокий баннер: сама гифка показывается на всю высоту
 * без обрезки (object-fit: contain), а по бокам, где остаётся пустое место
 * из-за несовпадения пропорций с шириной экрана, — размытая увеличенная
 * копия той же гифки с полупрозрачной тёмной "рамкой" поверх. Так на любой
 * ширине экрана нет ни чёрных полос, ни искажения/растяжения картинки.
 */
.home-banner {
  position: relative;
  width: 100%;
  height: clamp(110px, 15vw, 190px);
  overflow: hidden;
  margin-bottom: -16px; /* чуть "подныриваем" под следующий hero-блок темы */
}

.home-banner__blur {
  position: absolute;
  inset: -24px; /* чуть больше контейнера, чтобы размытый край не был виден */
  background-image: url("/assets/ferma-squad-banner.gif");
  background-size: cover;
  background-position: center;
  filter: blur(26px) saturate(1.15) brightness(0.9);
  transform: scale(1.12);
}

.home-banner__overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 14, 6, 0.32);
}

.home-banner__fg {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 640px) {
  .home-banner {
    height: 140px;
  }
}
</style>
