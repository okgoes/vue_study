<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-6">
          <h1>{{ msg }}</h1>
        </div>
        <div class="col-xs-6">
          <button class="btn btn-primary">按钮</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'UseBootstrap'
    }
  }
}
</script>
