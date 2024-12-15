<template>
  <div class="survey-page">
    <div class="survey-container">
      <h2>Еженедельный психологический опрос</h2>
      <p class="description">Пожалуйста, ответьте на несколько вопросов, чтобы мы могли оценить ваше состояние и предложить рекомендации.</p>

      <form @submit.prevent="submitSurvey">
        <!-- Вопрос 1 -->
        <div class="question">
          <label>Как вы оцениваете уровень стресса на этой неделе?</label>
          <div class="button-row">
            <button type="button"
                    :class="{ active: surveyAnswers.stressLevel === 'very-low' }"
                    @click="surveyAnswers.stressLevel = 'very-low'">Очень низкий</button>
            <button type="button"
                    :class="{ active: surveyAnswers.stressLevel === 'low' }"
                    @click="surveyAnswers.stressLevel = 'low'">Низкий</button>
            <button type="button"
                    :class="{ active: surveyAnswers.stressLevel === 'medium' }"
                    @click="surveyAnswers.stressLevel = 'medium'">Средний</button>
            <button type="button"
                    :class="{ active: surveyAnswers.stressLevel === 'high' }"
                    @click="surveyAnswers.stressLevel = 'high'">Высокий</button>
          </div>
        </div>

        <!-- Вопрос 2 -->
        <div class="question">
          <label>Как вы оцениваете своё настроение?</label>
          <div class="button-group">
            <button v-for="i in 10" :key="i"
                    type="button"
                    :class="{ active: surveyAnswers.mood === i }"
                    @click="surveyAnswers.mood = i">{{ i }}</button>
          </div>
        </div>

        <!-- Вопрос 3 -->
        <div class="question">
          <label>Сколько часов в сутки вы спали на этой неделе?</label>
          <div class="button-row">
            <button type="button"
                    :class="{ active: surveyAnswers.sleepHours === 'less-4' }"
                    @click="surveyAnswers.sleepHours = 'less-4'">Менее 4 часов</button>
            <button type="button"
                    :class="{ active: surveyAnswers.sleepHours === '4-6' }"
                    @click="surveyAnswers.sleepHours = '4-6'">4-6 часов</button>
            <button type="button"
                    :class="{ active: surveyAnswers.sleepHours === '7-8' }"
                    @click="surveyAnswers.sleepHours = '7-8'">7-8 часов</button>
            <button type="button"
                    :class="{ active: surveyAnswers.sleepHours === 'more-8' }"
                    @click="surveyAnswers.sleepHours = 'more-8'">Более 8 часов</button>
          </div>
        </div>

        <!-- Вопрос 4 -->
        <div class="question">
          <label>Испытываете ли вы физическую усталость?</label>
          <div class="button-pair">
            <button type="button"
                    :class="{ active: surveyAnswers.physicalFatigue === 'yes' }"
                    @click="surveyAnswers.physicalFatigue = 'yes'">Да</button>
            <button type="button"
                    :class="{ active: surveyAnswers.physicalFatigue === 'no' }"
                    @click="surveyAnswers.physicalFatigue = 'no'">Нет</button>
          </div>
        </div>

        <!-- Новый Вопрос 5 -->
        <div class="question">
          <label>Чувствуете ли вы эмоциональное выгорание?</label>
          <div class="button-pair">
            <button type="button"
                    :class="{ active: surveyAnswers.burnout === 'yes' }"
                    @click="surveyAnswers.burnout = 'yes'">Да</button>
            <button type="button"
                    :class="{ active: surveyAnswers.burnout === 'no' }"
                    @click="surveyAnswers.burnout = 'no'">Нет</button>
          </div>
        </div>

        <!-- Новый Вопрос 6 -->
        <div class="question">
          <label>Достаточно ли времени вы уделяете своим хобби?</label>
          <div class="button-pair">
            <button type="button"
                    :class="{ active: surveyAnswers.hobbyTime === 'yes' }"
                    @click="surveyAnswers.hobbyTime = 'yes'">Да</button>
            <button type="button"
                    :class="{ active: surveyAnswers.hobbyTime === 'no' }"
                    @click="surveyAnswers.hobbyTime = 'no'">Нет</button>
          </div>
        </div>

        <!-- Новый Вопрос 7 -->
        <div class="question">
          <label>Есть ли у вас сложности в общении с коллегами?</label>
          <div class="button-pair">
            <button type="button"
                    :class="{ active: surveyAnswers.colleagueIssues === 'yes' }"
                    @click="surveyAnswers.colleagueIssues = 'yes'">Да</button>
            <button type="button"
                    :class="{ active: surveyAnswers.colleagueIssues === 'no' }"
                    @click="surveyAnswers.colleagueIssues = 'no'">Нет</button>
          </div>
        </div>

        <!-- Новый Вопрос 8 -->
        <div class="question">
          <label>Испытываете ли вы проблемы с концентрацией?</label>
          <div class="button-pair">
            <button type="button"
                    :class="{ active: surveyAnswers.concentrationIssues === 'yes' }"
                    @click="surveyAnswers.concentrationIssues = 'yes'">Да</button>
            <button type="button"
                    :class="{ active: surveyAnswers.concentrationIssues === 'no' }"
                    @click="surveyAnswers.concentrationIssues = 'no'">Нет</button>
          </div>
        </div>

        <!-- Вопрос 9 -->
        <div class="question">
          <label for="comments">Есть ли что-то, что вы хотели бы добавить?</label>
          <textarea id="comments" v-model="surveyAnswers.comments" placeholder="Ваши комментарии..."></textarea>
        </div>

        <button type="submit" class="submit-button">Отправить</button>
      </form>

      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WeeklySurvey",
  data() {
    return {
      surveyAnswers: {
        stressLevel: "",
        mood: null,
        sleepHours: "",
        physicalFatigue: "",
        burnout: "",
        hobbyTime: "",
        colleagueIssues: "",
        concentrationIssues: "",
        comments: "",
      },
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async submitSurvey() {
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.post(`${API_BASE_URL}/api/survey`, this.surveyAnswers);

        this.successMessage = response.data.message || "Ваши ответы успешно отправлены!";
        this.surveyAnswers = {
          stressLevel: "",
          mood: null,
          sleepHours: "",
          physicalFatigue: "",
          burnout: "",
          hobbyTime: "",
          colleagueIssues: "",
          concentrationIssues: "",
          comments: "",
        };
      } catch (error) {
        console.error("Ошибка отправки опроса:", error);
        this.errorMessage = error.response?.data?.message || "Произошла ошибка при отправке опроса.";
      }
    },
  },
};
</script>

<style scoped>
.survey-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.survey-container {
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h2 {
  text-align: center;
  margin-bottom: 10px;
}

.description {
  text-align: center;
  margin-bottom: 20px;
  color: #666;
}

.question {
  margin-bottom: 20px;
}

.button-row, .button-pair, .button-group {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.button-row button, .button-pair button, .button-group button {
  flex: 1;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: 0.2s ease-in-out;
}

.button-row button:hover, .button-pair button:hover, .button-group button:hover {
  background-color: #007bff;
  color: #fff;
}

.button-row button.active, .button-pair button.active, .button-group button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #0056b3;
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #885e44;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #693b26;
}

.success {
  color: green;
  text-align: center;
  margin-top: 20px;
}

.error {
  color: red;
  text-align: center;
  margin-top: 20px;
}
</style>
