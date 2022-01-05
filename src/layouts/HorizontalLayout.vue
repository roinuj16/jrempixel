<template>
  <div class="min-h-full">
    <div class="mt-0 fixed w-full z-20 top-0">
      <mobile-menu />
    </div>

      <main>
        <div class="w-full mt-10 pt-10 mb-5">
          <router-view/>
        </div>
      </main>
  </div>
</template>

<script>
import mobileMenu from "../components/horizontalLayout/horizontalMenu.vue";
export default {
  name: 'horizontal-layout',

  components: { mobileMenu }

}
</script>


