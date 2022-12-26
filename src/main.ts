import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import router from "./router";
import { createPinia } from "pinia";

const firebaseConfig = {
  apiKey: "AIzaSyBo3lRn6iMYsVk4r-VY6f0XLMLIeojOmGA",
  authDomain: "meu-projeto-c9001.firebaseapp.com",
  projectId: "meu-projeto-c9001",
  storageBucket: "meu-projeto-c9001.appspot.com",
  messagingSenderId: "938322050860",
  appId: "1:938322050860:web:6139f5cdf51d78552db689"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
