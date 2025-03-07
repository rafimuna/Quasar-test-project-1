<template>
  <q-page class="flex flex-center column">
    <h1>This is Home Page</h1>

    <!-- Material Icons -->
    <div class="q-mt-md">
      <q-icon name="home" size="2rem" class="q-mr-sm" />
      <q-icon name="settings" size="2rem" />
    </div>

    <!-- FontAwesome Icons -->
    <div class="q-mt-md">
      <q-icon name="fab fa-github" size="2rem" class="q-mr-sm" />
      <q-icon name="fas fa-envelope" size="2rem" />
    </div>

    <!-- Debugging: Check if Quasar is loaded -->
    <div class="q-mt-md">
      <p>Quasar version: {{ $q.version }}</p>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()
console.log('Quasar version:', $q.version) // Debugging: Check Quasar version
</script>

<style scoped>
/* Add custom styles if needed */
</style>
