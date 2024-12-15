<template>
  <div class="chat-container">
    <div class="chat-box">
      <div class="chat-header">
        <span class="chat-title">ИИ чат</span>
        <span class="chat-subtitle">Задай свой вопрос, и я постараюсь ответить!</span>
      </div>

      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
          <div class="message-bubble">
            {{ message.text }}
          </div>
        </div>
      </div>

      <div class="chat-input">
        <input
            v-model="userMessage"
            type="text"
            placeholder="Напишите сообщение..."
            @keyup.enter="sendMessage"
        />
        <button @click="sendMessage" class="send-button">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim() === '') return;

      // Добавляем сообщение пользователя
      this.messages.push({ text: this.userMessage, type: 'user' });

      // Симулируем ответ ИИ
      this.simulateAIResponse();

      // Очищаем поле ввода
      this.userMessage = '';
    },
    simulateAIResponse() {
      // Симуляция ответа от ИИ
      const response = this.generateResponse();

      // Добавляем ответ ИИ
      this.messages.push({ text: response, type: 'ai' });
    },
    generateResponse() {
      const responses = [
        "Это интересный вопрос, я подумаю...",
        "Мне нужно больше информации для точного ответа.",
        "Вот что я могу предложить: попробуйте изменить настройки.",
        "Давайте продолжим обсуждение этого вопроса!",
        "К сожалению, я не могу ответить на этот вопрос прямо сейчас.",
      ];

      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.chat-box {
  width: 400px;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #693B26FF;  /* Используем фирменный цвет */
  color: #ffffff;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column; /* Сделаем размещение по вертикали */
  align-items: center; /* Центрируем элементы */
}

.chat-subtitle {
  font-size: 14px;
  font-weight: normal;
  color: white;  /* Текст белого цвета */
  margin-top: 5px;  /* Отступ между заголовком и подзаголовком */
}

.messages {
  padding: 15px;
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  display: flex;
  justify-content: flex-start;
}

.message-bubble {
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 70%;
  word-wrap: break-word;
  font-size: 14px;
}

.user .message-bubble {
  background-color: #693B26FF;  /* Цвет для сообщений пользователя */
  color: white;
  align-self: flex-end;
  border-top-left-radius: 0;
}

.ai .message-bubble {
  background-color: #f1f1f1;
  color: #333;
  align-self: flex-start;  /* Ответы ИИ теперь с другой стороны */
  border-top-right-radius: 0;
}

.chat-input {
  display: flex;
  padding: 15px;
  gap: 10px;
  background-color: #f9f9f9;
  border-top: 1px solid #e0e0e0;
}

.chat-input input {
  flex-grow: 1;
  padding: 10px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
}

.chat-input input:focus {
  border-color: #885e44;  /* Цвет фокуса */
}

.send-button {
  background-color: #885e44;  /* Цвет кнопки */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #693b26;  /* Цвет кнопки при наведении */
}
</style>
