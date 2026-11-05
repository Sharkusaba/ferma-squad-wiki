<template>
  <div class="home-banner">
    <img
      class="home-banner__bg"
      src="/assets/ferma-squad-banner.gif"
      alt="FermaSquad"
    />
  </div>
</template>

<style scoped>
/*
 * Гифка хранится локально (docs/public/assets) и имеет исходное разрешение
 * 1024×585. Раньше баннер растягивал её по всей ширине экрана (нередко
 * 1400-1900px) через object-fit: cover, то есть апскейлил в 1.5-2 раза —
 * отсюда и "замыленность". Теперь ширина баннера ограничена шириной
 * исходника (max-width), апскейла нет; на экранах уже исходника гифка
 * просто вписывается по ширине без обрезки сверху/снизу.
 */
.home-banner {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto -16px; /* чуть "подныриваем" под следующий hero-блок темы */
  overflow: hidden;
  border-radius: 0 0 20px 20px;
}

.home-banner__bg {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .home-banner {
    border-radius: 0;
  }
}
</style>
