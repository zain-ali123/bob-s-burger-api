<template>
    <div class="grid justify-items-center ">
    <div class="mb-6">
          <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Hair Color </label>
          <input v-model="id" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
        
            <button @click="getCharById(id)" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button>
    </div>
<div>
    <ul class=" grid grid-cols-5 ">
        <li class="shadow-md p-4" v-for="c in char" :key="c.id">
            <img class="w-auto aspect-square " :src="c.image" alt="">
            <div>
                <p>{{ c.name }}</p>
                <p>{{ c.id }}</p>
                <p>{{ c.hair }}</p>
            </div>
        </li>
    </ul>

</div>
   
</template> 

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'FilterById',
    data() {
        return {
            id: null
        }
    },
    methods: {
        ...mapActions({ getCharById: 'getCharacterByHair' })

    },
    computed: {
        ...mapGetters({ char: 'getCharacter' })
    },
}
</script>
<!-- <style scoped>

</style> -->