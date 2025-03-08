<template>
  <q-page class="q-pa-md">
    <div class="text-h4 text-center q-mb-md">My Skills</div>

    <div v-for="skill in skills" :key="skill.name" class="skill-item">
      <div class="skill-name">{{ skill.name }}</div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: skill.percentage + '%' }">
          <div class="progress-label">{{ skill.percentage }}%</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const skills = ref([
  { name: 'HTML', percentage: 0 },
  { name: 'CSS', percentage: 0 },
  { name: 'JavaScript', percentage: 0 },
  { name: 'Vue.js', percentage: 0 },
  { name: 'Node.js', percentage: 0 },
])

// Function to mix colors
const mixColors = (color1, color2, percentage) => {
  const p = percentage / 100
  const r = Math.round(
    parseInt(color1.slice(1, 3), 16) * (1 - p) + parseInt(color2.slice(1, 3), 16) * p,
  )
  const g = Math.round(
    parseInt(color1.slice(3, 5), 16) * (1 - p) + parseInt(color2.slice(3, 5), 16) * p,
  )
  const b = Math.round(
    parseInt(color1.slice(5, 7), 16) * (1 - p) + parseInt(color2.slice(5, 7), 16) * p,
  )
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

onMounted(() => {
  skills.value.forEach((skill, index) => {
    const targetPercentage = [90, 85, 80, 75, 70][index]

    // Animate the progress bar width and color
    gsap.to(skill, {
      percentage: targetPercentage,
      duration: 1.5,
      delay: 0.8 * index,
      ease: 'power2.out',
      onUpdate: () => {
        // Update the progress bar color dynamically
        const progressFill = document.querySelectorAll('.progress-fill')[index]
        const startColor = '#1976d2' // Quasar primary color
        const endColor = '#4caf50' // Green color for mixing
        const mixedColor = mixColors(startColor, endColor, skill.percentage)
        progressFill.style.backgroundColor = mixedColor
      },
    })
  })
})
</script>

<style scoped lang="sass">
.skill-item
  margin-bottom: 20px

.skill-name
  font-weight: bold
  margin-bottom: 5px

.progress-bar
  width: 100%
  height: 20px
  background-color: #f0f0f0
  border-radius: 10px
  overflow: hidden
  position: relative

.progress-fill
  height: 100%
  background-color: #1976d2 // Quasar primary color
  border-radius: 10px
  display: flex
  align-items: center
  justify-content: flex-end
  position: relative
  transition: width 1s ease-in-out // Added smoother transition

.progress-label
  color: white
  padding-right: 10px
  font-size: 14px
  position: relative
  z-index: 1
</style>
