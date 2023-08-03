<template>
    <div class="Register">
        <h1>Register to App</h1>
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