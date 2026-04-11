<template>
  <UFooter class="bg-flow-neutral-200">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns" class="gap-12">
          <template #left>
            <div class="space-y-4">
              <div class="font-[Manrope] font-bold text-flow-blue-500 text-xl">
                Flow
              </div>
              <p
                class="text-xs md:text-sm text-flow-neutral-900 leading-relaxed max-w-sm"
              >
                Expertise digitale pour les leaders de demain en Afrique
                francophone.
              </p>
              <div class="flex gap-2">
                <UButton
                  v-for="social in socials"
                  :key="social.icon"
                  :icon="social.icon"
                  :to="social.to"
                  :aria-label="social.label"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  class="text-flow-neutral-900 hover:text-flow-blue-500 rounded-full"
                />
              </div>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #bottom>
      <div class="border-t border-flow-neutral-500/30">
        <UContainer>
          <div
            class="flex flex-col md:flex-row items-center justify-between py-8 gap-4"
          >
            <p class="text-xs md:text-sm text-flow-neutral-900">
              © {{ new Date().getFullYear() }} TECH2WORK. Tous droits réservés.
            </p>
          </div>
        </UContainer>
      </div>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const columns = [
  {
    label: "Produit",
    children: [
      { label: "Fonctionnalités", to: "/#pricing" },
      { label: "Tarification", to: "/#pricing" },
      { label: "Démo en direct", to: "/demo" },
    ],
  },
  {
    label: "Compagnie",
    children: [
      { label: "À propos", to: "https://tech2work.tech/fr/about" },
      { label: "Contact", to: whatsappLink(), target: "_blank" },
      { label: "Support", to: whatsappLink(), target: "_blank" },
    ],
  },
  {
    label: "Légal",
    children: [
      {
        label: "Politique de confidentialité",
        to: "https://tech2work.tech/en/privacy",
        target: "_blank",
      },
      {
        label: "Conditions d'utilisation",
        to: "https://tech2work.tech/terms",
        target: "_blank",
      },
    ],
  },
];

const socials = [
  {
    icon: "i-lucide-mail",
    to: "mailto:contact@tech2work.tech",
    label: "Email",
  },
];
</script>
