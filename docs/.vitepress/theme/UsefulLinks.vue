<script setup lang="ts">
interface LinkItem {
  type: "link" | "info";
  icon: string;
  title: string;
  desc: string;
  href?: string;
  badge?: string;
}

/*
 * Порядок карточек осмысленный, не произвольный:
 * 1) Наш Discord — главный призыв к действию (вступить).
 * 2) IP сервера и карта — сразу всё, чтобы зайти и поиграть.
 * 3) Ресурсы всего проекта DailyMine (не наши, общие для всех сквадов).
 * 4) Необязательное (моды) — в самом конце.
 */
const links: LinkItem[] = [
  {
    type: "link",
    icon: "💬",
    title: "Discord FermaSquad",
    desc: "Наш сквад — вечная пригласительная ссылка",
    href: "https://discord.gg/fermasquad",
  },
  {
    type: "info",
    icon: "🖥️",
    title: "IP сервера",
    desc: "mc.dailymine.net · версия 1.21.11",
  },
  {
    type: "link",
    icon: "🗺️",
    title: "Карта сервера",
    desc: "Интерактивная карта мира DailyMine",
    href: "https://wp.dailymine.net/#world;flat;12132,64,-11880;1",
  },
  {
    type: "link",
    icon: "📖",
    title: "Вики DailyMine",
    desc: "База знаний проекта DailyMine (не наша вики)",
    href: "https://wiki.dailymine.net/",
  },
  {
    type: "link",
    icon: "🌐",
    title: "Discord DailyMine",
    desc: "Discord-сервер самого проекта DailyMine",
    href: "https://discord.gg/kWxMknvqpC",
  },
  {
    type: "link",
    icon: "🧩",
    title: "Моды для игры",
    desc: "Рекомендательная подборка — к установке не обязательна",
    href: "https://drive.google.com/drive/folders/1brm-CdtU0TZab8DgIRw5HP1o_WCIm5RP",
    badge: "необязательно",
  },
];
</script>

<template>
  <div class="useful-links">
    <div class="useful-links__grid">
      <component
        :is="l.type === 'link' ? 'a' : 'div'"
        v-for="l in links"
        :key="l.title"
        class="useful-links__card"
        :class="{ 'useful-links__card--info': l.type === 'info' }"
        v-bind="l.type === 'link' ? { href: l.href, target: '_blank', rel: 'noopener' } : {}"
      >
        <span class="useful-links__icon">{{ l.icon }}</span>
        <span class="useful-links__text">
          <strong>
            {{ l.title }}
            <span v-if="l.badge" class="useful-links__badge">{{ l.badge }}</span>
          </strong>
          <small v-if="l.type === 'info'"><code>mc.dailymine.net</code> · версия <code>1.21.11</code></small>
          <small v-else>{{ l.desc }}</small>
        </span>
        <span v-if="l.type === 'link'" class="useful-links__arrow">⩥</span>
      </component>
    </div>
  </div>
</template>

<style scoped>
.useful-links {
  margin: 0;
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
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  text-decoration: none !important;
  color: #fff;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}

a.useful-links__card:hover {
  border-color: #f0a644;
  background: rgba(255, 255, 255, 0.13);
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
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.useful-links__badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 1px 6px;
  border-radius: 999px;
  background: rgba(240, 166, 68, 0.25);
  color: #ffd79a;
  white-space: nowrap;
}

.useful-links__text small {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.72);
  overflow-wrap: anywhere;
}

.useful-links__text small code {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.useful-links__arrow {
  margin-left: auto;
  color: #f0a644;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
  flex-shrink: 0;
}

a.useful-links__card:hover .useful-links__arrow {
  opacity: 1;
  transform: translateX(0);
}

.useful-links__card--info {
  background: rgba(240, 166, 68, 0.14);
  border-color: rgba(240, 166, 68, 0.5);
}
</style>
