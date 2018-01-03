<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="#/" target="_blank">my</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">222</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">222 Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">2222</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">2222</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
