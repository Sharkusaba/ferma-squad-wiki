<script setup lang="ts">
interface LinkItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

const links: LinkItem[] = [
  {
    icon: "🗺️",
    title: "Карта сервера",
    desc: "Интерактивная карта мира DailyMine",
    href: "https://wp.dailymine.net/#world;flat;12132,64,-11880;1",
  },
  {
    icon: "💬",
    title: "Discord FermaSquad",
    desc: "Вечная пригласительная ссылка",
    href: "https://discord.gg/fermasquad",
  },
  {
    icon: "✉️",
    title: "Написать нам в Discord",
    desc: "Личные сообщения / поддержка",
    href: "https://discord.gg/kWxMknvqpC",
  },
  {
    icon: "📖",
    title: "Вики",
    desc: "Вы сейчас здесь",
    href: "https://wiki.dailymine.net/",
  },
  {
    icon: "🧩",
    title: "Моды для игры",
    desc: "Сборка модов, Google Drive",
    href: "https://drive.google.com/drive/folders/1brm-CdtU0TZab8DgIRw5HP1o_WCIm5RP",
  },
];
</script>

<template>
  <div class="useful-links">
    <div class="useful-links__grid">
      <a
        v-for="l in links"
        :key="l.href"
        class="useful-links__card"
        :href="l.href"
        target="_blank"
        rel="noopener"
      >
        <span class="useful-links__icon">{{ l.icon }}</span>
        <span class="useful-links__text">
          <strong>{{ l.title }}</strong>
          <small>{{ l.desc }}</small>
        </span>
        <span class="useful-links__arrow">⩥</span>
      </a>

      <div class="useful-links__card useful-links__card--ip">
        <span class="useful-links__icon">🖥️</span>
        <span class="useful-links__text">
          <strong>IP сервера</strong>
          <small><code>mc.dailymine.net</code> · версия <code>1.21.11</code></small>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.useful-links {
  margin: 24px 0 40px;
}

.useful-links__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.useful-links__card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  color: var(--vp-c-text-1);
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}

a.useful-links__card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}

.useful-links__icon {
  font-size: 22px;
  line-height: 1;
  flex-shrink: 0;
}

.useful-links__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.useful-links__text strong {
  font-size: 14px;
}

.useful-links__text small {
  font-size: 12px;
  color: var(--vp-c-text-2);
  overflow-wrap: anywhere;
}

.useful-links__arrow {
  margin-left: auto;
  color: var(--vp-c-brand-1);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
  flex-shrink: 0;
}

a.useful-links__card:hover .useful-links__arrow {
  opacity: 1;
  transform: translateX(0);
}

.useful-links__card--ip {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}
</style>
