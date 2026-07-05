export const SITE = {
  website: "https://zxl3011.github.io/", // replace this with your deployed domain
  author: "Xinlu Zhang",
  profile: "https://zxl3011.github.io/",
  desc: "Portfolio and blog of Xinlu Zhang, an Information Technology student in Adelaide, Australia, focusing on software development, backend engineering, and practical projects.",
  title: "Xinlu Zhang | Portfolio",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Australia/Adelaide", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
