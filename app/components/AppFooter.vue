<template>
  <footer class="bg-[#f3f3f6] py-20">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="font-[Manrope] font-bold text-[#002f55] text-xl">
            Flow
          </div>
          <p class="text-xs md:text-sm text-[#3f4945] leading-relaxed">
            Expertise digitale pour les leaders de demain en Afrique francophone.
          </p>
          <div class="flex gap-4">
            <UIcon name="i-lucide-share-2" class="text-[#3f4945] hover:text-[#002f55] cursor-pointer transition-colors" />
            <UIcon name="i-lucide-mail" class="text-[#3f4945] hover:text-[#002f55] cursor-pointer transition-colors" />
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-[Manrope] font-bold text-[#002f55] mb-6 text-sm uppercase tracking-widest">
            Produit
          </h4>
          <ul class="space-y-3 text-xs md:text-sm text-[#3f4945]">
            <li>
              <NuxtLink to="#" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                Fonctionnalités
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#pricing" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                Tarification
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/demo" class="text-[#29695b] underline">
                Démo en direct
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-[Manrope] font-bold text-[#002f55] mb-6 text-sm uppercase tracking-widest">
            Compagnie
          </h4>
          <ul class="space-y-3 text-xs md:text-sm text-[#3f4945]">
            <li>
              <NuxtLink to="#" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                À propos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                Support
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-[Manrope] font-bold text-[#002f55] mb-6 text-sm uppercase tracking-widest">
            Légal
          </h4>
          <ul class="space-y-3 text-xs md:text-sm text-[#3f4945]">
            <li>
              <NuxtLink to="#" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="hover:text-[#002f55] transition-transform hover:translate-x-1 inline-block">
                Terms of Service
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-[#e2e2e5]">
        <p class="text-xs md:text-sm text-[#3f4945]">
          © 2026 TECH2WORK. All rights reserved.
        </p>
      </div>
    </UContainer>
  </footer>
</template>