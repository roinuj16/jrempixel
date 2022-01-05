<template>
  <router-link v-for="item in navigation" :key="item.name"
    :to="item.path"
    :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
    <component
        :is="item.icon"
        :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
         aria-hidden="true"
    />
    {{ item.name }}
  </router-link>
  <router-link to="/" />
</template>

<script>
import { navigation } from "../../utils/navigations";

export default {
  name: "nav-options",

  setup() {
    return {
      navigation,
    }
  },
}
</script>


