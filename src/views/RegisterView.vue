<template>
    <div class="grid justify-items-center mt-8">
            <img src="https://www.bobsburgersapi.com/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=48&q=75&dpl=dpl_2pzj43TiVvTbKoNqcKtvT1nPgfFK" 
            class="w-20 h-15">
            <p class="text-4xl "> Register To BurgerApp</p>
        <RegisterComponent />
    </div>
</template>
<script>
import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
    name: 'RegisterView',
    components: {
        RegisterComponent
    }
}
</script>