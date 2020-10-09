<template>
  <div class="main">
    <div class="plan-list">
      <div class="plan-item" v-for="(plan,index) in plans" :key="index">
        <div class="plan-avatar">
          <img src="https://blog.soarless.com/wp-content/themes/argon/assets/img/theme/avator.png">
          <h2>粽哥</h2>
        </div>
        <div class="plan-date">
          <h2><i class="fa fa-clock-o"></i></h2>
        </div>
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
  height:13rem;
  border-radius:5px;
  margin:10px;
  box-sizing:border-box;
  border:1px solid #DDDDDD;
}
.plan-avatar {
  width:13rem;
  height:100%;
  background-color:#F8F8F8;
  border-right:1px solid #DDDDDD;
  text-align:center;
  display:inline-block;
}
.plan-date {
  height:100%;
  display:inline-block;
}
img {
  margin:10px;
  height:70%;
  object-fit: cover;
  border-radius:50%;
}
h2 {
  margin:0;
  font-weight:normal;
  font-size:1.4rem;
}
</style>
