<template>
  <div class="mx-auto mb-3">
    <button
      class="
        font-bold
        text-3xl text-center text-white
        glow
        hover:ring-transparent
      "
      @click="showPortofolio"
    >
      My Projects
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="hidePortofolio">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-1 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-flex
                flex-col
                justify-between
                w-full
                h-screen
                px-3
                py-6
                my-2
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-black bg-opacity-70
                border-2 border-violet
                shadow-2xl
              "
            >
              <div class="flex flex-row justify-center">
                <DialogTitle
                  as="h3"
                  class="text-3xl font-medium leading-6 text-white"
                >
                  Work In Progress
                </DialogTitle>
              </div>
              <div class="flex flex-row justify-center">
                <img
                  class="object-contain md:h-screen60 h-auto w-auto rounded-xl"
                  src="https://c.tenor.com/dRV2Swgf5iUAAAAd/hu-tao-genshin.gif"
                />
              </div>
              <div class="flex flex-row justify-center">
                <p class="text-2xl text-white text-center font-bold">
                  Please Enjoy This Hu Tao GIF For The Time Being
                </p>
              </div>
              <div class="mt-4 flex flex-row justify-center glow">
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    text-2xl
                    font-semibold
                    text-white
                    hover:ring-transparent
                  "
                  @click="hidePortofolio"
                >
                  Close
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  name: "Overlay",
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      hidePortofolio() {
        isOpen.value = false;
      },
      showPortofolio() {
        isOpen.value = true;
      },
    };
  },
};
</script>

<style scoped>
.h-screen {
  margin-top: 12px;
  height: 96vh !important;
}
.w-full {
  width: 98%;
}
</style>
