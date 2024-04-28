<script setup lang="ts">
import { ref } from 'vue'

import { SlideNumber } from 'vue-slide-number'

const number = ref(100.5)

function changeNumber(val: number) {
  number.value += val
}
</script>

<template>
  <main w-screen font-mono h-dvh grid="~ place-items-center" text="2xl center gray-700 dark:gray-200">
    <div aspect-ratio-square min-w-3xl flex="~ items-center gap-2">
      <SlideNumber flex-1 :number />

      <aside text-base flex="~ col gap-5">
        <button type="button" class="btn" @click="changeNumber(1)">
          +1
        </button>
        <button type="button" class="btn" @click="changeNumber(15)">
          +15
        </button>
        <button type="button" class="btn" @click="changeNumber(105)">
          +105
        </button>
        <button type="button" class="btn" @click="changeNumber(1005)">
          +1005
        </button>
        <button type="button" class="btn" @click="changeNumber(-1)">
          -1
        </button>
        <button type="button" class="btn" @click="changeNumber(-15)">
          -15
        </button>
        <button type="button" class="btn" @click="changeNumber(-105)">
          -105
        </button>
        <button type="button" class="btn" @click="changeNumber(-1005)">
          -1005
        </button>

        <input
          id="input"
          v-model="number"
          type="number"
          p="x-4 y-2"
          w="250px"
          text="center"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
        >
      </aside>
    </div>
  </main>
</template>
