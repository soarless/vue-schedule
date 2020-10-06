<template>
  <div id="app">
    <!-- <div class="nav"> -->
      <ul>
        <li><i class="fa fa-clock-o"></i>计划板</li>
        <li>首页</li>
        <li>计划列表</li>
      </ul>
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  height:100%;
  margin:0;
  overflow:hidden;
}
.nav {
  height:20%;
  margin:0;
}
ul {
  margin:0;
  height:10%;
  background-color:#F8F8F8;
  border-bottom:1px solid #ECECEC;
  display:flex;
  align-items:center;
}
li {
  display:inline;
  font-size:1.3rem;
  margin-right:1rem;
}
</style>
