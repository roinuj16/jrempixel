<template>
  <Disclosure as="nav" class=" border-b border-gray-200" v-slot="{ open }">
      <div class="w-full">
        <div class="flex  h-16 bg-blue-100 ">
          <div class="flex justify-between w-full  mr-36">
            <div class="flex-shrink-0 flex items-center pl-12">
              <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
            </div>
            <div class="hidden sm:-my-px sm:flex sm:space-x-8 ">
              <router-link v-for="item in navigation" :key="item.name" :to="item.path" :class="[item.current ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class=" flex items-center mr-4 sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <!--      Mobile menu-->
      <DisclosurePanel class="sm:hidden bg-white">
        <div class="pt-2 pb-3 space-y-1 ">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.path" :class="[item.current ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

import { navigation } from "../../utils/navigations";

export default {
  name: "mobile-menu",

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>


