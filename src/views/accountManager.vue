<template>
    <div id="body_container">
        <header>
            <img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3auUoEURCF4d9xG30FA5cX0FAwFYwFQ3GJNJtAMDUSBBcwNzA2MHTER9EncEBxCdQZdKShbyKo1dCDbdX5oNKGc6Fv3Q1ERERERESkZ/qBKWCYgDaBB6ALtIGjSAOxmwf/WgcEsPNN+KxegCEc2/4hfKoxnGoYwt8CfTi0AXwYBmANh1aBd0P4QxxaAjqG8Mc4tGgMf+Lxv18AXg3hT4Eazszn/fy38Gf5UtiVOeDZEP4cGMCZWeDJEL7pcc0/A9wbwl8BdZyZBu4M4dt5u9v7g8o2XyvAaNnhJ4GWIXxV6gaYKHMALisQqmhlc1ApRowLnapVu6x5qJ5/rPvP6q3MLtSsQKCidUHgSfAaGCdoG1zuRRtMQi+EktBL4ST0ZigJvR1OQh+IJKGPxJLQh6JJ6GPxohcj6zjWMAxAy/N8QPTLUev1+CCBH0jsE8gW8Bj1iUxSi/xISkREREREhKr5BGvcPBacCGFQAAAAAElFTkSuQmCC">

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