<template>
  <div class="home">
    <NavBar/>
    <div class="flex">
    <SideBar/>
    <!-- <HelloWorld/> -->
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import SideBar from '@/components/SideBar.vue';
 import NavBar from "../components/NavBar.vue"

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    SideBar,
    NavBar

  }
}
</script>
