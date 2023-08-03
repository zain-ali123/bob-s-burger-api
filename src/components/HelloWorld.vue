<template>
  <div >
    <ul class=" grid grid-cols-5 grid-rows-3" >
      {{ user.name }}
          <li class="shadow-md p-4"  v-for="x in user" :key="x.id" >
        
          <img class="w-auto aspect-square "  :src="x.image" alt="">
          
          <div>
            <p >{{ x.name }}</p>
            <p >{{ x.id }}</p>
            <p >{{ x.hair }}</p>
          </div>
          
        
        
      </li>
    </ul>

  </div>
</template>



<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapGetters({user: 'getUser'})
  },
  methods:{
    ...mapActions({createUser:'registerUser'})
  },
  async created() {
    await this.createUser();
    console.log(this.user)
  }
}
</script>
