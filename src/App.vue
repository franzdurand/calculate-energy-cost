<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
  },
})
</script>

<style global>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
