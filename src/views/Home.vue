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
      height: 250px;
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
            line-height: 1.5;
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
    <!-- <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs> -->
    <t-card class="top" card-class="top-box">
      <div class="top-left">
        <!-- <i class="el-icon-success"></i> -->
      </div>
      <div class="top-center">
        <h3></h3>
        <p>我承认， 我们的关系里， 你是爱得更多的那个。 但这不代表我就欠你什么。爱不爱， 有多爱， 这都是你自觉自愿的事情， 没有人强迫你。 爱情从来不是什么公平的游戏。我知道你觉得委屈， 但事实就是，爱得更多的那方没资格提要求。爱得更多的那方， 要么带着自己的尊严退出游戏， 要么只能用更多的耐心， 花更多的心血， 让对方心甘情愿地跟上你的步伐， 而不是强迫人家一定要跟你的步伐一致。“ 爱， 并不能从零一下子就跳到十的，这是一个循序渐进的过程。可能A爱B十分的时候， B只有五分爱A。 但这不代表以后B就不能爱A到十分。 一段爱情， 中间谁爱得多爱得少， 并不重要， 只要最后双方都能投入去爱就行了。如果把爱比作一座高山， 谁先到达山顶并不重要，关键是先来到山顶的人，懂得不去抱怨另一位的速度太慢， 而是让自己有足够的耐心等另一位也攀上顶点。 当两人一起在山顶上眺望最迷人的风景时， 你就会发现--等待是值得的。 我经常回味柠檬小姐那句话“爱得更多的那方没资格提要求”。 当初我特别不能接受这种说法， 但现在想想， 是呀， 作为爱得更多那方， 我要求提得越多， 只会让对方爱我更少。 而对方爱我爱得少， 很有可能错不在对方， 而在我自己。 追着人家要个答案， 把他（她）逼得无法喘息， 还不如卸掉给对方的压力， 给他（她）所需要的时间和空间。以泪洗面地指责对方“为什么你不能爱我多一点”， 不如擦干眼泪， 露出笑容， 去改进自己，让自己更值得爱。 愚者，乞求爱； 智者， 吸引爱。</p>
      </div>
      <div class="top-right">
        <!-- <el-button type="primary">立即使用</el-button> -->
      </div>
    </t-card>
    <!-- <t-card class="left">
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
    </t-card> -->
    <p style="position: fixed;width: 400px;text-align: center;left: calc(50% - 200px);bottom: 10px;">Copyright ©2019-2020 HANKQIN <a data-v-55421cc4="" href="http://beian.miit.gov.cn" target="__blank">桂ICP备18009840号</a></p>
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
