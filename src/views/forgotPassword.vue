<template>
    <div id="body_container">
        <header>
            <p class="signup-title"><strong>Social</strong>Gift</p>
        </header>
        <main>
            <section class="signup-form">
                <form>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </form>
            </section>
            <section>
                <div id="button">
                    <button type=" submit "><a href="/login" id="button_text">Send</a></button>
                </div>
            </section>

        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_login_signup.css';
</style>