<template>
  <div class="profile-container">
    <div class="profile-box">
      <div class="profile-header">
        <span class="profile-title">Профиль сотрудника</span>
      </div>

      <div class="profile-info">
        <div class="profile-item">
          <label for="name">Имя:</label>
          <input v-model="user.name" id="name" type="text" placeholder="Введите ваше имя" />
        </div>
        <div class="profile-item">
          <label for="role">Должность:</label>
          <input v-model="user.role" id="role" type="text" placeholder="Введите вашу должность" />
        </div>
        <div class="profile-item">
          <label for="status">Статус:</label>
          <input v-model="user.status" id="status" type="text" placeholder="Введите ваш статус" />
        </div>
        <div class="profile-item">
          <label for="email">Электронная почта:</label>
          <input v-model="user.email" id="email" type="email" placeholder="Введите ваш email" />
        </div>

        <!-- Градиентная полоска для ментального здоровья -->
        <div class="mental-health">
          <label>Ментальный уровень здоровья:</label>
          <div
              class="health-bar"
              :style="{
              background: `linear-gradient(to right, green ${user.mentalHealth}%, yellow ${user.mentalHealth}%, red ${user.mentalHealth + (100 - user.mentalHealth)}%)`
            }"
          ></div>
        </div>

        <div class="profile-actions">
          <button @click="saveProfile" class="nav-button save-button">Сохранить изменения</button>
        </div>
      </div>

      <!-- Навигационные кнопки с переходами -->
      <div class="profile-navigation">
        <router-link to="/calendar">
          <button class="nav-button">Календарь с выходными</button>
        </router-link>
        <router-link to="/ai-chat">
          <button class="nav-button">ИИ чат</button>
        </router-link>
        <router-link to="/survey">
          <button class="nav-button">Еженедельный опросник</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Иван Иванов',
        role: 'Разработчик',
        status: 'Работает в проекте',
        email: 'ivan.ivanov@example.com',
        mentalHealth: 75, // Начальный уровень здоровья (в процентах)
      },
    };
  },
  methods: {
    saveProfile() {
      // Логика сохранения профиля
      console.log("Профиль сохранен:", this.user);
    }
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.profile-box {
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; /* Чтобы padding не выходил за границы */
}

.profile-header {
  background-color: #693B26FF;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.profile-title {
  font-size: 20px;
}

.profile-info {
  margin-top: 20px;
}

.profile-item {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.profile-item label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #693B26FF;
}

.profile-item input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  box-sizing: border-box; /* Чтобы поле ввода не вылезало за пределы */
}

.profile-item input:focus {
  border-color: #885E44FF;
}

.profile-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.save-button {
  background-color: #693B26FF;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%; /* Делает кнопку такой же ширины, как и другие */
}

.save-button:hover {
  background-color: #885E44FF;
}

.profile-navigation {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.nav-button {
  background-color: #693B26FF;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%; /* Делает кнопку такой же ширины, как и другие */
}

.nav-button:hover {
  background-color: #885E44FF;
}

/* Градиентная полоска для ментального здоровья */
.mental-health {
  margin-top: 20px;
}

.health-bar {
  height: 20px;
  border-radius: 10px;
  background: linear-gradient(to right, green 75%, yellow 75%, red 100%);
  transition: width 0.3s ease;
  width: 100%; /* Теперь полоска на всю ширину */
}
</style>
