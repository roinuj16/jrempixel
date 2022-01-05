<template>
  <main-layout v-if="layout==='main'"/>
  <horizontal-layout v-else/>
</template>
<script>
import MainLayout from './layouts/MainLayout.vue'
import HorizontalLayout from "./layouts/HorizontalLayout.vue";


export default {
  components: {HorizontalLayout, MainLayout },

  data:() => ({
    //layout: 'horizontal'
    layout: 'horizontal'
  })

}
</script>

