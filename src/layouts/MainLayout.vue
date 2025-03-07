<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header class="text-h6 text-weight-bold q-pb-md">
          Md Rafiul Islam
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
        <!-- this is added for design purpose -->
        <q-separator spaced />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fab fa-github" />
          </q-item-section>
          <q-item-section>
            <q-item-label>GitHub</q-item-label>
            <q-item-label caption>Visit our repository</q-item-label>
          </q-item-section>
        </q-item>
        <!-- this is added for design purpose -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',

    icon: 'home',
    link: '/',
  },

  {
    title: 'Skill',

    icon: 'chat',
    link: '/SkillPage',
  },
  {
    title: 'Service',

    icon: 'work',
    link: '/ServicePage',
  },
  {
    title: 'Contact',

    icon: 'mail',
    link: '/ContactPage',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
