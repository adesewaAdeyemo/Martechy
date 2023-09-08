<template>
  <auth-page>
    <div class="col-4">
      <base-dialog :show="!!error" title="An error occurred" @close="handleError">
        <p>{{ error }}</p>
      </base-dialog>
      <base-dialog :show="isLoading" title="Authenticating..." fixed>
        <base-spinner></base-spinner>
      </base-dialog>
      <base-card>
        <form @submit.prevent="submitForm">
          <div class="py-2">
            <label for="email" class="py-2">E-Mail</label>
            <input type="email" id="email" v-model.trim="email" />
          </div>
          <div class="py-2">
            <label for="password" class="py-2">Password</label>
            <input type="password" id="password" v-model.trim="password" />
          </div>
          <p
            v-if="!formIsValid"
          >Please enter a valid email and password (must be at least 6 characters long).</p>
          <base-button mode="opaque">{{ submitButtonCaption }}</base-button>
          <base-button type="button" mode="transparent" class="mx-3" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </form>
      </base-card>
    </div>
  </auth-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === 'login') {
          // await this.$store.dispatch('login', actionPayload);
        } else {
          // await this.$store.dispatch('signup', actionPayload);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'products');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
input{
  width: 100% !important;
}
</style>