<template>
  <horizontal-layout />
</template>
<script>
import HorizontalLayout from "./layouts/HorizontalLayout.vue";


export default {
  components: {HorizontalLayout },

  data:() => ({
    layout: 'horizontal'
  })

}
</script>

