import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Ferma Squad — Вики",
  titleTemplate: ":title", // без этого VitePress сам дописывает "| VitePress" в заголовок вкладки
  description: "База знаний сквада «Ферма склад» (Daily Mine)",
  lang: "ru-RU",
  lastUpdated: true,
  cleanUrls: true,

  // Для Cloudflare Pages можно оставить "/": сайт будет на корне домена/поддомена.
  // Если разместите вики в подпапке (например username.github.io/wiki/), поменяйте на "/wiki/".
  base: "/",

  head: [
    ["link", { rel: "icon", href: "https://i.imgur.com/avRBREM.gif" }],
    ["meta", { property: "og:title", content: "Ferma Squad — Вики" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://allwebs.ru/images/2026/11/05/51ebbd44a7b8a1e5ef894666839d6fae.png",
      },
    ],
  ],

  themeConfig: {
    logo: "https://i.imgur.com/avRBREM.gif",

    nav: [
      { text: "Главная", link: "/" },
      { text: "Новичкам", link: "/novichkam/registraciya" },
      { text: "Структура", link: "/struktura/ministerstva" },
      { text: "Гос. рейтинг", link: "/gos-reiting/kak-nachislyaetsya" },
      { text: "Бот", link: "/bot/komandy" },
    ],

    sidebar: {
      "/novichkam/": [
        {
          text: "Новичкам",
          items: [
            { text: "Регистрация", link: "/novichkam/registraciya" },
            { text: "Первые шаги", link: "/novichkam/pervye-shagi" },
          ],
        },
      ],
      "/struktura/": [
        {
          text: "Структура сквада",
          items: [
            { text: "Министерства и службы", link: "/struktura/ministerstva" },
            { text: "Иерархия рангов", link: "/struktura/ierarhiya" },
          ],
        },
      ],
      "/gos-reiting/": [
        {
          text: "Гос. рейтинг",
          items: [
            { text: "Как начисляется", link: "/gos-reiting/kak-nachislyaetsya" },
            { text: "Госзаказы", link: "/gos-reiting/gosZakazy" },
          ],
        },
      ],
      "/bot/": [
        {
          text: "Пользование ботом",
          items: [
            { text: "Команды", link: "/bot/komandy" },
            { text: "Частые вопросы", link: "/bot/faq" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "Поиск", buttonAriaLabel: "Поиск по вики" },
              modal: {
                noResultsText: "Ничего не найдено по запросу",
                resetButtonTitle: "Сбросить",
                footer: {
                  selectText: "выбрать",
                  navigateText: "перейти",
                  closeText: "закрыть",
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [],

    editLink: {
      pattern: "https://github.com/ВАШ_АККАУНТ/ВАШ_РЕПОЗИТОРИЙ/edit/main/docs/:path",
      text: "Редактировать эту страницу на GitHub",
    },

    lastUpdatedText: "Обновлено",

    docFooter: {
      prev: "Назад",
      next: "Далее",
    },

    outlineTitle: "На этой странице",

    returnToTopLabel: "Наверх",

    darkModeSwitchLabel: "Тема",
    sidebarMenuLabel: "Меню",

    footer: {
      message: "Вики сквада «Ферма склад» · Daily Mine",
      copyright: "",
    },
  },
});
