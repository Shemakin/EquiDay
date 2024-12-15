<template>
  <div class="calendar-wrapper">
    <div class="background"></div>
    <div class="calendar-container">
      <h1>Выберите дни для выходных</h1>
      <vue-cal
          v-model="selectedDates"
          :events="events"
          :week-start="1"
          :disabled-days="disabledDays"
          :style="{ height: '500px' }"
          @day-click="handleDayClick"
      ></vue-cal>
      <p v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import moment from 'moment';

export default {
  name: 'HolidayCalendar',
  components: {
    VueCal
  },
  data() {
    return {
      selectedDates: [],
      events: [],
      disabledDays: [],
      message: '',
    };
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      const userEvents = [
        { start: '2024-12-10', end: '2024-12-10' },
        { start: '2024-12-11', end: '2024-12-11' }
      ];
      this.events = userEvents.map(event => ({
        start: event.start,
        end: event.end,
        name: 'Выходной'
      }));
    },
    handleDayClick(day) {
      const weekStart = moment(day).startOf('week');
      const weekEnd = moment(weekStart).endOf('week');

      const weekSelectedDates = this.selectedDates.filter(date =>
          moment(date).isBetween(weekStart, weekEnd, null, '[]')
      );

      if (weekSelectedDates.length >= 2 && !this.selectedDates.includes(day)) {
        this.message = 'Вы можете выбрать не более 2 дней выходных в неделю.';
        return;
      }

      if (!this.selectedDates.includes(day)) {
        this.selectedDates.push(day);
        this.events.push({
          start: day,
          end: day,
          name: 'Выходной'
        });
      } else {
        this.selectedDates = this.selectedDates.filter(date => date !== day);
        this.events = this.events.filter(event => event.start !== day);
      }

      this.updateDisabledDays();
      this.message = '';
    },
    updateDisabledDays() {
      const allDisabledDays = [];
      for (let i = 0; i < 7; i++) {
        const weekStart = moment().startOf('week').add(i, 'days');
        const weekEnd = moment(weekStart).endOf('week');
        const weekSelectedDates = this.selectedDates.filter(date =>
            moment(date).isBetween(weekStart, weekEnd, null, '[]')
        );

        if (weekSelectedDates.length >= 2) {
          allDisabledDays.push(...weekSelectedDates);
        }
      }
      this.disabledDays = allDisabledDays;
    }
  }
};
</script>

<style scoped>
.calendar-wrapper {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.calendar-container {
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.vuecal .cell.selected {
  background-color: #693b26 !important;
}

.vuecal .cell {
  transition: background-color 0.3s ease;
}

.vuecal .cell.disabled {
  background-color: #d3d3d3 !important;
}

.vuecal .cell.today {
  border: 2px solid #ff4500;
}
</style>
