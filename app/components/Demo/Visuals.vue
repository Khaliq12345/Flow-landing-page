<template>
  <UPageSection class="bg-flow-neutral-100">
    <div>
      <div class="mb-16">
        <h2
          class="font-[Manrope] text-3xl font-bold text-flow-blue-500 mb-4 tracking-tight"
        >
          Visuels & Affiches
        </h2>
        <p class="text-flow-neutral-900 max-w-2xl">
          Créations haute fidélité pour vos lancements de produits et annonces
          flash. Un design qui respecte votre identité de marque.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-200"
      >
        <!-- Large Card -->
        <div
          class="md:col-span-2 md:row-span-2 bg-flow-neutral-200 rounded-[0.5rem] p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div class="relative z-10">
            <span
              class="text-xs font-bold text-flow-green-500 uppercase tracking-widest"
              >Promotion Flash</span
            >
            <h3
              class="text-4xl font-[Manrope] font-extrabold text-flow-blue-500 mt-4 mb-2"
            >
              -40% sur la Gamme Pro
            </h3>
            <p class="text-flow-neutral-900">Uniquement ce week-end</p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
            alt="Product"
            class="absolute bottom-[-10%] right-[-10%] w-2/3 object-contain transition-transform group-hover:rotate-6 duration-500"
          />

          <UButton
            class="relative z-10 self-start mt-8 bg-flow-blue-500 text-white rounded-[0.125rem] hover:bg-[#00457a]"
            :to="whatsappLink()"
            target="_blank"
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
            <p class="text-flow-amber-500 font-medium">
              Lancement Automne 2024
            </p>
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
          <h4 class="font-bold text-flow-blue-500">Annonces Sociales</h4>
          <p class="text-xs mt-2 text-[#065043] opacity-80">
            Prêt pour Instagram & LinkedIn
          </p>
        </div>

        <!-- Bottom Right -->
        <div
          class="bg-flow-neutral-500 rounded-[0.5rem] p-6 flex flex-col justify-center items-center text-center"
        >
          <UIcon
            name="i-lucide-sparkles"
            class="text-4xl text-flow-blue-500 mb-4"
          />
          <h4 class="font-bold text-flow-blue-500">IA Générative</h4>
          <p class="text-xs mt-2 text-flow-neutral-900">
            Précision et Style Unique
          </p>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
