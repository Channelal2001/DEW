<script>
export default {
  data() {
    return {
    };
  },
    methods: {
        async signup() {
            const name = document.getElementById('name').value;
            const lastname = document.getElementById('lastname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const image = "https://balandrau.salle.url.edu/i3/repositoryimages/photo/47601a8b-dc7f-41a2-a53b-19d2e8f54cd0.png";
            const user = {
                name: name,
                last_name: lastname,
                email: email,
                password: password,
                image: image,
            }
            
            fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then((response) => {
                if (response.status === 201) {
                    alert('User created');
                    return response.json();
                } else {
                    switch(response.status) {
                        case 400:
                            alert('Bad request');
                            break;
                        case 406:
                            alert('Missing parameters');
                            break;
                        case 409:
                            alert('The email adress has already been previously registered');
                            break;
                        case 500:
                            alert('User not created');
                            break;
                        case 502:
                            alert('Internal server error');
                            break;
                    }
                }
            })
        },
    }
};
    
</script>

<template>
    <div id="body_container">
        <header>
            <p class="signup-title"><strong>Social</strong>Gift</p>
        </header>
        <main style="height:calc(100vh - 220px);background:rgb(109, 183, 251);align-items: center;justify-items: center;">
            <section class="signup-form">
                <form>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last name:</label>
                        <input type="text" id="lastname" name="lastname" required />
                    </div>
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
            <section>
                <div id="button">
                    <button @click="signup"><a href="#" id="button_text">Sign up</a></button>
                </div>
            </section>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_login_signup.css';
</style>