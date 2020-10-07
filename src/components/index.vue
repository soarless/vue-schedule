<template>
  <div class="index">
    <h1>任务追踪</h1>
    <router-link to="list">创建一个任务</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  height:50%;
  background-color:#F3F3F3;
  margin:20px;
  border-radius:5px;
  padding:40px;
  box-sizing:border-box;
}
a {
  color:blue;
}
</style>
