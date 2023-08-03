<template>
  <div class="home">
    <!-- <SideBar/> -->
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import SideBar from '@/components/SideBar.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    // SideBar

  }
}
</script>
