<template>
  <UPageSection class="bg-flow-neutral-200">
    <div class="flex flex-col md:flex-row justify-between items-end gap-4">
      <div class="max-w-xl">
        <h2
          class="font-[Manrope] text-3xl font-bold text-flow-blue-500 mb-4 tracking-tight"
        >
          Storytelling Vidéo
        </h2>
        <p class="text-flow-neutral-900">
          Des formats courts optimisés pour l'engagement émotionnel et la
          conversion directe sur les réseaux sociaux.
        </p>
      </div>
      <div class="flex gap-2">
        <button
          @click="prevSlide"
          class="text-flow-blue-500 p-3 border border-flow-neutral-700/30 rounded-full cursor-pointer hover:bg-white transition-colors"
        >
          <UIcon name="i-lucide-arrow-left" />
        </button>
        <button
          @click="nextSlide"
          class="text-flow-blue-500 p-3 border border-flow-neutral-700/30 rounded-full cursor-pointer hover:bg-white transition-colors"
        >
          <UIcon name="i-lucide-arrow-right" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-stretch mt-8">
      <!-- Main Video -->
      <div
        class="md:col-span-8 relative overflow-hidden rounded-[0.5rem] bg-flow-neutral-500 aspect-video group"
      >
        <video
          :src="currentSlide.video"
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute bottom-6 left-6 text-white">
          <p
            class="text-xs font-bold uppercase tracking-widest mb-1 opacity-80"
          >
            Documentaire de Marque
          </p>
          <h3 class="text-2xl font-bold font-[Manrope]">
            {{ currentSlide.videoTitle }}
          </h3>
        </div>
      </div>

      <!-- Side Image -->
      <div class="md:col-span-4">
        <div
          class="relative overflow-hidden rounded-[0.5rem] bg-flow-neutral-500 h-full min-h-75 md:min-h-0 group"
        >
          <img
            :src="currentSlide.image"
            :alt="currentSlide.imageTitle"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-flow-blue-500/80 to-transparent flex flex-col justify-end p-6"
          >
            <UIcon
              name="i-lucide-trending-up"
              class="text-flow-amber-500 mb-2 w-8 h-8"
            />
            <h4 class="text-white font-bold text-lg">{{ currentSlide.imageTitle }}</h4>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup>
const currentIndex = ref(0)

// Tes 6 paires vidéo + image
const slides = [
  {
    video: '/demo/vid1.mp4',
    videoTitle: "L'Innovation à Abidjan",
    image: '/demo/images/img1.jpg',
    imageTitle: 'Croissance B2B'
  },
  {
    video: '/demo/vid2.mp4',
    videoTitle: 'Marketing Digital',
    image: '/demo/images/img2.jpg',
    imageTitle: 'Stratégie Commercial'
  },
  {
    video: '/demo/vid3.mp4',
    videoTitle: 'Production Vidéo',
    image: '/demo/images/img3.jpg',
    imageTitle: 'Brand Content'
  },
  {
    video: '/demo/vid4.mp4',
    videoTitle: 'Réseaux Sociaux',
    image: '/demo/images/img4.jpg',
    imageTitle: 'Engagement Client'
  },
  {
    video: '/demo/vid5.mp4',
    videoTitle: 'Storytelling',
    image: '/demo/images/img5.jpg',
    imageTitle: 'Visual Identity'
  },
  {
    video: '/demo/vid6.mp4',
    videoTitle: 'Motion Design',
    image: '/demo/images/img6.jpg',
    imageTitle: 'Creative Campaign'
  }
]

const currentSlide = computed(() => slides[currentIndex.value])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
</script>