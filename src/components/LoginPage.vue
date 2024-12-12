<template>
  <div class="login-page">
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <h2>Вход в EquiDay</h2>
        <p class="subtitle">Отслеживайте своё психологическое состояние и планируйте отдых!</p>
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="email">Email:</label>
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
                placeholder="Введите ваш пароль"
                required
            />
          </div>
          <button type="submit" class="login-button">Войти</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="additional-links">
          <p>Ещё нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
          <p><a href="/reset-password">Забыли пароль?</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showModal: true,
      email: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async login() {
      this.errorMessage = null;
      try {
        const response = await axios.post("http://localhost:3000/api/users/login", {
          email: this.email,
          password: this.password,
        });

        // Успешный вход
        localStorage.setItem("token", response.data.token); // Сохранение токена
        this.$router.push("/dashboard");
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Ошибка входа. Попробуйте снова.";
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 10vh;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #885e44;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  color: #693b26;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #885e44;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #885e44;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #693b26;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.additional-links {
  margin-top: 20px;
}

.additional-links a {
  color: #3399ff;
  text-decoration: none;
}

.additional-links a:hover {
  text-decoration: underline;
}
</style>
