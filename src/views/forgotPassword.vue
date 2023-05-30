<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    changePassword(userData) {
      const token = localStorage.getItem('token');
      const name = userData.name;
      const lastname = userData.last_name;
      const email = userData.email;
      const password = document.getElementById('password').value;
      const image = document.getElementById('button-edit-image').value;
      const user = {
        name: name,
        last_name: lastname,
        email: email,
        password: password,
        image: image,
      }
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users', {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then((response) => {
        if (response.status === 200) {
          alert('User edited');
          window.location.href="javascript:history.back()";
          return response.json();
        } else {
          switch(response.status) {
            case 400:
              alert('Bad request');
              break;
            case 401:
              alert('Unauthorized');
              break;
            case 406:
              alert('Missing parameters');
              break;
            case 409:
              alert('The email adress has already been previously registered');
              break;
            case 410:
              alert('No user has been edited');
          }
        }
      })
    },
    search() {
      const searchTerm = document.getElementById("email").value;
      const token = localStorage.getItem('token');
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s=${searchTerm}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          switch (response.status) {
            case 400:
              alert('Bad request');
              break;
            case 401:
              alert('Unauthorized');
              break;
            case 406:
              alert('Missing parameters');
              break;
            case 500:
              alert('Error getting list of found users');
              break;
            case 502:
              alert('Internal Server Error');
              break;
          }
        }
      })
      .then((userData) => {
        this.changePassword(userData)
      })
      document.getElementById("search-bar").value = "";
    },
  },
}
</script>

<template>
    <div id="body_container">
        <header>
            <p class="signup-title"><strong>Social</strong>Gift</p>
        </header>
        <main>
            <section class="signup-form">
                <form class="sign-data-data">
                    <!--<div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Input your name" required />
                    </div>-->
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Input your email" required />
                    </div>
                    <div class="form-group">
                        <label for="Password">New Password:</label>
                        <input type="email" id="password" name="password" placeholder="Input the new password" required />
                    </div>
                </form>
            </section>
            <section>
                <div id="button">
                    <button id="button_text">Send</button>
                </div>
            </section>

        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_login_signup.css';
</style>