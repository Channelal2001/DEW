<template>
    <div id="body_container">
        <header>
            <p class="titleSocial"><b>Social</b>Gift</p>
        </header>
        <div>
            <h3 class="welcome">Hi, user!</h3>
            <h4 class="welcome2">Upload a picture that identifies you</h4>
        </div>
        <div style="text-align:center">
            <img class="image" src="/src/assets/images/person-icon.png" width="240 " alt="person-image">
        </div>
        <div class="form">
            <form action="/action_page.php">
                <input type="file" id="img" name="img" accept="image/*">
            </form>
        </div>
        <div>
            <a href="/home" id="button">Let’s Start!</a>
        </div>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_upload-image.css';
</style>