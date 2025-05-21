<template>
  
   <component 
    :is="activeComp" 
    @login-success="handleLoginSuccess"
  ></component>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import DashBoard from './components/DashBoard.vue';

export default {
  name: 'App',
  data(){
    return{
       toggleValue: true 
    }
  },
  components: {
    LoginForm,
    DashBoard
  },
  computed: {
    activeComp() {
      return this.toggleValue ? 'LoginForm' : 'DashBoard';
    }
  },
  methods: {
    handleLoginSuccess(user) {
      console.log('Logged in as:', user); 
      this.toggleValue = false; 
    }
  }
}
</script>