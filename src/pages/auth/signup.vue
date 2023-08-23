<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Create an account with Homeowner</h2>
                <h4 class="card-text mb-3 pt-3">Fill in the details below to access your dashboard</h4>
            </div>

            <form id='form' @submit.prevent="submitForm" class="px-5">
                <div :class="{invalid: validity.fnameValidity === 'invalid'}">
                    <label for="fname">Enter First Name</label>
                    <input id='fname' class="form-control form-control-md" type="text" placeholder="Enter first name" v-model.trim="fname" @blur="validateInput('fname')">
                    <p v-if="validity.fnameValidity === 'invalid'">Please enter a valid name!</p>
                </div>

                <div :class="{invalid: validity.lnameValidity === 'invalid'}">
                    <label for="lname">Enter Last Name</label>
                    <input id='lname' class="form-control form-control-md" type="text" placeholder="Enter Last name" aria-label="Name" v-model.trim="lname" @blur="validateInput('lname')">
                    <p v-if="validity.lnameValidity === 'invalid'">Please enter a valid name!</p>
                </div>

                <div :class="{invalid: validity.phoneValidity === 'invalid'}">
                    <label for="phone">Enter Phone Number</label>
                    <input id='phone' class="form-control form-control-md" type="text" placeholder="Enter Phone Number" v-model.number="phone" @blur="validateInput('phone')">
                    <p v-if="phoneValidity === 'invalid'">Please enter a valid name!</p>
                </div>

                <div :class="{invalid: validity.emailValidity === 'invalid'}">
                    <label for="email">Enter Email Address</label>
                    <input id='email' class="form-control form-control-md" type="email" placeholder="Enter Email Address" v-model.lazy="email" @blur="validateInput('email')">
                    <p v-if="validity.emailValidity === 'invalid'">Please enter a Email!</p>
                </div>

                <div>
                    <label for="password">Enter Password</label>
                    <input id='password' class="form-control form-control-md" type="password" placeholder="Enter Password" v-model="password">
                </div>


                <div class="text-center">
                    <button type="submit" class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12" >Join Our Realtor Team</button>
                    <p>Already have an account? <a href="/signin" class="a">Login</a></p>
                </div>
            </form>

        </div>
    </section>
  </auth-page>
</template>


<script>
    export default {
        data() {
            return {
                fname: '',
                lname: '',
                phone: '',
                email: '',
                password: '',
                validity: [fnameValidity=> 'pending',lnameValidity=> 'pending', phoneValidity=> 'pending', emailValidity=> 'pending'],
            };
        },
        methods: {
            submitForm(){
                const data = {
                    'name': this.fname + ' ' + this.lname,
                    'email': this.email,
                    'phone': this.phone,
                    'password': this.password
                };
                alert(data.email);

                console.log('submitted');
                this.$router.push('/signin');
            },

            validateInput(item) {
                let check= item + 'Validity';
                if (this[item] == '') {
                    this.validity[check] = 'invalid';
                } else {
                    this.validity[check] = 'valid';
                }
            }
        }
    }
</script>