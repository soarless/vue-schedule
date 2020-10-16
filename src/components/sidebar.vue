<template>
  <div class="side">
    <div class="side-header">
      <h2>已有时长</h2>
    </div>
    <div class="side-sum">
      <h2>{{time}}小时</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'side'
    }
  },
  computed: {
    time () {
      return this.$store.state.totalTime
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side {
  height:30%;
  min-height:10rem;
  box-sizing:border-box;
  border-radius:5px;
  border:1px solid #DDDDDD;
}
.side-header {
  height:50%;
  border-bottom:1px solid #DDDDDD;
  overflow:hidden;
  background-color:#F2F2F2;
  display:flex;
}
.side-sum {
  height:50%;
  overflow:hidden;
  display:flex;
}
h2 {
  align-self:center;
  margin:auto;
  font-size:2rem;
  font-weight:normal;
}
</style>
