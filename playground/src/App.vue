<script setup lang="ts">
import { ref } from 'vue'

import { AnimationsNumber } from 'animations-number'

const number = ref(100)

function changeNumber(val: number) {
  number.value += val
}
</script>

<template>
  <main font-mono w-screen h-dvh grid="~ place-items-center" text="2xl center gray-700 dark:gray-200">
    <div min-w-2xl aspect-ratio-square flex="~ items-center gap-2">
      <AnimationsNumber flex-1 :number />

      <aside text-base flex="~ col gap-5">
        <button type="button" class="btn" @click="changeNumber(1)">
          +1
        </button>
        <button type="button" class="btn" @click="changeNumber(10)">
          +10
        </button>
        <button type="button" class="btn" @click="changeNumber(100)">
          +100
        </button>
        <button type="button" class="btn" @click="changeNumber(-1)">
          -1
        </button>
        <button type="button" class="btn" @click="changeNumber(-10)">
          -10
        </button>
        <button type="button" class="btn" @click="changeNumber(-100)">
          -100
        </button>
      </aside>
    </div>
  </main>
</template>
