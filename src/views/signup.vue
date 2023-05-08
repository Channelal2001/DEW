<script>
export default {
  data() {
    return {
    };
  },
    methods: {
        async signup() {
            const signupPromises=[];
            console.log(ids);
            for (let i = 0; i < ids.length; i++) {
                signupPromises.push(
                    fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users', {
                        method: 'POST',
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json();
                        } else {
                            throw new Error('Failed to sign up');
                        }
                    })
                );
            }
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
                    <button type=" submit "><a href="uploadImage" id="button_text">Sign up</a></button>
                </div>
            </section>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_login_signup.css';
</style>