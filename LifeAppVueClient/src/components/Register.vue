<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: 'you@somewhere.something',
      password: 'secret thing'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const res = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(res.data.message)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hey asshole'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
