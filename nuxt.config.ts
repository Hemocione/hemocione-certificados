// https://nuxt.com/docs/api/configuration/nuxt-config

const getSiteUrl = () => {
  if (process.env.VERCEL_ENV === "preview") {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.VERCEL_ENV === undefined) {
    const nuxtDevConfig = process.env.__NUXT_DEV__;
    let networkAddress;
    if (nuxtDevConfig) {
      const parsedConfig = JSON.parse(nuxtDevConfig);
      networkAddress = parsedConfig?.proxy?.urls?.find(
        (addr: any) => addr.type === "network",
      )?.url;
    }

    return networkAddress || "http://localhost:3000";
  }

  return "https://certificados.hemocione.com.br";
};
const getCurrentEnv = () => {
  if (process.env.VERCEL_ENV === "preview") {
    return "dev";
  }

  if (process.env.VERCEL_ENV === "production") {
    return "prod";
  }

  return "dev";
};


export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: getSiteUrl(),
    },
    currentEnv: getCurrentEnv(),
    secret: process.env.SECRET || "secret",
  },
  devtools: { enabled: true },

  site: {
    url: getSiteUrl(),
    name: "Hemocione Certificados",
    env: getCurrentEnv(),
    indexable: false // Prevent search engines from indexing the site. Certificates are not something that should be indexed.
  },

  compatibilityDate: '2024-07-29',
  modules: ["nuxt-mongoose", "@nuxt/image", "@nuxtjs/seo"],
  mongoose: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/hemocione-certificados",
  },

  experimental: {
    componentIslands: true,
  },
});