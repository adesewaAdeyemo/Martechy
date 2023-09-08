<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Verify Your Account</h2>
                <h4 class="card-text mb-3 pt-3">Enter your email address</h4>
            </div>

            <form id='form' @submit.prevent="submitForm" class="px-5">
                <div :class="{invalid: validity.codeValidity === 'invalid'}">
                    <label for="code">Enter verification code</label>
                    <input id='code' class="form-control form-control-md" type="text" placeholder="Verificatin code" v-model.number="code" @blur="validateInput('code')">
                    <p v-if="validity.coedeValidity === 'invalid'">Please enter a Email!</p>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12" href="/verifycode">Continue</button>
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
                code: '',
                validity: [coedeValidity=>'pending']
            };
        },
        methods: {
            submitForm(){
                const data = {
                    'code': this.code,
                };
                alert(data.code);
                this.$router.push('/');
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