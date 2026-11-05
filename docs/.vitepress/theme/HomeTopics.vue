<script setup lang="ts">
interface Topic {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

const topics: Topic[] = [
  {
    icon: "🌾",
    title: "О нас",
    desc: "Кто такие FermaSquad, сервер DailyMine, правила и устав",
    href: "/o-nas/",
  },
  {
    icon: "🧭",
    title: "Новичкам",
    desc: "Верификация, роль и первые шаги в сквaде",
    href: "/novichkam/registraciya",
  },
  {
    icon: "🏛️",
    title: "Структура сквада",
    desc: "МинПлан, Министерство архитектуры, Таможенная служба, иерархия",
    href: "/struktura/ministerstva",
  },
  {
    icon: "⭐",
    title: "Гос. рейтинг",
    desc: "Как начисляется ГР, за что снимается, госзаказы",
    href: "/gos-reiting/kak-nachislyaetsya",
  },
  {
    icon: "🤖",
    title: "Бот",
    desc: "Все команды и ответы на частые вопросы",
    href: "/bot/komandy",
  },
];
</script>

<template>
  <div class="home-topics">
    <div class="home-topics__grid">
      <a
        v-for="t in topics"
        :key="t.href"
        class="home-topics__card"
        :href="t.href"
      >
        <span class="home-topics__icon">{{ t.icon }}</span>
        <strong class="home-topics__title">{{ t.title }}</strong>
        <small class="home-topics__desc">{{ t.desc }}</small>
      </a>
    </div>
  </div>
</template>

<style scoped>
.home-topics__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.home-topics__card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(20, 14, 6, 0.42);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  text-decoration: none !important;
  color: #fff;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}

.home-topics__card:hover {
  border-color: #f0a644;
  background: rgba(255, 255, 255, 0.13);
  transform: translateY(-2px);
}

.home-topics__icon {
  font-size: 24px;
  line-height: 1;
}

.home-topics__title {
  font-size: 14px;
  color: #fff;
}

.home-topics__desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.4;
}
</style>
