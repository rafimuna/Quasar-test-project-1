<template>
  <q-item
    :to="NavLinks ? link : undefined"
    :href="NavLinks ? undefined : link"
    :tag="NavLinks ? 'router-link' : 'a'"
    :aria-label="props.title"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    default: '/',
  },

  icon: {
    type: String,
    default: '',
  },
})

const NavLinks = computed(() => props.link.startsWith('/'))
</script>
