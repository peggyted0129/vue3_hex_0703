<template>
<div>
  <div class="h4 message-alert">  <!-- 對應的 CSS 樣式 -->
    <div class="alert alert-dismissible" :class="'alert-' + item.status"
          v-for="(item, i) in messages" :key="i"> <!-- 對應的 Vuex state 初始值 -->
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('alertModules', ['messages'])
  },
  methods: {
    ...mapActions('alertModules', ['updateMessage', 'removeMessage', 'removeMessageWithTiming'])
  }
}
</script>
<style scope>
.message-alert {
  position: fixed;
  max-width: 70%;
  top: 140px;
  right: 20px;
  z-index: 2000;
}
</style>
