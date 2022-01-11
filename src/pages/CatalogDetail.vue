<template>
  <section class="ml-3 mr-3">
    <div class="flex flex-col text-center w-full mb-10 mt-14">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">fafsfafasdWhatever cardigan tote bag tumblr hexagon brooklyn
        asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep
        jianbing selfies heirloom.</p>
    </div>
      <ul role="list"
          class="space-y-2 sm:grid sm:grid-cols-3 sm:gap-x-3 sm:gap-y-3 sm:space-y-0 lg:grid-cols-3 lg:gap-x-3">
        <li v-for="image in catalog" :key="image.id">
          <a href="#" @click="handleModal(image)">
            <div class="space-y-4 hover:opacity-80" >
              <div class="aspect-w-3 aspect-h-3 ">
                <img class="object-cover shadow-lg " :src="image.imageUrl" alt="" />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>

<modal-image-full :open-modal="open" :close-modal="closeModal" :image="imageSettings"/>
</template>

<script>
import {catalog} from "../utils/catalog";
import { ref } from 'vue'
import ModalImageFull from "../components/modalImageFull.vue";

export default {
  name: "catalog-detail",

    components: {
      ModalImageFull,
  },

  setup() {
    const open = ref(false)

    return {
      catalog,
      open,
      imageSettings: {}
    }
  },

  methods: {
    closeModal() {
      this.open = false
    },

    handleModal(image) {
      this.open = true
      this.imageSettings = { ...image }
    }
  }
}
</script>

<style scoped>

</style>
