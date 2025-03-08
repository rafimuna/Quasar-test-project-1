<template>
  <p class="flex justify-center q-mt-lg text-h4">Practice grid element using SAAS</p>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div v-for="(name, index) in names" :key="index" class="col">
        {{ name }}
      </div>
    </div>

    <div class="row">
      <div v-for="(text, index) in loremTexts" :key="index" class="col">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const names = ref(['Md Rafiul islam', 'Lorem, ipsum', 'Another Name'])
const loremTexts = ref([
  'Lorem ipsum dolor sit amet.',
  'Consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt.',
  'Ut labore et dolore magna aliqua.',
])
</script>

<style scoped lang="sass">
.example-row-equal-width
  .row > div
    padding: 10px 15px
    background: rgba(#999, 0.15)
    border: 1px solid rgba(#999, 0.2)
  .row + .row
    margin-top: 1rem
</style>
