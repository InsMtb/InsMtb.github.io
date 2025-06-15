<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { useRouter } from 'vue-router'
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const router = useRouter()
const gameCode = ref('')

function joinGame() {
  if (!gameCode.value) {
    alert("Ce code de partie est invalide."); //FIXME: check if the code is valid
    return;
  }
  alert(`Redirection vers la partie ${gameCode.value}...`) //FIXME: go to the page of the game
}

function goBack() {
  router.back()
}
</script>

<template>
  <div class="container">
    <DotLottieVue style="width: 100%; height: 100%; position: absolute; z-index: -1;" autoplay loop src="https://lottie.host/3799da0c-de5a-45b9-ac6a-e764e676d9ba/Xp2zacau6z.lottie" />
    <div style="flex-direction: row; display: flex">
      <h1 class="title" style="color: white;   font-size: 4rem;">Question pour un </h1>
      <h1 class="title" style="color: #ffcc00; font-size: 8rem;"> Champion</h1>
    </div>
    <div class="buttons">
      <DotLottieVue style="height: 400px; width: 400px; " :speed="0.5" autoplay loop src="https://lottie.host/bb04328f-d448-48d2-a0b5-51cd5450e580/WSEqmlpa4u.lottie" />
      <input class="input" v-model="gameCode" placeholder="Entrez le code de la partie" />
      <button class="btn" @click="joinGame">Rejoindre la partie</button>
      <button class="btn" style="margin-top: auto;" @click="goBack">
        <Icon icon="mdi:arrow-left" width="24" height="24" style="color: white;" />
      </button>    </div>
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

.input {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.6rem;
  background-color: #8acfff;
  color: white;
  width: 30rem;
}

.title {
  font-family: 'lobster', cursive;
  -webkit-text-stroke: 2px #fff;
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
  background-color: #8acfff;
  color: white;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background-color: #ffcc00;
}

</style>