<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

// Configuration des colonnes de liens
const columns: FooterColumn[] = [
  {
    label: 'Produit',
    children: [
      { label: 'Fonctionnalités', to: '#' },
      { label: 'Tarification', to: '/#pricing' },
      { label: 'Démo en direct', to: '/demo'}
    ]
  },
  {
    label: 'Compagnie',
    children: [
      { label: 'À propos', to: '#' },
      { label: 'Contact', to: '#' },
      { label: 'Support', to: '#' }
    ]
  },
  {
    label: 'Légal',
    children: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' }
    ]
  }
]

// Icônes sociales
const socials = [
  { icon: 'i-lucide-share-2', to: '#', label: 'Partager' },
  { icon: 'i-lucide-mail', to: '#', label: 'Email' }
]
</script>

<template>
  <UFooter class="bg-flow-neutral-200">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns" class="gap-12">
          <!-- Slot personnalisé pour la colonne brand -->
          <template #left>
            <div class="space-y-4">
              <div class="font-[Manrope] font-bold text-flow-blue-500 text-xl">
                Flow
              </div>
              <p class="text-xs md:text-sm text-flow-neutral-900 leading-relaxed">
                Expertise digitale pour les leaders de demain en Afrique francophone.
              </p>
              <div class="flex gap-4">
                <UButton
                  v-for="social in socials"
                  :key="social.icon"
                  :icon="social.icon"
                  :to="social.to"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  class="text-flow-neutral-900 hover:text-flow-blue-500"
                />
              </div>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #bottom>
      <USeparator class="border-flow-neutral-500" />
      <UContainer>
        <div class="flex items-center justify-between py-8">
          <p class="text-xs md:text-sm text-flow-neutral-900">
            © 2026 TECH2WORK. All rights reserved.
          </p>
        </div>
      </UContainer>
    </template>
  </UFooter>
</template>