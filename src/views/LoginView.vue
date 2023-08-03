<template>
    <div class="grid justify-items-center">
        <img src="https://www.bobsburgersapi.com/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=48&q=75&dpl=dpl_2pzj43TiVvTbKoNqcKtvT1nPgfFK" 
        class="w-20 h-15">
        <p class="text-4xl hover:blue"> Login To BurgerApp</p>
        <LoginComponent/>
        
            
    </div>
    
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
export default {
    name: 'LoginView',
    components: {
        LoginComponent
    }
}
    
</script>