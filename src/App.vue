<template>
  <div id="app">
    <ul class="nav">
      <li><a id="logo" href="#"><i class="fa fa-clock-o"></i>计划板</a></li>
      <li><router-link to="index">首页</router-link></li>
      <li><router-link to="list">计划列表</router-link></li>
    </ul>
    <div class="content">
      <div class="sidebar">
        <sidebar></sidebar>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
export default {
  name: 'App',
  components: {
    'sidebar': sidebar
  }
}
</script>

<style>
html,body,#app{
  height:100%;
  margin:0;
  overflow:hidden;
}
ul {
  margin:0;
  height:10%;
  background-color:#F8F8F8;
  border-bottom:1px solid #DDDDDD;
  display:flex;
  align-items:center;
}
li {
  display:inline-block;
  font-size:1.3rem;
  margin-left:1rem;
  margin-right:1rem;
}
li i {
  margin-right:0.4rem;
}
#logo {
  color:black;
}
a {
  text-decoration:none;
  color:grey;
}
.router-link-active {
  color:black;
}
.content {
  height:100%;
  display:flex;
}
.sidebar {
  height:100%;
  width:25%;
  padding:20px;
  box-sizing:border-box;
}
</style>
