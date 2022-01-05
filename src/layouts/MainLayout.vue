<template>
  <div>
    <mobile-menu :sidebar-open="sidebarOpen" :handle-sidebar="handleMobileMenu"/>

    <!-- Static sidebar for desktop -->
    <desktop-menu />

    <div class="md:pl-28 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="handleMobileMenu()">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <main class="flex-1">
          <div class="mx-auto">
            <!-- Replace with your content -->
              <div class="border-2 border-dashed border-gray-200 rounded-lg h-screen md:ml-20 p-1">
                <router-view/>
              </div>
            <!-- /End replace -->
          </div>
      </main>
    </div>
  </div>
</template>

<script>

import {
  MenuAlt2Icon,
} from '@heroicons/vue/outline'

import MobileMenu from "../components/sidebarLayout/MobileMenu.vue";
import DesktopMenu from '../components/sidebarLayout/DesktopMenu.vue'


export default {
  components: {
    MenuAlt2Icon,
    MobileMenu,
    DesktopMenu
  },
   data: () => ({
      sidebarOpen: false,
  }),

  methods: {
    handleMobileMenu(){
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>
