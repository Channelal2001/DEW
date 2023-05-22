<script>
import divideTokenVue from '../components/divideToken.vue';

export default {
  data() {
    return {
    };
  },
  methods: {
    async editUser() {
        const token = localStorage.getItem('token');
        const name = document.getElementById('name').innerHTML;
        const lastname = document.getElementById('last-name').innerHTML;
        const email = document.getElementById('email').innerHTML;
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
    async deleteUser() {
        const token = localStorage.getItem('token');
        fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users', {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                alert('User deleted');
                window.location.href = "/";
                return response.json();
            } else {
                switch(response.status) {
                    case 401:
                        alert('Unauthorized');
                        break;
                    case 500:
                        alert('User not deleted');
                        break;
                    case 502:
                        alert('Internal server error');
                        break;
                }
            }
        })
    },
    async logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('wishlistID');
        window.location.href = "/";
    },
},
  mounted() {
    const token = localStorage.getItem('token');
    const id = divideTokenVue.methods.divideToken(token);
    fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}`, {
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
            switch(response.status) {
                case 204:
                    alert('User not found');
                    break;
                case 400:
                    alert('Bad request');
                    break;
                case 401:
                    alert('Unauthorized');
                    break;
                case 406:
                    alert('Missing parameters');
                    break;
                case 502:
                    alert('Internal Server Error');
                    break;
            }
        }
    })
    .then((data) => {
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('last-name').innerHTML = data.last_name;
        document.getElementById('email').innerHTML = data.email;
        document.getElementsByClassName('image')[0].src = data.image;
    })
    }
}
</script>

<template>
    <div id="body_container">
        <header>
            <a href="javascript:history.back()">
                <div class="arrow">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3auUoEURCF4d9xG30FA5cX0FAwFYwFQ3GJNJtAMDUSBBcwNzA2MHTER9EncEBxCdQZdKShbyKo1dCDbdX5oNKGc6Fv3Q1ERERERESkZ/qBKWCYgDaBB6ALtIGjSAOxmwf/WgcEsPNN+KxegCEc2/4hfKoxnGoYwt8CfTi0AXwYBmANh1aBd0P4QxxaAjqG8Mc4tGgMf+Lxv18AXg3hT4Eazszn/fy38Gf5UtiVOeDZEP4cGMCZWeDJEL7pcc0/A9wbwl8BdZyZBu4M4dt5u9v7g8o2XyvAaNnhJ4GWIXxV6gaYKHMALisQqmhlc1ApRowLnapVu6x5qJ5/rPvP6q3MLtSsQKCidUHgSfAaGCdoG1zuRRtMQi+EktBL4ST0ZigJvR1OQh+IJKGPxJLQh6JJ6GPxohcj6zjWMAxAy/N8QPTLUev1+CCBH0jsE8gW8Bj1iUxSi/xISkREREREhKr5BGvcPBacCGFQAAAAAElFTkSuQmCC">
                </div>
            </a>
            <div class="save"> 
                <button @click="editUser" class="button-save ">Save</button>
            </div>
        </header>
        <main>
            <div id="account-data-user">
                <section id="user" style="display:flex;flex-direction: column;align-items:center;">
                    <div class="image-container">
                        <img class="image">
                    </div>
                    <div>
                        <input id="button-edit-image" type="text" name="url" placeholder="Add link to change it">
                    </div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4><b>Name:</b></h4>
                        <div contentEditable="true" id="name"></div>
                    </div>
                    <div id="space"></div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4>Last name: </h4>
                        <div contentEditable="true" id="last-name"></div>
                    </div>
                    <div id="space"></div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4>Email: </h4>
                        <div contentEditable="true" id="email"></div>
                    </div>
                    <div id="space"></div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4>Password: </h4>
                        <!--<div contentEditable="true" id="password"></div>-->
                        <input id="password" type="text" name="password" placeholder="Enter your new password">
                    </div>
                    <div id="space"></div>
                </section>
                <section id="sign-out">
                    <button @click="logout" class="button-sign-out">Sign out</button>
                </section>
            </div>
            <section id="delete">
                <button @click="deleteUser" class="button-delete">Delete account</button>
            </section>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_account_manager.css';
</style>