<template>
  <div class="register-page">
    <div class="register-container">
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <div class="input-group">
          <label for="username">Имя пользователя:</label>
          <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Введите имя пользователя"
              required
          />
        </div>
        <div class="input-group">
          <label for="email">Электронная почта:</label>
          <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Введите ваш email"
              required
          />
        </div>
        <div class="input-group">
          <label for="password">Пароль:</label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Введите пароль"
              required
          />
        </div>
        <div class="input-group">
          <label for="confirm-password">Повторите пароль:</label>
          <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Повторите пароль"
              required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async register() {
      this.errorMessage = "";
      this.successMessage = "";

      // Проверка совпадения паролей
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Пароли не совпадают.";
        return;
      }

      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Получаем адрес API из .env
        console.log("API_BASE_URL:", API_BASE_URL);

        // Отправка данных на сервер
        const response = await axios.post(`${API_BASE_URL}/api/register`, {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        this.successMessage = response.data.message || "Регистрация прошла успешно!";
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      } catch (error) {
        console.error("Ошибка регистрации:", error); // Лог ошибок
        this.errorMessage = error.response?.data?.message || "Произошла ошибка при регистрации.";
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 10vh !important;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.register-container {
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #885e44;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #693b26;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>