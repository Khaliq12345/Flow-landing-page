<template>
  <section class="py-16 bg-[#f9f9fc]" id="pricing">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="font-[Manrope] text-4xl font-extrabold text-[#002f55]">
          Tarification Transparente
        </h2>
        <p class="text-[#3f4945] mt-4">
          Des solutions adaptées à la taille de votre entreprise.
        </p>
      </div>

      <UPricingPlans class="max-w-5xl mx-auto">
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
          }"
          :ui="{
            root: 'bg-white border-2 border-[#e2e2e5] hover:border-[#fabd00] transition-all rounded-lg',
            title: 'font-[Manrope] font-bold text-[#002f55]',
            price: 'font-[Manrope] font-black text-[#002f55]',
            featureIcon: 'text-[#fabd00]',
          }"
        />

        <!-- Formule Premium -->
        <UPricingPlan
          title="Formule Premium"
          price="80 000"
          billing-cycle="FCFA / mois"
          :badge="{ label: 'PREMIUM', color: 'success', variant: 'subtle' }"
          :features="premiumFeatures"
          :button="{ label: 'Passer au Premium', block: true }"
          :ui="{
            root: 'bg-[#002f55] text-white border-2 border-white/20 shadow-2xl scale-105 z-10 rounded-lg',
            title: 'font-[Manrope] font-bold text-white',
            price: 'font-[Manrope] font-black text-white',
            billingCycle: 'text-white/70',
            featureIcon: 'text-[#acedda]',
            featureTitle: 'text-white',
          }"
        />
      </UPricingPlans>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
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
</script>
