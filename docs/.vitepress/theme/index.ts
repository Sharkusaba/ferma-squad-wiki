import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import HomeBanner from "./HomeBanner.vue";
import HomeLinksSection from "./HomeLinksSection.vue";
import UsefulLinks from "./UsefulLinks.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Рендерится прямо над hero-блоком на главной странице (layout: home)
      "home-hero-before": () => h(HomeBanner),
      // Рендерится сразу после hero и ДО карточек features — чтобы ссылки
      // были видны сразу, а не терялись ниже "Бот" без намёка, что дальше
      // есть что-то ещё.
      "home-features-before": () => h(HomeLinksSection),
    });
  },
  enhanceApp({ app }) {
    // Доступен на любой .md странице как <UsefulLinks />
    app.component("UsefulLinks", UsefulLinks);
  },
} satisfies Theme;
