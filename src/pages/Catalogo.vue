<template>
  <div class="bg-white w-screen">
    <section class="ml-3 mr-3">
      <ul role="list"
          class="space-y-2 sm:grid sm:grid-cols-3 sm:gap-x-3 sm:gap-y-3 sm:space-y-0 lg:grid-cols-3 lg:gap-x-3">
        <li v-for="image in catalog" :key="image.id">
          <router-link to="/catalog-detail">
            <div class="space-y-4  hover:-translate-y-1 duration-300 hover:bg-black">
              <div class="aspect-w-3 aspect-h-3">
                <div class="z-10 space-y-4 xl:flex xl:items-end xl:justify-center group hover:bg-black hover:bg-opacity-50">
                  <div class="absolute text-white md:text-gray-300 bg-gray-800 bg-opacity-40 w-full p-4 bottom-2
                  flex flex-col items-center justify-center group-hover:bg-opacity-50 group-hover:text-white group-hover:bg-black
                  transition ease-in-out hover:-translate-y-1 duration-300">
                    <p class="text-xl font-normal tracking-wide">
                      {{ image.local }}
                    </p>
                    <p class=" text-md italic font-light ">
                       {{ image.label }}
                    </p>
                  </div>
                </div>
                <img class="object-cover shadow-lg" :src="image.imageUrl" alt="" />
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {catalog} from "../utils/catalog";


export default {
  name: 'catalogo',
  setup() {
    return {
      catalog,
    }
  },
}
</script>


