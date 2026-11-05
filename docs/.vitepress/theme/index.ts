import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import HomeBanner from "./HomeBanner.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Рендерится прямо над hero-блоком на главной странице (layout: home)
      "home-hero-before": () => h(HomeBanner),
    });
  },
} satisfies Theme;
