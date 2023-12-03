<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
const textTip = ref('构思草图。\n从左侧查看对应模块')
</script>

<template>
  

  <RouterView>
    <el-container class="Container" width="100vw" height="100vh">
      <el-aside class="AsideContainer" width="20vw">
        <el-menu
          class="Menu"
          :collapse="true"
        >

          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
            </template>
            
            <el-menu-item @click="()=>{textTip = '这里可能会展示游戏 发售日期-各项指标 的时序关系，运用色彩编码、圆圈大小、高度信息等分别编码不同指标'}">
              时间轴
            </el-menu-item>

            <el-menu-item @click="()=>{textTip = '这里可能会展示游戏 游戏类别-游戏发售量 的时序关系，计划采用三维模型可视化'}">
              类别时序分析
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><cloudy /></el-icon>
            </template>
            
            <el-menu-item @click="()=>{textTip = '这里可能会展示不同类别游戏的评论的词云图'}">
              评论文本可视化
            </el-menu-item>

            <el-menu-item @click="()=>{textTip = '这里可能会展示游戏不同类别游戏的简介的词云图'}">
              简介文本可视化
            </el-menu-item>
          </el-sub-menu>

        </el-menu>
      </el-aside>
      <el-main class="MainContainer">
        <el-card shadow="hover" style="min-width: 40vw; min-height: 40vh;">
          {{ textTip }}
        </el-card>
      </el-main>
    </el-container>
  </RouterView>
</template>

<style scoped>

.Container{
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.AsideContainer{
  /* background-color: aqua; */
  position: fixed;
  top: 0%;
  left: 0;
  width: 5vw;
  height: 100vh;
}

.MainContainer{
  /* background-color: blue; */
  margin-left: 5vw;
  margin-top: 0%;
  width: 95vw;
  
}

.Menu{
  width: 100%;
  min-height: 100%;
}
</style>