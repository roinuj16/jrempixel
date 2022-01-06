<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="closeModal">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

          <div class="inline-block align-bottom bg-gray-700 rounded-lg px-1 pt-1 pb-1 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2/5  mt-10" >
            <img class="object-cover shadow-lg" :src="image.imageUrl" :alt="image.label" />
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {Dialog, DialogOverlay, TransitionChild, TransitionRoot} from '@headlessui/vue'

export default {
  name: "modal-image-full",

  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  },

  props: {
    openModal: { type: Boolean, default: false },
    closeModal: { type: Function },
    image: { type: Object, required: true }
  },
}
</script>

<style scoped>

</style>
