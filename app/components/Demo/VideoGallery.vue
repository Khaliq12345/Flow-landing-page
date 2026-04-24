<template>
  <UPageSection class="bg-flow-neutral-200" id="gallery">
    <div class="flex flex-col md:flex-row justify-between items-end gap-6">
      <div class="max-w-xl">
        <h2
          class="font-[Manrope] text-3xl md:text-4xl font-bold text-flow-blue-500 mb-4 tracking-tight"
        >
          Storytelling Vidéo
        </h2>
        <p class="text-flow-neutral-900 leading-relaxed">
          Des formats courts optimisés pour l'engagement émotionnel et la
          conversion directe sur les réseaux sociaux.
        </p>
      </div>

      <div class="flex gap-3">
        <button
          @click="prevSlide"
          class="text-flow-blue-500 p-4 border border-flow-neutral-700/30 rounded-full cursor-pointer hover:bg-white hover:shadow-lg transition-all active:scale-90"
          aria-label="Précédent"
        >
          <UIcon name="i-lucide-arrow-left" class="w-5 h-5" />
        </button>
        <button
          @click="nextSlide"
          class="text-flow-blue-500 p-4 border border-flow-neutral-700/30 rounded-full cursor-pointer hover:bg-white hover:shadow-lg transition-all active:scale-90"
          aria-label="Suivant"
        >
          <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10 min-h-450px">
      <div
        class="md:col-span-8 relative overflow-hidden rounded-xl bg-black group aspect-video shadow-2xl"
      >
        <Transition name="fade" mode="out-in">
          <div :key="currentIndex" class="w-full h-full">
            <video
              :src="currentSlide.video"
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none"
            />
            <div class="absolute bottom-8 left-8 text-white">
              <p
                class="text-xs font-black uppercase tracking-[0.2em] mb-2 text-flow-amber-500"
              >
                Documentaire de Marque
              </p>
              <h3 class="text-2xl md:text-3xl font-bold font-[Manrope]">
                {{ currentSlide.videoTitle }}
              </h3>
            </div>
          </div>
        </Transition>
      </div>

      <div class="md:col-span-4 h-full">
        <Transition name="fade" mode="out-in">
          <div
            :key="currentIndex"
            class="relative overflow-hidden rounded-xl bg-flow-neutral-500 h-full min-h-300px group shadow-xl"
          >
            <img
              :src="currentSlide.image"
              :alt="currentSlide.imageTitle"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-flow-blue-900/90 to-transparent flex flex-col justify-end p-8"
            >
              <div
                class="bg-flow-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg"
              >
                <UIcon name="i-lucide-trending-up" class="text-white w-6 h-6" />
              </div>
              <h4 class="text-white font-bold text-xl leading-tight">
                {{ currentSlide.imageTitle }}
              </h4>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </UPageSection>
</template>

<script setup>
import { ref, computed } from "vue";

const currentIndex = ref(0);

const slides = [
  {
    video: "/demo/vid1.mp4",
    image: "/demo/images/img1.jpg",
    imageTitle: "Croissance B2B",
  },
  {
    video: "/demo/vid2.mp4",
    videoTitle: "Marketing Digital",
    image: "/demo/images/img2.jpg",
    imageTitle: "Stratégie Commerciale",
  },
  {
    video: "/demo/vid3.mp4",
    videoTitle: "Production Vidéo",
    image: "/demo/images/img3.jpg",
    imageTitle: "Brand Content",
  },
  {
    video: "/demo/vid4.mp4",
    videoTitle: "Réseaux Sociaux",
    image: "/demo/images/img4.jpg",
    imageTitle: "Engagement Client",
  },
  {
    video: "/demo/vid5.mp4",
    videoTitle: "Storytelling",
    image: "/demo/images/img5.jpg",
    imageTitle: "Identité Visuelle",
  },
  {
    video: "/demo/vid6.mp4",
    videoTitle: "Motion Design",
    image: "/demo/images/img6.jpg",
    imageTitle: "Campagne Créative",
  },
  {
    video: "/demo/vid7.mp4",
    videoTitle: "Motion Design",
    image: "/demo/images/img7.jpg",
    imageTitle: "Énergie Visuelle",
  },
  {
    video: "/demo/vid8.mp4",
    videoTitle: "Motion Design",
    image: "/demo/images/img8.jpg",
    imageTitle: "Dynamique Visuelle",
  },
  {
    video: "/demo/vid9.mp4",
    videoTitle: "Motion Design",
    image: "/demo/images/img9.jpg",
    imageTitle: "Impact Graphique",
  },
  {
    video: "/demo/vid10.mp4",
    videoTitle: "Motion Design",
    image: "/demo/images/img10.jpg",
    imageTitle: "Séquence Créative",
  },
];

const currentSlide = computed(() => slides[currentIndex.value]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
