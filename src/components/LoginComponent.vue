<template>
    <h1>sign in</h1>
    <p class="text-4xl"> tailwind</p>
     <div class="mb-6">
              <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Email</label>
              <input v-model="form.email" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
     </div>
        
                <!-- <button @click="getCharById(id)" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button> -->
        
          
              <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Password</label>
                <input type="password" v-model="form.password"  id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <span v-if="errors.password" class="error">{{ errors.password }}</span>
         
          <span v-if="errors.credentials" class="error">{{ errors.credentials }}</span>
    
        <button type="submit" @click="Login">Login{{ getForm(form) }}</button>
    
    <router-link to="/register">
      <v-btn class="ml-5">register</v-btn> 
    </router-link>
</template>

<script>

    import router from '@/router';
 
    export default {
        name: 'LoginComponent',

    data() {
    return {
        form:{
        email: '',
    password: ''
      },
    errors: { },
    continue: false,
    count:0

    }
  },

    methods: {
        getForm(obj) {
        console.log(obj);
    },
    validateForm() {

        this.errors = {};



    if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Invalid email format.';
      }


    if (!this.form.password) {
        this.errors.password = 'Password is required.';
      } else if (!/[!@#$%^&*(),.?":{ }|<>]/.test(this.form.password)) {
        this.errors.password = 'Password must include a special character.';
      } else if (!/^[A-Z]/.test(this.form.password)) {
            this.errors.password = 'Password must start with a capital letter.';
      } else if (this.form.password.length !== 8) {
            this.errors.password = 'Password must be 8 digits long.';
      }



        return Object.keys(this.errors).length === 0;
    },
        isValidEmail(email) {
     
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    },
        Login() {

      
      if (this.form.email == localStorage.getItem('email') && this.form.password == localStorage.getItem('password')) {
            console.log(' valid credentials. Logging...');
        router.push('/todo');

        }

        else {
            this.count = this.count + 1;
        this.errors.credentials = ' invalid credentials.Please enter correct credentials.';
        console.log(' invalid credentials. Please enter correct credentials.');
      }
    },


  


  },
        watch: {
            count(val) {
      if (val == 3) {
            alert("you have entered wrong credentials 3 time")
        }
    }

  },
        created() {

  },
        mounted(){
            console.log("im in mounted hoook")
        },
        updated() {
            console.log("im in updated hoook")
        },
        unmounted() {
            console.log("im in unmounted hoook")
        },

}
    
</script>