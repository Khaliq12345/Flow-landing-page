<template>
  <DemoHeader />
  <DemoVideoGallery />
  <DemoVisuals />
  <DemoUseCases />
  <DemoCta />
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Démo Flow – Voyez l'IA en Action",
  description:
    "Découvrez Flow en direct : vidéos générées automatiquement, visuels sur mesure et cas d'usage concrets pour votre entreprise. Aucune équipe de montage requise.",

  ogTitle: "Démo Flow – Voyez l'IA en Action",
  ogDescription:
    "Explorez les capacités de Flow avec des exemples réels. Vidéos, visuels et contenu marketing générés par IA pour les entreprises B2B africaines.",
  ogImage: "/og-image-demo.png",
  ogUrl: "https://flow.tech2work.tech/demo",
  ogType: "website",
  ogLocale: "fr_FR",

  twitterCard: "summary_large_image",
  twitterTitle: "Démo Flow – Contenu IA pour Entreprises",
  twitterDescription:
    "Voyez comment Flow génère du contenu marketing premium automatiquement. Testez en direct.",
  twitterImage: "/og-image-demo.png",
});
</script>
