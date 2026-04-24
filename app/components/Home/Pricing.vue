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
      <!-- Formule Essentielle -->
      <UPricingPlan
        title="Formule Essentielle"
        price="50 000"
        billing-cycle="FCFA / mois"
        :badge="{ label: 'POPULAIRE', color: 'warning', variant: 'subtle' }"
        :features="essentialFeatures"
        :button="{
          label: 'Choisir l\'Essentielle',
          color: 'neutral',
          variant: 'outline',
          block: true,
          to: whatsappLink(
            'Bonjour, je suis intéressé par la Formule Essentielle de Flow.',
          ),
          target: '_blank',
        }"
        :ui="{
          root: 'bg-white border-2 border-flow-neutral-500 hover:border-flow-amber-500 transition-all rounded-lg',
          title: 'font-[Manrope] font-bold text-flow-blue-500',
          price: 'font-[Manrope] font-black text-flow-blue-500',
          featureIcon: 'text-flow-amber-500',
        }"
      />
      <!-- Formule Premium -->
      <UPricingPlan
        title="Formule Premium"
        price="80 000"
        billing-cycle="FCFA / mois"
        :badge="{ label: 'PREMIUM', color: 'success', variant: 'subtle' }"
        :features="premiumFeatures"
        :button="{
          label: 'Passer au Premium',
          block: true,
          to: whatsappLink(
            'Bonjour, je suis intéressé par la Formule Premium de Flow.',
          ),
          target: '_blank',
        }"
        :ui="{
          root: 'bg-flow-blue-500 text-white border-2 border-white/20 shadow-2xl scale-105 z-10 rounded-lg',
          title: 'font-[Manrope] font-bold text-white',
          price: 'font-[Manrope] font-black text-white',
          billingCycle: 'text-white/70',
          featureIcon: 'text-[#acedda]',
          featureTitle: 'text-white',
        }"
      />
      <!-- Formule prestige -->
      <UPricingPlan
        title="Formule Prestige"
        price="100 000"
        billing-cycle="FCFA / mois"
        :badge="{ label: 'PREMIUM', variant: 'subtle' }"
        :features="prestigeFeatures"
        :button="{
          label: 'Passer au Premium',
          block: true,
          to: whatsappLink(
            'Bonjour, je suis intéressé par la Formule Prestige de Flow.',
          ),
          target: '_blank',
        }"
        :ui="{
          root: 'bg-yellow-800 text-white border-2 border-white/20 shadow-2xl z-10 rounded-lg',
          title: 'font-[Manrope] font-bold text-white',
          price: 'font-[Manrope] font-black text-white',
          billingCycle: 'text-white/70',
          featureIcon: 'text-[#ede6ac]',
          featureTitle: 'text-white',
          badge: 'text-amber-300 bg-amber-400/30',
          button:
            'border border-amber-300 bg-transparentu_i hover:bg-amber-900/70',
        }"
      />
    </UPricingPlans>
  </UPageSection>
</template>

<script setup lang="ts">
import { whatsappLink } from "~/utils/contact";

const essentialFeatures = [
  "3 vidéos par semaine",
  "5 images par semaine",
  "Montage professionnel",
  "1 visite média par semaine",
];

const premiumFeatures = [
  "5 vidéos par semaine",
  "10 images par semaine",
  "Automatisation & Analytics",
  "2 visites média par semaine",
  "Support prioritaire 24/7",
];

const prestigeFeatures = [
  "Toutes les fonctionnalités du plan Premium",
  "Développement de site web sur mesure",
  "Accompagnement à la prospection",
];
</script>
