<template>
  <q-page class="q-pa-md">
    <div class="text-center text-h4 contact-title">Contact Us</div>
    <q-card class="my-card contact-card">
      <q-card-section>
        <q-form class="q-gutter-md contact-form" @submit="onSubmit">
          <q-input
            filled
            label="Enter Your name"
            v-model="formData.name"
            :rules="[(val) => (val && val.length > 0) || 'Please enter your name']"
          />
          <q-input
            filled
            label="Enter Your email"
            v-model="formData.email"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your email',
              (val) =>
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
                'Please enter a valid email',
            ]"
          />
          <q-input filled label="Subject" v-model="formData.subject" />
          <q-input
            filled
            v-model="formData.message"
            label="Message *"
            type="textarea"
            :rules="[(val) => (val && val.length > 0) || 'Please enter your message']"
          />
          <div>
            <q-btn
              label="send message"
              type="submit"
              color="primary"
              class="send-button"
              :disable="isSubmitting"
              aria-label="Send contact form message"
            >
              <q-spinner v-if="isSubmitting" size="sm" class="q-mr-sm" />
            </q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <div class="q-mt-lg text-center contact-info">
      <p class="text-subtitle1">Reach us at:</p>
      <p>Email: rafimuna77@gmail.com</p>
      <p>Phone: 017123886921</p>
      <p>Address: Dhaka, Narsingdi</p>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const formData = ref({
  name: '',
  email: '',
  message: '',
  subject: '',
})
const isSubmitting = ref(false)

const onSubmit = async () => {
  isSubmitting.value = true
  console.log('Form submitted :', formData.value)
  //Here you would add your backend submission.
  await new Promise((resolve) => setTimeout(resolve, 1000)) //Simulate backend process.
  isSubmitting.value = false
  formData.value = {
    name: '',
    email: '',
    message: '',
    subject: '',
  }
}

onMounted(() => {
  gsap.from('.contact-title', { opacity: 0, y: -50, duration: 1 })
  gsap.from('.contact-card', { opacity: 0, y: 50, duration: 1, delay: 0.2 })
  gsap.from('.contact-info', { opacity: 0, y: 50, duration: 1, delay: 0.4 })
  gsap.from('.contact-form', { opacity: 0, duration: 1, delay: 0.6 })
  gsap.from('.send-button', { opacity: 0, scale: 0.5, duration: 0.8, delay: 0.8 })
})
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
