<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Flow";
const description =
  "Flow is a powerful AI content creation tool that helps you generate high-quality content quickly and easily. With Flow, you can create blog posts, social media content, product descriptions, and more with just a few clicks. Flow uses advanced AI algorithms to understand your content needs and generate relevant and engaging content that resonates with your audience. Whether you're a marketer, blogger, or business owner, Flow is the perfect tool to help you create compelling content that drives results.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <UApp>
    <AppHeader />

    <UMain class="bg-flow-neutral-100">
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
