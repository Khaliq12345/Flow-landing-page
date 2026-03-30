<template>
  <header
    class="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f9f9fc]/70 shadow-sm"
  >
    <UContainer class="flex justify-between items-center py-4">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-2xl font-bold tracking-tighter text-[#002f55] font-[Manrope]"
      >
        Flow
      </NuxtLink>

      <!-- Navigation Desktop -->
      <nav class="hidden md:flex gap-8 items-center">
        <NuxtLink
          to="/"
          :class="[
            'font-[Manrope] text-sm font-semibold tracking-tight transition-all duration-300',
            isActive('/')
              ? 'text-[#29695b] border-b-2 border-[#29695b]'
              : 'text-[#3f4945] hover:text-[#002f55]',
          ]"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/demo"
          :class="[
            'font-[Manrope] text-sm font-semibold tracking-tight transition-all duration-300',
            isActive('/demo')
              ? 'text-[#29695b] border-b-2 border-[#29695b]'
              : 'text-[#3f4945] hover:text-[#002f55]',
          ]"
        >
          Demo
        </NuxtLink>
        <NuxtLink
          to="/#pricing"
          class="font-[Manrope] text-sm font-semibold tracking-tight text-[#3f4945] hover:text-[#002f55] transition-all duration-300"
        >
          Pricing
        </NuxtLink>
      </nav>
      <div></div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const isActive = (path: string) => route.path === path;
</script>
