<template>
  <UPageSection
    class="bg-flow-blue-500 text-white overflow-hidden"
    title="Une diversité de formats"
    :ui="{ title: 'font-[Manrope] text-4xl md:text-5xl font-bold' }"
  >
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-175">
      <div
        v-for="(item, index) in formats"
        :key="index"
        :class="[item.span, item.height]"
        class="bg-[#00457a]/10 rounded-[0.5rem] overflow-hidden relative group"
      >
        <img
          :src="item.img"
          :alt="item.alt"
          class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div
          :class="[
            'absolute inset-0 from-flow-blue-500 to-transparent',
            item.gradient,
          ]"
        />

        <div class="absolute bottom-8 left-8">
          <span
            :class="item.badgeClass"
            class="px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block"
          >
            {{ item.badge }}
          </span>
          <h3 class="text-2xl font-[Manrope] font-bold">{{ item.title }}</h3>
        </div>
      </div>

      <div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-primary-muted/10 rounded-[0.5rem] p-8 flex flex-col justify-center border border-white/10"
        >
          <UIcon
            :name="feature.icon"
            class="text-4xl mb-4"
            :class="feature.iconColor"
          />
          <h4 class="text-xl font-[Manrope] font-bold">{{ feature.title }}</h4>
          <p class="text-sm opacity-70 mt-2">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const formats = [
  {
    span: "md:col-span-4",
    height: "h-96 md:h-auto",
    img: "demo/images/tiktok-and-instagram-social-media.jpg",
    alt: "Vidéos verticales",
    badge: "Vidéos Reels/TikTok",
    badgeClass: "bg-flow-green-500 text-white",
    title: "Engagement Maximal",
    gradient: "bg-linear-to-t",
  },
  {
    span: "md:col-span-8",
    height: "h-64 md:h-auto",
    img: "demo/images/reel-cover.webp",
    alt: "Design graphique",
    badge: "Visuels & Affiches",
    badgeClass: "bg-flow-amber-500 text-[#3c2b00]",
    title: "Identité Forte",
    gradient: "bg-linear-to-r",
  },
];

const features = [
  {
    icon: "i-lucide-sparkles",
    iconColor: "text-secondary-muted",
    title: "Mises à jour Quotidiennes",
    description: "Jamais à court de contenu pour vos stories.",
  },
  {
    icon: "i-lucide-bar-chart-3",
    iconColor: "text-flow-amber-500",
    title: "Impact Mesurable",
    description: "Contenu optimisé pour les algorithmes actuels.",
  },
];
</script>
