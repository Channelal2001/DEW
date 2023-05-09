<!--.then((data) => {
                const token = data.accessToken;
                localStorage.setItem('token', token);
            }).catch((error) => {
                console.error('Error:', error);
            });-->

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
                    <button type="submit"><a href="/home" id="button_text">Login</a></button>
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