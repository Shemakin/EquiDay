<template>
  <div class="container">
    <div class="header"></div>
    <div class="content">
      <img src="@/assets/Logo.png" alt="Equiday Logo" class="logo">
      <div class="creator">
        <img src="@/assets/Autor.jpeg" alt="Creator Avatar" class="avatar">
        <div class="creator-info">
          <h3>Creator:</h3>
          <p>Vladlen Milize</p>
        </div>
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
  margin-bottom: 50px;
}

.creator {
  display: flex;
  align-items: center; /* Горизонтальное выравнивание */
  gap: 15px; /* Расстояние между аватаром и текстом */
}

.avatar {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

.creator-info {
  display: flex;
  flex-direction: column; /* Вертикальная структура текста */
  align-items: flex-start; /* Выровнять текст по левому краю */
}

.creator-info h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.creator-info p {
  margin: 5px 0 0;
  font-size: 16px;
  color: #555555;
}

.log-in {
  margin-top: 50px;
  background-color: #885e44;
  color: white;
  padding: 15px 60px;
  border: 1px solid #000; /* Черная рамка */
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.log-in:hover {
  background-color: #693b26;
}
</style>
