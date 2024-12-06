<template>
  <div class="container">
    <div class="header"></div>
    <div class="content">
      <img src="@/assets/Logo.png" alt="Equiday Logo" class="logo">
      <img src="@/assets/Autor.jpeg" alt="Creator Avatar" class="avatar">
      <div class="creator">
        <h3>Creator</h3>
        <p>Shemakin Vladlen</p>
      </div>
      <button class="log-in" @click="navigateToLogin">LOG IN</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      backendMessage: '' // Хранение ответа от сервера
    };
  },
  created() {
    // Отправка GET-запроса к API при создании компонента
    axios.get('http://localhost:3000/api/test') // Убедитесь, что ваш сервер работает
        .then(response => {
          this.backendMessage = response.data.message; // Получение данных из ответа
        })
        .catch(error => {
          console.error('Ошибка связи с сервером:', error); // Обработка ошибок
        });
  },
  methods: {
    navigateToLogin() {
      this.$router.push('/login'); // Переход на страницу логина
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.header {
  margin-top: 50px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.logo {
  width: 200px;
  height: 200px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.creator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.log-in {
  background-color: #f5f5f5;
  color: #333;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}
</style>
