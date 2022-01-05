<template>
    <div class="hidden md:flex md:w-48 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
        <div class="flex items-center flex-shrink-0 mx-auto ">
          <img class="h-8 w-auto" src="../../assets/images/camera-clipart-pdv.svg" alt="Workflow" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
           <nav class="flex-1 px-2 pb-4 space-y-1">
            <nav-options />
           </nav>
        </div>
      </div>
    </div>
</template>

<script>
import NavOptions from "./NavOptions.vue";

export default {
  name: "desktop-menu",

  components: { NavOptions }
}
</script>

