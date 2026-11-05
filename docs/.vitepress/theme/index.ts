import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import HomeBanner from "./HomeBanner.vue";
import UsefulLinks from "./UsefulLinks.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Рендерится прямо над hero-блоком на главной странице (layout: home)
      "home-hero-before": () => h(HomeBanner),
    });
  },
  enhanceApp({ app }) {
    // Доступен на любой .md странице как <UsefulLinks />
    app.component("UsefulLinks", UsefulLinks);
  },
} satisfies Theme;
