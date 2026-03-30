<template>
  <section class="py-16 bg-[#f9f9fc]">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="font-[Manrope] text-4xl font-extrabold text-[#002f55] mb-4">
          Comment ça marche
        </h2>
        <p class="text-[#3f4945]">
          Un processus transparent en 4 étapes pour digitaliser votre présence.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        <div
          v-for="(step, index) in steps"
          :key="index"
          :class="['relative group', index % 2 === 1 ? 'md:mt-16' : '']"
        >
          <div
            class="bg-white p-8 border-l-4 h-full rounded-[0.25rem] shadow-sm"
            :class="index % 2 === 0 ? 'border-[#002f55]' : 'border-[#29695b]'"
          >
            <div
              class="font-[Manrope] font-black text-4xl mb-4 opacity-30"
              :class="index % 2 === 0 ? 'text-[#002f55]' : 'text-[#29695b]'"
            >
              0{{ index + 1 }}
            </div>
            <h4 class="font-[Manrope] font-bold text-lg mb-2 text-[#002f55]">
              {{ step.title }}
            </h4>
            <p class="text-sm text-[#3f4945]">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: "Informations Client",
    description:
      "Nous analysons vos besoins spécifiques et vos objectifs commerciaux.",
  },
  {
    title: "Identité de Marque",
    description:
      "Intégration de vos couleurs, logos et ton de voix pour un contenu unique.",
  },
  {
    title: "Collecte de Média",
    description:
      "Visites sur site 2x par semaine pour capturer l'essence de votre activité.",
  },
  {
    title: "Livraison Auto",
    description:
      "Réception automatique de vos contenus prêts à être publiés sur vos réseaux.",
  },
];
</script>
