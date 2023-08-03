
<template>
    <div class="hello">
        <h1>Sign Up</h1>
        <fieldset>
            <label for="username">Username<br></label>
            <input type="text" id="username" v-model="form.username">
            <span v-if="errors.username" class="error">{{ errors.username }}</span>
        </fieldset>
        <fieldset>
            <label for="email">Email<br></label>
            <input type="email" id="email" v-model="form.email">
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </fieldset>
        <fieldset>
            <label for="password">Password<br></label>
            <input type="password" id="password" v-model="form.password">
            <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </fieldset>
        <fieldset>
            <label for="confirmPassword">Confirm Password<br></label>
            <input type="password" id="confirmPassword" v-model="form.confirmPassword">
            <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
        </fieldset>

        <button type="submit" @click="submitForm">Submit{{ getForm(form) }}</button>
    </div>
</template>

<script>
export default {
    name: 'RegisterComponent',
    data() {
        return {
            form: {
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
            },
            errors: {},
        };
    },
    methods: {
        getForm(obj) {
            console.log(obj);
        },
        validateForm() {

            this.errors = {};


            if (!this.form.username) {
                this.errors.username = 'Username is required.';
            } else if (/\s/.test(this.form.username)) {
                this.errors.username = 'Username must not contain spaces.';
            } else if (!/[\d!@#$%^&*()_+~`.,;:'"<>{}/[\]\\]/.test(this.form.username)) {
                this.errors.username = 'Username must include a number or special character.';
            }


            if (!this.form.email) {
                this.errors.email = 'Email is required.';
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = 'Invalid email format.';
            }


            if (!this.form.password) {
                this.errors.password = 'Password is required.';
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) {
                this.errors.password = 'Password must include a special character.';
            } else if (!/^[A-Z]/.test(this.form.password)) {
                this.errors.password = 'Password must start with a capital letter.';
            } else if (this.form.password.length !== 8) {
                this.errors.password = 'Password must be 8 digits long.';
            }


            if (this.form.password !== this.form.confirmPassword) {
                this.errors.confirmPassword = 'Passwords do not match.';
            }

            return Object.keys(this.errors).length === 0;
        },
        isValidEmail(email) {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
        submitForm() {
            if (this.validateForm()) {

                localStorage.setItem('email', this.form.email),
                    localStorage.setItem('password', this.form.password)
                console.log('Form is valid. Submitting...');
            } else {

                console.log('Form is invalid. Please correct the errors.');
            }
        },
    },
};
</script>

<style>
.error {
    color: red;
}
</style>
