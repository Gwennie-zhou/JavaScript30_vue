<template>
  <div>
    <h2>
      Update CSS Variables with
      <span class="hl">JS</span>
    </h2>
    <div class="controls">
      <div v-for="(item, index) in data" :key="index">
        <label :for="item.id">{{ item.id }}:</label>
        <input
          v-if="item.dataSizing"
          :type="item.type"
          :name="item.id"
          :min="item.min"
          :max="item.max"
          v-model="item.value"
          @change="handleUpdate(item.id, item.value, item.dataSizing)"
        />
        <input
          v-else
          :type="item.type"
          :name="item.id"
          v-model="item.value"
          @change="handleUpdate(item.id, item.value, item.dataSizing)"
        />
      </div>
    </div>
    <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
  </div>
</template>
<script>
import data from './type';
export default {
  data() {
    return {
      data,
    };
  },
  methods: {
    handleUpdate(id, value, suffix = '') {
      console.log(id, value, suffix);
      document.documentElement.style.setProperty(`--${id}`, value + suffix);
    },
  },
};
</script>
<style lang="less" >
:root {
  --spacing: 10px;
  --base: red;
  --blur: 2px;
}
/*
      misc styles, nothing to do with CSS variables
    */

body {
  text-align: center;
  background: #193549;
  color: white;
  font-family: 'helvetica neue', sans-serif;
  font-weight: 100;
  font-size: 50px;
}

.controls {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

input {
  width: 100px;
  margin-right: 5px;
}
img {
  background: var(--base);
  padding: var(--spacing);
  filter: blur(var(--blur));
}
</style>
