<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    async signin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = {
            email: email,
            password: password,
        }
        fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Authenticated user');
                return response.json();
            } else {
                switch(response.status) {
                    case 400:
                        alert('Bad request');
                        break;
                    case 401:
                        alert('Wrong username and password combination');
                        break;
                    case 406:
                        alert('Missing parameters');
                        break;
                }
            }
        })
        .then((data) => {
            const token = data.accessToken;
            localStorage.setItem('token', token);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
  }
}
</script>
<template>
     <div id="body_container" >
        <header style="height:100px;padding-top: 5rem;">
            <p class="signup-title"><b>Social</b>Gift</p>
        </header>
        <main style="height:calc(100vh - 110px);background:rgb(109, 183, 251);align-items: center;justify-items: center;">
            <section class="signup-form" >
                <form>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" minlength="8" required />
                    </div>
                </form>
            </section>
            <section href="/home" id="button">
                <div>
                    <button @click="signin"><a href="#" id="button_text">Login</a></button>
                </div>
            </section>
            <a href="/forgotPassword" id="text-forgot">Forgot your password?</a>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_login_signup.css';

</style>