<style lang="scss">
  #home{
    position: relative;
    z-index: 99;
    .el-tabs{
      width: calc(100% - 60px);
      margin: 10px auto 0 auto;
    }
    h2{
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .top{
      height: 150px;
      margin: 30px 30px 15px 30px;
      width: calc(100% - 60px);
      &-box{
        display: flex;
        align-items: center;
        .top-left{
          width: 50px;
          text-align: right;
          margin-right: 20px;
          i{
            font-size: 26px;
            color: $green;
          }
        }
        .top-center{
          width: calc(100% - 200px);
          h3{
            font-size: 26px;
            font-weight: bold;
          }
          p{
            font-size: 14px;
            color: $grey;
          }
        }
      }
    }
    .left,.right{
      width: calc(50% - 45px);
      height: 300px;
      display: inline-block;
      margin: 15px 15px 15px 30px;
    }
    .right{
      margin: 15px 30px 15px 15px;
    }
    .bottom{
      height: calc(100vh - 645px);
      width: calc(100% - 60px);
      margin: 15px 30px 0 30px;
    }
  }
</style>

<template>
  <div id="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs>
    <t-card class="top" card-class="top-box">
      <div class="top-left">
        <i class="el-icon-success"></i>
      </div>
      <div class="top-center">
        <h3>开始使用模板</h3>
        <p>该模板将用于实现项目的快速开发</p>
      </div>
      <div class="top-right">
        <el-button type="primary">立即使用</el-button>
      </div>
    </t-card>
    <t-card class="left">
      <h2>Bp-template-pc</h2>
      <p>作为必派的脚手架pc模板</p>
    </t-card>
    <t-card class="right">
      <h2>Bp-template-pc</h2>
      <p>作为必派的脚手架pc模板</p>
    </t-card>
    <t-card class="bottom">
      <h2>Bp-template-pc</h2>
      <p>作为必派的脚手架pc模板</p>
    </t-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
