<template>
  <UPageSection
    class="bg-flow-neutral-100"
    id="pricing"
    title="Tarification Transparente"
    description="Des solutions adaptées à la taille de votre entreprise."
    :ui="{
      title: 'font-[Manrope] text-4xl font-extrabold text-flow-blue-500',
      description: 'text-flow-neutral-900',
    }"
  >
    <div class="max-w-md mx-auto">
      <UPricingPlan v-for="plan in plans" :key="plan.price" v-bind="plan" />
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
import { whatsappLink } from "~/utils/contact";

const plans = [
  {
    // title: "Plan",
    price: "Payez par contenu",
    features: [
      "Création de vidéos",
      "Création d’images",
      "Montage vidéo avancé",
      "Automatisation des contenus",
      "Analyses & performances (analytics)",
      "Contenu illimité",
      "Support 24/7",
    ],
    button: {
      label: "Contactez Nous",
      block: true,
      to: whatsappLink(
        "Bonjour, je suis intéressé par la Formule Premium de Flow.",
      ),
      target: "_blank",
    },
    ui: {
      root: "bg-flow-blue-500 text-white border-2 border-white/20 shadow-2xl scale-105 z-10 rounded-lg",
      title: "font-[Manrope] font-bold text-white",
      price: "font-[Manrope] font-black text-white",
      billingCycle: "text-white/70",
      featureIcon: "text-[#acedda]",
      featureTitle: "text-white",
    },
  },
];
</script>
