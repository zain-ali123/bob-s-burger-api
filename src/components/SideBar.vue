<template>
    
    <div class="flex">
        <div class="font-bold h-screen shadow-xl w-32  flex-shrink-0">
            <ul >
                <li class="my-5">
                    <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 text-left" @click='filteIdRoute'>Filter by id </button>
                </li>
                <li class="my-5">
                    <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 text-left" @click="filteNameRoute">Filter by name </button>
                </li>
                <li class="my-5">
                    <button class="text-left block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100" @click="filteHairRoute">Filter by hair color </button>
                </li>
            </ul>
        </div>

        <main class="flex-grow p-8 min-w-0">
            <div v-show="ShowHomeView">
                 <HelloWorld/>
            </div>
            <div v-show="ShowFilterById">
                <FilterById/>
            </div>
            <div v-show="ShowFilterByName">
                <FilterByName/>
            </div>
            <div v-show="ShowFilterByHair">
                <FilterByHairColor/>
            </div>
           
        </main>
    </div>
    

</template>

<script>
import router from '@/router';
import HelloWorld from './HelloWorld.vue';
import FilterById from '@/components/FilterById.vue';
import FilterByName from './FilterByName.vue';
import FilterByHairColor from './FilterByHairColor.vue';
export default {
    name: 'SideBar',
    data() {
        return {
            ShowHomeView:true,
            ShowFilterById: false,
            ShowFilterByName: false,
            ShowFilterByHair: false,

    }   
    },
    components: {
    HelloWorld,
    FilterById,
    FilterByName,
    FilterByHairColor
    }
    , methods: {
        filteIdRoute() {
            router.push('/filterId');
            this.ShowFilterById = true;
            this.ShowHomeView = false;
            this.ShowFilterByName = false;
            this.ShowFilterByHair=false
        },
        filteNameRoute() {
            router.push('/filterName');
            this.ShowFilterByName = true;
            this.ShowHomeView = false;
            this.ShowFilterById = false;
            this.ShowFilterByHair = false
        },
        filteHairRoute() {
            router.push('/filterHair');
            this.ShowFilterByHair = true
            this.ShowFilterByName = false;
            this.ShowHomeView = false;
            this.ShowFilterById = false;
        }
    }
}
</script>