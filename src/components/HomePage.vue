<template>
  <div class="home-page">
    <header>
      <img src="@/assets/Logo.png" alt="EquiDay Logo" class="logo" />
    </header>
    <h1>Добро пожаловать в EquiDay</h1>
    <p>Начните отслеживать своё психологическое состояние уже сейчас!</p>
    <button @click="navigateToProfile">Перейти в профиль</button>
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
  }
};
</script>


<style>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.logo {
  max-width: 150px; /* Устанавливает максимальный размер логотипа */
  height: auto;
}

.home-page {
  text-align: center;
  margin-top: 50px;
  background-image: url('@/assets/Fon.png'); /* Путь к изображению */
  background-size: cover; /* Покрытие всего экрана */
  background-position: center; /* Центровка */
  height: 100vh; /* Высота экрана */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white; /* Цвет текста для контраста */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Тень текста */
}
</style>