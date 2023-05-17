<script>
    export default {
    data() {
        return {
        friends: []
        };
    },
    methods: {
        async createWishlist() {
            const name = document.getElementById('name-wishlist').innerHTML;
            const description = document.getElementById('description-wishlist').innerHTML;
            const endDate = document.getElementById('information-wishlist-end-date').innerHTML;
            const wishlist = {
                name: name,
                description: description,
                end_date: endDate,
            }
            const token = localStorage.getItem('token');
            fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wishlist),
            })
            .then((response) => {
                if (response.status === 201) {
                    window.location.href = "/wishlist";
                    alert('Wishlist created');
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
                            alert('The wishlist has already been pre-registered');
                            return;
                        case 500:
                            alert('The wishlist has not been created');
                            break;
                        case 502:
                            alert('Internal Server Error');
                            break;
                    }
                }
            })
            .then((data) => {
            const wishlistID = data.id;
            localStorage.setItem('wishlistID', wishlistID);
        })
        }
    },
    }
</script>

<template>
    <div id="body_container">
        <header>
        <div>
            <a href="/home" id="logo"><strong>Social</strong>Gift</a>
        </div>
    </header>
    <main>
        <section id="navegation-section">
            <a href="javascript:history.back()" class="arrow"> <img href="#" width="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3auUoEURCF4d9xG30FA5cX0FAwFYwFQ3GJNJtAMDUSBBcwNzA2MHTER9EncEBxCdQZdKShbyKo1dCDbdX5oNKGc6Fv3Q1ERERERESkZ/qBKWCYgDaBB6ALtIGjSAOxmwf/WgcEsPNN+KxegCEc2/4hfKoxnGoYwt8CfTi0AXwYBmANh1aBd0P4QxxaAjqG8Mc4tGgMf+Lxv18AXg3hT4Eazszn/fy38Gf5UtiVOeDZEP4cGMCZWeDJEL7pcc0/A9wbwl8BdZyZBu4M4dt5u9v7g8o2XyvAaNnhJ4GWIXxV6gaYKHMALisQqmhlc1ApRowLnapVu6x5qJ5/rPvP6q3MLtSsQKCidUHgSfAaGCdoG1zuRRtMQi+EktBL4ST0ZigJvR1OQh+IJKGPxJLQh6JJ6GPxohcj6zjWMAxAy/N8QPTLUev1+CCBH0jsE8gW8Bj1iUxSi/xISkREREREhKr5BGvcPBacCGFQAAAAAElFTkSuQmCC
            "></a>
            <div id="menu">
                
                <a href="/accountManager">
                    <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                </a>
            </div>
        </section>
        <section>
            <div contentEditable="true" id="name-wishlist">Name for the Wishlist</div>
            <div contentEditable="true" id="description-wishlist">Description for the Wishlist</div>
        </section>
        <section class="chats-dashboard">
            <div id="wishlist-product-list">
                <div id="button-add">
                    <p id="button-add-gift">Add gift</p>
                </div>

                <p id="message-emty">Add the first gift</p>
            </div>
            <div id="wishlist-information">
                
                <div id="wishlist-data-information">
                    <div id="date-start-text">
                        <p id="text-celebration">Celebration day in</p>
                        <p id="instruction">Please use the hyphen to separate</p>
                        <div contentEditable="true" id="information-wishlist-end-date">2023-10-10</div>
                    </div>

                    <div class="information-wishlist-updateble">
                        <div id="information-wishlist">
                            <p id="information-wishlist-text">Items</p>
                            <p id="information-wishlist-numbers">0</p>
                        </div>
                   
                    </div>
                    <div class="save">
                        <button @click="createWishlist" href="#" id="information-wishlist-save-button">Save</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_wishlist.css';
</style>