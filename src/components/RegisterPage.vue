<template>
  <div class="register-page">
    <div class="register-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="input-group">
          <label for="username">Username:</label>
          <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
          />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
          />
        </div>
        <div class="input-group">
          <label for="confirm-password">Confirm Password:</label>
          <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              required
          />
        </div>
        <button type="submit">Register</button>
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
      password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    register() {
      this.errorMessage = "";
      this.successMessage = "";

      // Проверка совпадения паролей
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }

      // Отправка данных на сервер
      axios
          .post("http://localhost:3000/api/register", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.successMessage = "Registration successful!";
            this.username = "";
            this.password = "";
            this.confirmPassword = "";
          })
          .catch((error) => {
            this.errorMessage = error.response?.data?.message || "An error occurred.";
          });
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
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
