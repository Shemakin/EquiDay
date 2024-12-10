<template>
  <div class="user-profile">
    <div class="profile-header">
      <img :src="user.avatar || defaultAvatar" alt="User Avatar" class="avatar" />
      <h2>{{ user.name }}</h2>
      <p class="email">{{ user.email }}</p>
    </div>
    <div class="profile-content">
      <h3>Информация</h3>
      <ul>
        <li><strong>Имя:</strong> {{ user.name }}</li>
        <li><strong>Email:</strong> {{ user.email }}</li>
        <li><strong>Телефон:</strong> {{ user.phone || "Не указан" }}</li>
      </ul>
      <button @click="editProfile" class="edit-button">Редактировать профиль</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Владлен Шемакин",
        email: "example@example.com",
        phone: "123-456-7890",
        avatar: null, // Путь к аватару, если есть
      },
      defaultAvatar: "@/assets/default-avatar.png",
    };
  },
  methods: {
    editProfile() {
      // Логика для редактирования профиля
      this.$router.push("/edit-profile");
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #885e44;
}

h2 {
  margin: 10px 0;
  color: #693b26;
}

.email {
  font-size: 14px;
  color: #666;
}

.profile-content {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.edit-button {
  margin-top: 20px;
  padding: 10px;
  background-color: #885e44;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.edit-button:hover {
  background-color: #693b26;
}
</style>
