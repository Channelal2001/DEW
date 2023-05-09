<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    async getUserData() {
        const userPromises = [];
        userPromises.push(
            fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    Authorization: 'Bearer ${token}',
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    alert('User found');
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
                            alert('Internal server error');
                            break;
                    }
                }
            })
        )
    }
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
                <a href="/home" class="button-save ">Save</a>
            </div>
        </header>
        <main>
            <div id="account-data-user">
                <section id="user" style="display:flex;flex-direction: column;align-items:center;">
                    <div class="image-container">
                        <img class="image " src="/src/assets/images/person-icon.png ">
                    </div>
                    <div>
                        <button class="button-edit-image"> Edit</button>
                    </div>
                </section>
                <section class="info">
                    <div class="data ">
                        <h4><b>Name:</b></h4>
                    </div>
                    <div id="space"> <button href="" class="button-edit"> Edit</button></div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4>Last name: </h4>
                    </div>
                    <div id="space"> <button href="" class="button-edit"> Edit</button></div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4>Email: </h4>
                    </div>
                    <div id="space"> <button href="" class="button-edit"> Edit</button></div>
                </section>
                <section class="info">
                    <div class="data">
                        <h4>Password: </h4>
                    </div>
                    <div id="space"> <button href="" class="button-edit"> Edit</button></div>
                </section>
                <section id="sign-out">
                    <a href="/" class="button-sign-out">Sign out</a>
                </section>
            </div>
            <section id="delete">
                <a href="/" class="button-delete">Delete account</a>
            </section>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_account_manager.css';
</style>