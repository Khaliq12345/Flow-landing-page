<template>
  <UHeader>
    <!-- Logo -->
    <template #title>
      <NuxtLink
        to="/"
        class="text-2xl font-bold tracking-tighter text-flow-blue-500 font-[Manrope]"
      >
        Flow
      </NuxtLink>
    </template>

    <!-- Navigation Desktop (centre) -->
    <UNavigationMenu
      :items="navItems"
      :ui="{
        link: 'font-[Manrope] text-sm font-semibold tracking-tight text-flow-neutral-900 hover:text-flow-blue-500 transition-all duration-300',
      }"
    />

    <!-- Slot body : affiché dans le drawer mobile -->
    <template #body>
      <UNavigationMenu
        orientation="vertical"
        :items="navItems"
        :ui="{
          link: 'font-[Manrope] text-sm font-semibold tracking-tight text-flow-neutral-900 hover:text-flow-blue-500',
        }"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Demo",
    to: "/demo",
    active: route.path === "/demo",
  },
  {
    label: "Pricing",
    to: "/#pricing",
  },
]);
</script>
