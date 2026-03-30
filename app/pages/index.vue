<template>
  <div class="bg-[#f9f9fc]">
    <AppHeader />

    <main class="pt-24">
      <!-- Hero Section -->
      <section class="pt-16 pb-20 px-6 overflow-hidden">
        <UContainer>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 space-y-8">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full bg-[#acedda] text-[#065043] text-xs font-bold tracking-wider uppercase"
              >
                L'avenir du marketing B2B
              </span>

              <h1
                class="font-[Manrope] text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-[#002f55]"
              >
                Solution de Génération de Contenu
                <span class="text-[#29695b]">Automatisée</span>
              </h1>

              <p
                class="text-lg md:text-xl text-[#3f4945] max-w-xl leading-relaxed"
              >
                Propulsez votre marque avec des vidéos et visuels premium
                générés automatiquement. Plus rapide, 70% moins cher, et sans
                besoin d'une équipe de montage dédiée.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <UButton
                  class="font-[Manrope] font-bold text-lg px-8 py-4 bg-[#002f55] text-white hover:bg-[#00457a] rounded-md"
                >
                  Commencez Maintenant
                </UButton>
                <UButton
                  variant="outline"
                  class="font-[Manrope] font-bold text-lg px-8 py-4 border-[#e2e2e5] text-[#1a1c1e] hover:bg-[#eeeef0] rounded-md flex items-center justify-center gap-2"
                >
                  <UIcon name="i-lucide-calendar" />
                  Prendre un RDV
                </UButton>
              </div>
            </div>

            <div class="lg:col-span-5 relative">
              <div
                class="relative z-10 rounded-[0.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Modern office meeting"
                  class="w-full aspect-[4/5] object-cover"
                />
              </div>

              <div
                class="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-[0.5rem] shadow-xl flex items-center gap-4 max-w-xs"
              >
                <div class="bg-[#acedda] text-[#065043] p-3 rounded-full">
                  <UIcon name="i-lucide-zap" class="w-6 h-6" />
                </div>
                <div>
                  <div class="text-sm font-bold text-[#002f55]">
                    Automatisation Totale
                  </div>
                  <div class="text-xs text-[#3f4945]">
                    Production 24/7 pour votre business
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Benefits Section -->
      <section class="py-24 bg-[#f3f3f6]">
        <UContainer>
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div class="max-w-2xl">
              <h2
                class="font-[Manrope] text-4xl md:text-5xl font-extrabold text-[#002f55] mb-6"
              >
                Pourquoi choisir Flow ?
              </h2>
              <p class="text-[#3f4945] text-lg leading-relaxed">
                Nous redéfinissons la création de contenu pour les entreprises
                africaines en alliant technologie de pointe et expertise locale.
              </p>
            </div>
            <div
              class="text-[#29695b] font-[Manrope] font-bold text-6xl opacity-20 hidden md:block"
            >
              01
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="bg-white p-10 rounded-[0.25rem] hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            >
              <UIcon
                :name="benefit.icon"
                class="text-4xl text-[#29695b] mb-6"
              />
              <h3 class="font-[Manrope] text-xl font-bold text-[#002f55] mb-4">
                {{ benefit.title }}
              </h3>
              <p class="text-[#3f4945] leading-relaxed">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- How It Works -->
      <section class="py-24 bg-[#f9f9fc]">
        <UContainer>
          <div class="text-center max-w-3xl mx-auto mb-20">
            <h2
              class="font-[Manrope] text-4xl font-extrabold text-[#002f55] mb-4"
            >
              Comment ça marche
            </h2>
            <p class="text-[#3f4945]">
              Un processus transparent en 4 étapes pour digitaliser votre
              présence.
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
                :class="
                  index % 2 === 0 ? 'border-[#002f55]' : 'border-[#29695b]'
                "
              >
                <div
                  class="font-[Manrope] font-black text-4xl mb-4 opacity-30"
                  :class="index % 2 === 0 ? 'text-[#002f55]' : 'text-[#29695b]'"
                >
                  0{{ index + 1 }}
                </div>
                <h4
                  class="font-[Manrope] font-bold text-lg mb-2 text-[#002f55]"
                >
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

      <!-- Content Types - Bento Grid -->
      <section class="py-24 bg-[#002f55] text-white overflow-hidden">
        <UContainer>
          <h2
            class="font-[Manrope] text-4xl md:text-5xl font-extrabold mb-12 text-center"
          >
            Une diversité de formats
          </h2>

          <div
            class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]"
          >
            <!-- Vertical Video -->
            <div
              class="md:col-span-4 bg-[#00457a]/10 rounded-[0.5rem] overflow-hidden relative group h-96 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80"
                alt="Vertical video"
                class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#002f55] to-transparent"
              />
              <div class="absolute bottom-8 left-8">
                <span
                  class="bg-[#29695b] px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block text-white"
                  >Vidéos Reels/TikTok</span
                >
                <h3 class="text-2xl font-[Manrope] font-bold">
                  Engagement Maximal
                </h3>
              </div>
            </div>

            <!-- Right Column -->
            <div class="md:col-span-8 grid grid-rows-2 gap-6">
              <div
                class="bg-[#00457a]/10 rounded-[0.5rem] overflow-hidden relative group h-64 md:h-auto"
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Graphic design"
                  class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#002f55]/80 to-transparent"
                />
                <div class="absolute bottom-8 left-8">
                  <span
                    class="bg-[#fabd00] text-[#3c2b00] px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block"
                    >Visuels & Affiches</span
                  >
                  <h3 class="text-2xl font-[Manrope] font-bold">
                    Identité Forte
                  </h3>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-6">
                <div
                  class="bg-[#00457a]/10 rounded-[0.5rem] p-8 flex flex-col justify-center border border-white/10"
                >
                  <UIcon
                    name="i-lucide-sparkles"
                    class="text-4xl text-[#acedda] mb-4"
                  />
                  <h4 class="text-xl font-[Manrope] font-bold">
                    Mises à jour Quotidiennes
                  </h4>
                  <p class="text-sm opacity-70 mt-2">
                    Jamais à court de contenu pour vos stories.
                  </p>
                </div>

                <div
                  class="bg-[#00457a]/10 rounded-[0.5rem] p-8 flex flex-col justify-center border border-white/10"
                >
                  <UIcon
                    name="i-lucide-bar-chart-3"
                    class="text-4xl text-[#fabd00] mb-4"
                  />
                  <h4 class="text-xl font-[Manrope] font-bold">
                    Impact Mesurable
                  </h4>
                  <p class="text-sm opacity-70 mt-2">
                    Contenu optimisé pour les algorithmes actuels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Pricing -->
      <section class="py-24 bg-[#f9f9fc]" id="pricing">
        <UContainer>
          <div class="text-center mb-16">
            <h2 class="font-[Manrope] text-4xl font-extrabold text-[#002f55]">
              Tarification Transparente
            </h2>
            <p class="text-[#3f4945] mt-4">
              Des solutions adaptées à la taille de votre entreprise.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- Essentielle -->
            <div
              class="relative p-10 rounded-[0.5rem] bg-white shadow-sm border border-[#e2e2e5] hover:border-[#fabd00] transition-all"
            >
              <span
                class="absolute top-6 right-8 bg-[#ffdf9e] text-[#261a00] px-4 py-1 rounded-full text-xs font-bold"
                >POPULAIRE</span
              >

              <h3 class="font-[Manrope] text-2xl font-bold text-[#002f55] mb-2">
                Formule Essentielle
              </h3>
              <div class="flex items-baseline gap-1 mb-8">
                <span class="text-4xl font-[Manrope] font-black text-[#002f55]"
                  >50 000</span
                >
                <span class="text-lg font-bold text-[#3f4945]"
                  >FCFA / mois</span
                >
              </div>

              <ul class="space-y-4 mb-10">
                <li
                  v-for="feature in essentialFeatures"
                  :key="feature"
                  class="flex items-center gap-3 text-[#1a1c1e]"
                >
                  <UIcon name="i-lucide-check-circle" class="text-[#fabd00]" />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <UButton
                variant="outline"
                block
                class="font-[Manrope] font-bold border-2 border-[#fabd00] text-[#002f55] hover:bg-[#fabd00] rounded-md"
              >
                Choisir l'Essentielle
              </UButton>
            </div>

            <!-- Premium -->
            <div
              class="relative p-10 rounded-[0.5rem] bg-[#002f55] text-white shadow-2xl scale-105 z-10"
            >
              <span
                class="absolute top-6 right-8 bg-[#acedda] text-[#065043] px-4 py-1 rounded-full text-xs font-bold"
                >PREMIUM</span
              >

              <h3 class="font-[Manrope] text-2xl font-bold mb-2">
                Formule Premium
              </h3>
              <div class="flex items-baseline gap-1 mb-8">
                <span class="text-4xl font-[Manrope] font-black">80 000</span>
                <span class="text-lg font-bold opacity-70">FCFA / mois</span>
              </div>

              <ul class="space-y-4 mb-10">
                <li
                  v-for="feature in premiumFeatures"
                  :key="feature"
                  class="flex items-center gap-3"
                >
                  <UIcon name="i-lucide-check-circle" class="text-[#acedda]" />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <UButton
                block
                class="font-[Manrope] font-bold bg-[#acedda] text-[#065043] hover:bg-[#94d3c1] rounded-md"
              >
                Passer au Premium
              </UButton>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-[#f3f3f6]">
        <UContainer class="max-w-4xl text-center">
          <h2
            class="font-[Manrope] text-4xl md:text-5xl font-extrabold text-[#002f55] mb-8 leading-tight"
          >
            Prêt à automatiser votre croissance ?
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              class="bg-[#002f55] text-white font-[Manrope] font-bold text-xl px-10 py-5 rounded-md hover:bg-[#00457a]"
            >
              Commencez Maintenant
            </UButton>
            <UButton
              variant="outline"
              class="bg-white text-[#1a1c1e] font-[Manrope] font-bold text-xl px-10 py-5 rounded-md border-[#e2e2e5] hover:bg-[#eeeef0]"
            >
              Contactez Nous
            </UButton>
          </div>
        </UContainer>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: "i-lucide-piggy-bank",
    title: "Réduction des Coûts",
    description:
      "Économisez sur les frais d'agence et les salaires fixes. Payez uniquement pour la performance.",
  },
  {
    icon: "i-lucide-video",
    title: "Équipe Simplifiée",
    description:
      "Plus besoin de gérer des monteurs vidéo ou des graphistes. Notre IA et nos experts s'occupent de tout.",
  },
  {
    icon: "i-lucide-award",
    title: "Qualité Supérieure",
    description:
      "Un rendu professionnel constant, aligné sur les standards internationaux de design.",
  },
];

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
