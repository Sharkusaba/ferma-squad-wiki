<template>
  <div class="home-banner">
    <img
      class="home-banner__bg"
      src="https://static2.klipy.com/ii/cfb42878805dcb270f51b28683e7455a/92/62/TiiKhPxVCm8dD8.gif"
      alt=""
      aria-hidden="true"
    />
  </div>
</template>

<style scoped>
.home-banner {
  position: relative;
  width: 100%;
  height: clamp(280px, 40vw, 420px);
  overflow: hidden;
  margin-bottom: -16px; /* чуть "подныриваем" под следующий hero-блок темы */
}

.home-banner__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/*
 * Затемнение: тёмное/непрозрачное слева, под заголовком и текстом вики,
 * плавно светлеет к правому краю, где виден баннер.
 */
.home-banner__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(20, 14, 6, 0.92) 0%,
    rgba(20, 14, 6, 0.78) 28%,
    rgba(20, 14, 6, 0.35) 55%,
    rgba(20, 14, 6, 0.05) 75%,
    rgba(20, 14, 6, 0) 100%
  );
}

.home-banner__mascot {
  position: absolute;
  right: 4%;
  bottom: 0;
  height: 100%;
  max-height: 100%;
  width: auto;
  object-fit: contain;
  object-position: bottom right;
  filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.35));
}

@media (max-width: 768px) {
  .home-banner {
    height: 260px;
  }
  .home-banner__mascot {
    opacity: 0.35; /* на узких экранах маскот мешал бы тексту — приглушаем */
  }
  .home-banner__shade {
    background: rgba(20, 14, 6, 0.82);
  }
}
</style>
