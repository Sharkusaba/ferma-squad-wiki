<template>
  <div class="home-banner">
    <div class="home-banner__pattern" aria-hidden="true" />
    <img
      class="home-banner__mascot"
      src="https://static2.klipy.com/ii/cfb42878805dcb270f51b28683e7455a/92/62/TiiKhPxVCm8dD8.gif"
      alt="Ферма-тян — маскот FermaSquad"
    />
  </div>
</template>

<style scoped>
/*
 * Раньше гифка растягивалась на всю ширину/высоту баннера (object-fit: cover),
 * из-за чего маленькая исходная картинка сильно мылилась. Теперь она показывается
 * в своём естественном размере (max-height ограничивает апскейл) на декоративном
 * тёплом градиентном фоне — так не будет заметно, даже если исходник невысокого разрешения.
 */
.home-banner {
  position: relative;
  width: 100%;
  height: clamp(220px, 32vw, 320px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -16px; /* чуть "подныриваем" под следующий hero-блок темы */
  background: linear-gradient(135deg, #f0c060 0%, #d97a1f 55%, #a85708 100%);
}

.home-banner__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.16) 1.5px,
      transparent 1.5px
    ),
    radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  background-position: 0 0, 14px 14px;
  opacity: 0.6;
}

.home-banner__mascot {
  position: relative;
  z-index: 1;
  max-height: min(70%, 190px);
  width: auto;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 14px 32px rgba(20, 14, 6, 0.35);
  border: 3px solid rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .home-banner {
    height: 220px;
  }
  .home-banner__mascot {
    max-height: min(65%, 140px);
  }
}
</style>
