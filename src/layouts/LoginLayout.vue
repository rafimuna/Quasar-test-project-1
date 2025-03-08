<template>
  <q-layout view="lHh Lpr lFf">
    \
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="my-login-card">
          <q-card-section>
            <div class="text-h6 text-center">{{ loginTitle }}</div>
            <q-form class="q-gutter-md">
              <q-input filled label="Username" v-model="username" />
              <q-input filled label="Password" type="password" v-model="password" />
              <q-btn label="Login" color="primary" @click="performLogin" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  loginTitle: {
    type: String,
    default: 'login',
  },
})
const performLogin = () => {
  router.push('/')
}
</script>
