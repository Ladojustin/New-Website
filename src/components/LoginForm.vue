<template>
    <div class="login-container justify-content-center align-items-center mt-3">
    <img id="logo-img" alt="logo" src="../assets/logo.png">
    <h2 class="login-title" style="font-family: 'Poppins',sans-serif;">Hello, Again</h2>
    
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="username"></label>
        <input type="text" id="username"  v-model="username" required autocomplete="off" placeholder="Username"/>
      </div>
      <div class="form-group">
        <label for="password"></label>
        <input type="password" id="password" autocomplete="new-password" v-model="password" required  placeholder="Enter your password"/>
      </div>
      
      <button @click="nexpg= !nexpg" type="submit" class="login-button">Log in</button>
      <div class="form-options">
        <div class="remember-me">
          <input type="checkbox" id="remember" v-model="rememberMe" />
          <label for="remember">Save Password</label>
        </div>
        <a href="#" class="forgot-password" @click.prevent="handleForgotPassword">Forget Password?</a>
      </div>
      
      <div class="social-login">
        <div class="social-buttons">
          <button type="button" class="social-button facebook w-50" @click="loginWithFacebook">
            <i class="fa-brands fa-facebook"></i>Facebook
          </button>
          <button type="button" class="social-button google btn-danger w-50 " @click="loginWithGoogle">
            <i class="fab fa-google"></i> Google
          </button>
        </div>
      </div>
      <p class="signup-link">
        Don't have an account yet? <a href="#" @click.prevent="handleRegister">Register</a>
      </p>
      
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </form>
    </div>
</template>
<script>
import User from '@/model/user.js';

export default{
    name : 'LoginForm',
    data(){
        return{

          username: '',
          password: '',
          rememberMe: false,
          errorMessage: '',
          Users: []
        }
    },
    created() {
    this.loadUsers();
    this.checkRememberedUser();
    },
    methods:{
        async loadUsers() {
        try {
            const response = await fetch('/Users.json');
            const jsonData = await response.json();
            this.Users = jsonData.map(user => User.fromJson(user));
        } catch (error) {
            console.error('Error loading users:', error);
            this.errorMessage = 'Error loading user data';
        }
        },
        checkRememberedUser() {
            const rememberedUser = localStorage.getItem('rememberedUser');
            if (rememberedUser) {
            const userData = JSON.parse(rememberedUser);
            this.username = userData.username;
            this.password = userData.password;
            
            }
        },
        handleLogin(){
            const user = this.Users.find(u => 
            u.validateCredentials(this.username, this.password)
           );

        if (user) {
        if (this.rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify({
            username: this.username,
            password: this.password
        }));
        } else {
          localStorage.removeItem('rememberedUser');
        }
        
        this.errorMessage = '';
        this.$emit('login-success', user);
       } 
       else {
        this.errorMessage = 'Invalid username!!';
        }
    },
    handleForgotPassword(){
        this.$emit('forgot-password');
    },
    handleRegister(){
        this.$emit('sign-up');
    },
    loginWithFacebook() {
      window.location.href = 'https://www.facebook.com';
    },
    loginWithGoogle() {
      window.location.href = 'https://accounts.google.com';
    },
  }
}

</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.466);

}

.login-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #333;
}
.login-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

#logo-img{
    height: 65px;
    width: 65px;
    display: block;
    margin: 0 auto;         
    border-radius: 40%; 
}

.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 0.5rem;
}

.forgot-password {
  color: #4a6bff;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  background-color: #029262f6;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.login-button:hover {
  background-color: #8df7dc;
}

.social-login {
  text-align: center;
  margin-bottom: 1rem;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.social-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

.social-button:hover {
  background-color: #a8a5a5;
}
.facebook {
  background-color: #0e4fa5;
}

.google {
  background-color: #f3584a;
}

.signup-link {
  text-align: center;
  color: #666;
}

.signup-link a {
  color: #4a6bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
.error-message {
  color: #ff4d4f;
  text-align: center;
  margin-top: 1rem;
}
</style>
