<template>
  <div class="bg-[#f9f9fc]">
    <AppHeader />

    <main class="pt-24">
      <!-- Header Section -->
      <section class="px-8 py-20 max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <span
            class="inline-block px-3 py-1 bg-[#acedda] text-[#065043] rounded-full text-xs font-bold tracking-wider uppercase mb-6"
          >
            Galerie de démonstration
          </span>
          <h1
            class="font-[Manrope] text-5xl md:text-6xl font-extrabold text-[#002f55] tracking-tighter mb-8 leading-[1.1]"
          >
            Démo & Exemples
          </h1>
          <p class="text-xl text-[#3f4945] leading-relaxed font-light">
            Découvrez la puissance de l'automatisation de contenu. Du
            storytelling de marque aux campagnes promotionnelles, voyez comment
            nous transformons vos idées en actifs visuels de haute autorité.
          </p>
        </div>
      </section>

      <!-- Video Gallery -->
      <section class="bg-[#f3f3f6] py-24">
        <UContainer>
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
          >
            <div class="max-w-xl">
              <h2
                class="font-[Manrope] text-3xl font-bold text-[#002f55] mb-4 tracking-tight"
              >
                Storytelling Vidéo
              </h2>
              <p class="text-[#3f4945]">
                Des formats courts optimisés pour l'engagement émotionnel et la
                conversion directe sur les réseaux sociaux.
              </p>
            </div>
            <div class="flex gap-2">
              <button
                class="text-[#002f55] p-2 border border-[#bfc9c4]/30 rounded-full cursor-pointer hover:bg-white transition-colors"
              >
                <UIcon name="i-lucide-arrow-left" />
              </button>
              <button
                class="text-[#002f55] p-2 border border-[#bfc9c4]/30 rounded-full cursor-pointer hover:bg-white transition-colors"
              >
                <UIcon name="i-lucide-arrow-right" />
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <!-- Main Video -->
            <div
              class="md:col-span-8 relative overflow-hidden rounded-[0.5rem] bg-[#e2e2e5] aspect-video group"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Modern office"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-[#002f55]/20 flex items-center justify-center"
              >
                <button
                  class="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform"
                >
                  <UIcon
                    name="i-lucide-play"
                    class="w-8 h-8 text-[#002f55] ml-1"
                  />
                </button>
              </div>
              <div class="absolute bottom-6 left-6 text-white">
                <p
                  class="text-xs font-bold uppercase tracking-widest mb-1 opacity-80"
                >
                  Documentaire de Marque
                </p>
                <h3 class="text-2xl font-bold font-[Manrope]">
                  L'Innovation à Abidjan
                </h3>
              </div>
            </div>

            <!-- Side Video -->
            <div class="md:col-span-4 flex flex-col gap-8">
              <div
                class="relative overflow-hidden rounded-[0.5rem] bg-[#e2e2e5] h-full group"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team working"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#002f55]/80 to-transparent flex flex-col justify-end p-6"
                >
                  <UIcon
                    name="i-lucide-trending-up"
                    class="text-[#fabd00] mb-2 w-8 h-8"
                  />
                  <h4 class="text-white font-bold text-lg">Croissance B2B</h4>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Visuals & Posters - Bento Grid -->
      <section class="py-24 bg-[#f9f9fc]">
        <UContainer>
          <div class="mb-16">
            <h2
              class="font-[Manrope] text-3xl font-bold text-[#002f55] mb-4 tracking-tight"
            >
              Visuels & Affiches
            </h2>
            <p class="text-[#3f4945] max-w-2xl">
              Créations haute fidélité pour vos lancements de produits et
              annonces flash. Un design qui respecte votre identité de marque.
            </p>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]"
          >
            <!-- Large Card -->
            <div
              class="md:col-span-2 md:row-span-2 bg-[#f3f3f6] rounded-[0.5rem] p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              <div class="relative z-10">
                <span
                  class="text-xs font-bold text-[#29695b] uppercase tracking-widest"
                  >Promotion Flash</span
                >
                <h3
                  class="text-4xl font-[Manrope] font-extrabold text-[#002f55] mt-4 mb-2"
                >
                  -40% sur la Gamme Pro
                </h3>
                <p class="text-[#3f4945]">Uniquement ce week-end</p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                alt="Product"
                class="absolute bottom-[-10%] right-[-10%] w-2/3 object-contain transition-transform group-hover:rotate-6 duration-500"
              />

              <UButton
                class="relative z-10 self-start mt-8 bg-[#002f55] text-white rounded-[0.125rem] hover:bg-[#00457a]"
              >
                En savoir plus
              </UButton>
            </div>

            <!-- Top Right -->
            <div
              class="md:col-span-2 bg-[#3c2b00] text-white rounded-[0.5rem] relative overflow-hidden group"
            >
              <div class="relative z-10 p-8">
                <h3 class="text-2xl font-[Manrope] font-bold mb-2">
                  Nouvelle Collection
                </h3>
                <p class="text-[#fabd00] font-medium">Lancement Automne 2024</p>
              </div>
              <div
                class="absolute inset-0 opacity-30 group-hover:scale-110 transition-transform duration-1000"
              >
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Retail space"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Bottom Left -->
            <div
              class="bg-[#acedda] rounded-[0.5rem] p-6 flex flex-col justify-center items-center text-center"
            >
              <UIcon
                name="i-lucide-megaphone"
                class="text-4xl text-[#065043] mb-4"
              />
              <h4 class="font-bold text-[#002f55]">Annonces Sociales</h4>
              <p class="text-xs mt-2 text-[#065043] opacity-80">
                Prêt pour Instagram & LinkedIn
              </p>
            </div>

            <!-- Bottom Right -->
            <div
              class="bg-[#e2e2e5] rounded-[0.5rem] p-6 flex flex-col justify-center items-center text-center"
            >
              <UIcon
                name="i-lucide-sparkles"
                class="text-4xl text-[#002f55] mb-4"
              />
              <h4 class="font-bold text-[#002f55]">IA Générative</h4>
              <p class="text-xs mt-2 text-[#3f4945]">
                Précision et Style Unique
              </p>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Use Cases -->
      <section class="py-24 bg-[#f9f9fc]">
        <UContainer>
          <div class="text-center mb-20">
            <h2
              class="font-[Manrope] text-3xl font-bold text-[#002f55] mb-4 tracking-tight"
            >
              Cas d'Utilisation
            </h2>
            <p class="text-[#3f4945] max-w-xl mx-auto">
              Comment nos partenaires utilisent Sahel Tech Pro pour dominer leur
              marché.
            </p>
          </div>

          <div class="space-y-4">
            <!-- Case 1 -->
            <div
              class="flex flex-col md:flex-row items-center bg-[#f3f3f6] rounded-[0.5rem] overflow-hidden"
            >
              <div class="md:w-1/2 p-12">
                <h3
                  class="text-2xl font-[Manrope] font-bold text-[#002f55] mb-4"
                >
                  Coulisses & Culture
                </h3>
                <p class="text-[#3f4945] leading-relaxed mb-6">
                  Humanisez votre marque en montrant l'envers du décor. Nos
                  algorithmes sélectionnent les meilleurs moments de vos
                  journées pour créer des capsules immersives qui renforcent la
                  confiance.
                </p>
                <UButton variant="link" class="p-0 text-[#29695b] font-bold">
                  Voir les exemples
                  <template #trailing>
                    <UIcon name="i-lucide-arrow-right" />
                  </template>
                </UButton>
              </div>
              <div class="md:w-1/2 h-80">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80"
                  alt="Work culture"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Case 2 -->
            <div
              class="flex flex-col md:flex-row-reverse items-center bg-white rounded-[0.5rem] overflow-hidden shadow-sm"
            >
              <div class="md:w-1/2 p-12">
                <h3
                  class="text-2xl font-[Manrope] font-bold text-[#002f55] mb-4"
                >
                  Révélations de Produits
                </h3>
                <p class="text-[#3f4945] leading-relaxed mb-6">
                  Créez l'anticipation avant chaque lancement. Des visuels
                  mystérieux aux démonstrations techniques, nous orchestrons
                  votre montée en puissance visuelle.
                </p>
                <UButton variant="link" class="p-0 text-[#29695b] font-bold">
                  Explorer le module
                  <template #trailing>
                    <UIcon name="i-lucide-arrow-right" />
                  </template>
                </UButton>
              </div>
              <div class="md:w-1/2 h-80">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                  alt="Product reveal"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Bottom CTA -->
      <section class="py-24 bg-[#f9f9fc]">
        <UContainer>
          <div
            class="bg-[#002f55] rounded-[1.5rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            >
              <div
                class="absolute top-[-50%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-[#29695b] to-transparent rounded-full blur-[100px]"
              />
            </div>

            <div class="relative z-10">
              <h2
                class="font-[Manrope] text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter"
              >
                Prêt à automatiser votre succès ?
              </h2>
              <div class="flex flex-col md:flex-row justify-center gap-4">
                <UButton
                  class="bg-[#fabd00] text-[#3c2b00] font-bold py-4 px-10 rounded-[0.5rem]"
                >
                  Contactez-nous
                </UButton>
                <UButton
                  variant="outline"
                  class="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-10 rounded-[0.5rem] hover:bg-white/20"
                >
                  Voir les tarifs
                </UButton>
              </div>
            </div>
          </div>
        </UContainer>
      </section>
    </main>

    <AppFooter />
  </div>
</template>
