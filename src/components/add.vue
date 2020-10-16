<template>
  <div class="add">
    <h2>添加计划</h2>
    <div class="data">
      <div class="data-left">
        <div class="data-line">
          <label>名称</label><input type="text" placeholder="text">
        </div>
        <div class="data-line">
          <label>时间</label><input type="number" placeholder="time">
        </div>
        <div class="data-line">
          <label>日期</label><input type="date" placeholder="date">
        </div>
      </div>
      <div class="data-right">
        <label>内容</label><input type="text" placeholder="comment">
      </div>
    </div>
    <button>添加</button>
    <router-link to="/list">取消</router-link>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      msg: 'Welcome to index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add {
  height:40%;
  min-height:16rem;
  background-color:#F3F3F3;
  margin:10px;
  border-radius:5px;
  padding:30px;
  box-sizing:border-box;
}
.data {
  display:flex;
}
.data-left {
  width:50%;
}
.data-line {
  /* display:block; */
  margin:5px;
}
.data-right {
  /* width:50%; */
}
a {
  background-color:#DC3545;
  color:white;
  border:2px solid transparent;
  border-radius:5px;
  padding:1px 6px;
  font-size:18px;
  outline:none;
  cursor:pointer;
}
h2 {
  margin:0;
  margin-bottom:10px;
}
input {
  margin:8px;
  width:10rem;
}
button {
  background-color:#007BFF;
  color:white;
  border:2px solid transparent;
  border-radius:5px;
  font-size:18px;
  outline:none;
  cursor:pointer;
}
</style>
