<template>
  <p>
    推荐的 IDE 设置：
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    或
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>参考 <code>README.md</code> 了解更多信息。</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite 文档
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 文档</a>
  </p>

  <button type="button" @click="count++">计数: {{ count }}</button>
  <p>
    编辑
    <code>components/HelloWorld.vue</code> 测试热模块更新。
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
