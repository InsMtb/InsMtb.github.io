<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
const router = useRouter()
function startGame() {
  alert(`Lancement de la partie en cours...`) //FIXME: create the game and redirect to the page
}

function goBack() {
  router.back()
}
</script>

<template>
  <div class="container">
    <DotLottieVue style="width: 100%; height: 100%; position: absolute; z-index: -1;" autoplay loop src="https://lottie.host/3799da0c-de5a-45b9-ac6a-e764e676d9ba/Xp2zacau6z.lottie" />
    <div style="flex-direction: row; display: flex;">
      <h1 class="title" style="color: white;   font-size: 4rem;">Question pour un </h1>
      <h1 class="title" style="color: #ffcc00; font-size: 8rem;"> Champion</h1>
    </div>
    <div class="buttons">
      <h2 class="text">En attente de joueurs</h2>
      <DotLottieVue style="height: 400px; width: 400px;" autoplay loop src="https://lottie.host/e2e80055-2d07-4c6b-a87c-24d2cfce6e27/SYGEnmmYnp.lottie" />
      <button class="btn" @click="startGame">Lancer la partie</button>
      <button class="btn" style="margin-top: auto;" @click="goBack">
        <Icon icon="mdi:arrow-left" width="24" height="24" style="color: white;" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: rgba(0, 157, 255, 0.51);
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.title {
  font-family: 'lobster', cursive;
  -webkit-text-stroke: 2px #fff;
}

.text {
  -webkit-text-stroke: 2px #fff;
  color: white;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #83cdff;
  color: white;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background-color: #ffcc00;
}
</style>
