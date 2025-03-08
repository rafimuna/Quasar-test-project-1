<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header-gradient">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-white"> {{ userName }} </q-toolbar-title>
        <div class="q-gutter-xs">
          <q-btn color="accent" label="Login" icon="login" @click="navigateToLogin" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" width="200" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header class="text-h6 text-weight-bold q-pb-md">
          <div class="flex justify-center">
            <q-avatar rounded color="primary" text-color="white" class="q-mr-lg">Rafi</q-avatar>
          </div>
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />

        <q-separator spaced />
        <q-item clickable v-ripple @click="openGithub">
          <q-item-section avatar>
            <q-icon name="fab fa-github" />
          </q-item-section>
          <q-item-section>
            <q-item-label>GitHub</q-item-label>
            <q-item-label caption>Visit our repository</q-item-label>
            <q-tooltip>Open GitHub repository in a new tab</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'

const linksList = [
  { title: 'Home', icon: 'home', link: '/AboutPage' },
  { title: 'Skill', icon: 'chat', link: '/SkillPage' },
  { title: 'Service', icon: 'work', link: '/ServicePage' },
  { title: 'Contact', icon: 'mail', link: '/ContactPage' },
]

const leftDrawerOpen = ref(false)
defineProps({
  userName: {
    type: String,
    default: 'Guest',
  },
})
const router = useRouter()

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function openGithub() {
  window.open('https://github.com/rafimuna/Quasar-test-project-1.git', '_blank')
}

function navigateToLogin() {
  router.push('/login')
}
</script>

<style scoped>
/* Gradient Background for Header */
</style>
