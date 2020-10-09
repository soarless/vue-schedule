<template>
  <div class="main">
    <div class="plan-list">
      <div class="plan-item" v-for="(plan,index) in plans" :key="index">
        <div class="plan-content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    plans () {
      return this.$store.state.list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width:70%;
  padding:20px;
  box-sizing:border-box;
}
.plan-list {
  height:100%;
  width:100%;
  box-sizing:border-box;
  border:0;
}
.plan-item {
  height:100px;
  width:100%;
  background-color:grey;
  border-radius:5px;
  margin:10px;
  box-sizing:border-box;
}
.plan-content {

}
</style>
