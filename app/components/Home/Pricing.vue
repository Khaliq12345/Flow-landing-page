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
    <UPricingPlans>
      <UPricingPlan
        v-for="plan in plans"
        :key="plan.title"
        v-bind="plan"
      />
    </UPricingPlans>
  </UPageSection>
</template>

<script setup lang="ts">
import { whatsappLink } from "~/utils/contact";

const plans = [
  {
    title: "Essentielle",
    price: "50 000",
    billingCycle: "FCFA / mois",
    badge: { label: "POPULAIRE", color: "warning" as const, variant: "subtle" as const },
    features: [
      "3 vidéos par semaine",
      "5 images par semaine",
      "Montage professionnel",
      "1 visite média par semaine",
    ],
    button: {
      label: "Choisir l'Essentielle",
      color: "neutral" as const,
      variant: "outline" as const,
      block: true,
      to: whatsappLink("Bonjour, je suis intéressé par la Formule Essentielle de Flow."),
      target: "_blank",
    },
    ui: {
      root: "bg-white border-2 border-flow-neutral-500 hover:border-flow-amber-500 transition-all rounded-lg",
      title: "font-[Manrope] font-bold text-flow-blue-500",
      price: "font-[Manrope] font-black text-flow-blue-500",
      featureIcon: "text-flow-amber-500",
    },
  },
  {
    title: "Premium",
    price: "80 000",
    billingCycle: "FCFA / mois",
    // Ajout de "as const"
    badge: { label: "PREMIUM", color: "success" as const, variant: "subtle" as const },
    features: [
      "5 vidéos par semaine",
      "10 images par semaine",
      "Automatisation & Analytics",
      "2 visites média par semaine",
      "Support prioritaire 24/7",
    ],
    button: {
      label: "Passer au Premium",
      block: true,
      to: whatsappLink("Bonjour, je suis intéressé par la Formule Premium de Flow."),
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
  {
    title: "Prestige",
    price: "100 000",
    billingCycle: "FCFA / mois",
    badge: { label: "PRESTIGE", variant: "subtle" as const },
    features: [
      "Toutes les fonctionnalités du plan Premium",
      "Développement de site web sur mesure",
      "Accompagnement à la prospection",
    ],
    button: {
      label: "Passer au Prestige",
      block: true,
      to: whatsappLink("Bonjour, je suis intéressé par la Formule Prestige de Flow."),
      target: "_blank",
    },
    ui: {
      root: "bg-yellow-800 text-white border-2 border-white/20 shadow-2xl rounded-lg",
      title: "font-[Manrope] font-bold text-white",
      price: "font-[Manrope] font-black text-white",
      billingCycle: "text-white/70",
      featureIcon: "text-[#ede6ac]",
      featureTitle: "text-white",
      badge: "text-amber-300 bg-amber-400/30",
      button: "border border-amber-300 bg-transparent hover:bg-amber-900/70",
    },
  },
];
</script>