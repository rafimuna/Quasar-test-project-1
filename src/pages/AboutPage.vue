<template>
  <q-page class="q-pa-md">
    <div v-if="loading">Loading...</div>
    <div v-if="joke">
      <p>Setup: {{ joke.setup }}</p>
      <p>Punchline: {{ joke.punchline }}</p>
    </div>
    <div v-if="error">Error fetching joke.</div>
    <q-btn label="Get Joke" @click="fetchJoke" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import api from 'src/services/api' // Import our API service

const joke = ref(null)
const loading = ref(false)
const error = ref(false)

const fetchJoke = async () => {
  loading.value = true
  error.value = false
  joke.value = null

  const result = await api.getRandomJoke()

  if (result) {
    joke.value = result
  } else {
    error.value = true
  }

  loading.value = false
}
</script>
