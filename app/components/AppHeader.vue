<template>
  <UHeader
    :ui="{
      root: 'fixed top-0 w-full z-50 backdrop-blur-md bg-[#f9f9fc]/70 shadow-sm',
    }"
  >
    <!-- Logo -->
    <template #title>
      <NuxtLink
        to="/"
        class="text-2xl font-bold tracking-tighter text-[#002f55] font-[Manrope]"
      >
        Flow
      </NuxtLink>
    </template>

    <!-- Navigation Desktop (centre) -->
    <UNavigationMenu
      :items="navItems"
      :ui="{
        link: 'font-[Manrope] text-sm font-semibold tracking-tight text-[#3f4945] hover:text-[#002f55] transition-all duration-300',
        linkActive: 'text-[#29695b] border-b-2 border-[#29695b]',
      }"
    />

    <!-- Slot body : affiché dans le drawer mobile -->
    <template #body>
      <UNavigationMenu
        orientation="vertical"
        :items="navItems"
        :ui="{
          link: 'font-[Manrope] text-sm font-semibold tracking-tight text-[#3f4945] hover:text-[#002f55]',
          linkActive: 'text-[#29695b]',
        }"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/',
  },
  {
    label: 'Demo',
    to: '/demo',
    active: route.path === '/demo',
  },
  {
    label: 'Pricing',
    to: '/#pricing',
  },
])
</script>