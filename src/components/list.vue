<template>
  <div class="main">
    <div class="plan-list">
      <router-link v-if="$route.path !== '/list/add'" class="add-plan" to="/list/add">添加新计划</router-link>
      <router-view></router-view>
      <div class="plan-item" v-for="(plan,index) in plans" :key="index">
        <div class="plan-avatar">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618065806,14298536&fm=26&gp=0.jpg">
          <h2>{{plan.name}}</h2>
        </div>
        <div class="plan-date">
          <div class="date-center">
            <h2><i class="fa fa-clock-o"></i> {{plan.totalTime}}</h2>
            <div class="calendar"><i class="fa fa-calendar"></i> {{plan.date}}</div>
          </div>
        </div>
        <div class="plan-content">
          {{plan.comment}}
        </div>
        <button>X</button>
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
  width:75%;
  min-width:650px;
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
  display:flex;
  border:1px solid #DDDDDD;
  position:relative;
}
.plan-avatar {
  height:100%;
  background-color:#F8F8F8;
  border-right:1px solid #DDDDDD;
  text-align:center;
  display:inline-block;
}
.plan-date {
  padding:20px;
  text-align:center;
  display:flex;
  align-items:center;
}
.date-center {
  display:block;
  width:10rem;
}
.calendar {
  background-color:#0075C2;
  color:white;
  border:1px solid transparent;
  border-radius:5px;
  padding:5px;
  margin:4px;
  box-sizing:border-box;
  text-align:center;
  font-weight:bold;
}
.plan-content {
  box-sizing:border-box;
  padding:20px;
  font-size:18px;
  overflow:auto;
  margin-right:40px;
}
.add-plan {
  background-color:#007BFF;
  margin:10px;
  padding:10px;
  color:white;
  border-radius:5px;
  display:inline-block;
  /* font-weight:bold; */
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
button {
  background-color:#DC3545;
  color:white;
  border:1px solid transparent;
  border-radius:5px;
  font-size:18px;
  position:absolute;
  right:10px;
  top:10px;
  outline:none;
  cursor:pointer;
}
</style>
