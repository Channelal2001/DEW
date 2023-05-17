<script>
import divideTokenVue from '../components/divideToken.vue';

export default {
  data() {
    return {
        gifts: [],
    };
  },
  methods: {
    async editWishlist() {
        const wishlistID = localStorage.getItem('wishlistID');
        const token = localStorage.getItem('token');
        const name = document.getElementById('name-wishlist').innerHTML;
        const description = document.getElementById('description-wishlist').innerHTML;
        const userID = divideTokenVue.methods.divideToken(token);
        const creationDate = document.getElementById('information-wishlist-creation-date').innerHTML;
        const endDate = document.getElementById('information-wishlist-ending-date').innerHTML;
        const wishlist = {
            name: name,
            description: description,
            user_id: userID,
            gifts: this.gifts,
            creation_date: creationDate,
            end_date: endDate,
        }
        fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistID}`, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wishlist),
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Wishlist edited');
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
                    case 410:
                        alert('No wishlist has been edited');
                        return;
                }
            }
        })
    },
    async deleteWishlist() {
        const token = localStorage.getItem('token');
        const wishlistID = localStorage.getItem('wishlistID');
        fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistID}`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Wishlist removed');
                window.location.href = "/newWishlist";
                return response.json();
            } else {
                switch(response.status) {
                    case 401:
                        alert('Unauthorized');
                        break;
                    case 500:
                        alert('The wishlist has not deleted');
                        break;
                    case 502:
                        alert('Internal server error');
                        break;
                }
            }
        })
    },
    hideWhislistInfo() {
      var x = document.getElementById("wishlist-data-information");
        var y = document.getElementById("hide-wishlist-data");

      if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
      } else {
          x.style.display = "none";
          y.style.display = "block";
      }
    },
    
    hideFirstGiftMessage(numberOfItems) {
        var x = document.getElementById("message-empty");
        if (numberOfItems > 0) {
            x.display = "none";
        } else {
            x.display = "block";
        }
    },
    showLink{},
  },
  mounted() {
    const token = localStorage.getItem('token');
    const wishlistID = localStorage.getItem('wishlistID');
    fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistID}`, {
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
                    alert('Wishlist not found');
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
    .then((wishlistData) => {
        document.getElementById('name-wishlist').innerHTML = wishlistData.name;
        document.getElementById('description-wishlist').innerHTML = wishlistData.description;
        document.getElementById('information-wishlist-ending-date').innerHTML = wishlistData.end_date.substring(0, 10);
        document.getElementById('information-wishlist-creation-date').innerHTML = wishlistData.creation_date.substring(0, 10);
        document.getElementById('information-wishlist-numbers').innerHTML = wishlistData.gifts.length;
        this.gifts = wishlistData.gifts;
    })
  }
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
            <a href="javascript:history.back()"><div class="arrow"> 
                <img  width="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3auUoEURCF4d9xG30FA5cX0FAwFYwFQ3GJNJtAMDUSBBcwNzA2MHTER9EncEBxCdQZdKShbyKo1dCDbdX5oNKGc6Fv3Q1ERERERESkZ/qBKWCYgDaBB6ALtIGjSAOxmwf/WgcEsPNN+KxegCEc2/4hfKoxnGoYwt8CfTi0AXwYBmANh1aBd0P4QxxaAjqG8Mc4tGgMf+Lxv18AXg3hT4Eazszn/fy38Gf5UtiVOeDZEP4cGMCZWeDJEL7pcc0/A9wbwl8BdZyZBu4M4dt5u9v7g8o2XyvAaNnhJ4GWIXxV6gaYKHMALisQqmhlc1ApRowLnapVu6x5qJ5/rPvP6q3MLtSsQKCidUHgSfAaGCdoG1zuRRtMQi+EktBL4ST0ZigJvR1OQh+IJKGPxJLQh6JJ6GPxohcj6zjWMAxAy/N8QPTLUev1+CCBH0jsE8gW8Bj1iUxSi/xISkREREREhKr5BGvcPBacCGFQAAAAAElFTkSuQmCC
            ">
        </div>
    </a>
            <div id="menu">
             
                <a href="/accountManager">
                    <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                </a>
            </div>
        </section>
        <section>
            <p contentEditable="true" id="name-wishlist">Name for the Wishlist</p>
            <p contentEditable="true" id="description-wishlist">Description for the Wishlist</p>
        </section>
        <section class="chats-dashboard">
            <div id="wishlist-product-list">
                <div id="button-add">
                    <p @click= "hideWhislistInfo" id="button-add-gift">Add gift</p>
                </div>
                <div v-for="gift in gifts" :key="gift.id" class="chat-user-moving">
                    <img id="image-user" src="/src/assets/images/chat-image-user.png " alt="image-chat-user ">
                    <div id="box-message-gift">
                        <p id="user-chat">iPhone 14 Pro ultra</p>
                        <p id="message-text">Description</p>
                    </div>
                    <a href="/wishlistGiftReserved" id="notifications">Reserve</a>
                </div>
                <p id="message-emty">Add the first gift</p>
            </div>
            <div id="wishlist-information">
                <div id="wishlist-data-information">
                    <div id="date-start-text">
                        <p id="text-celebration">Celebration day in</p>
                        <p contentEditable="true" id="information-wishlist-ending-date">15/12/23</p>
                    </div>

                    <div class="information-wishlist-updateble">
                        <div id="information-wishlist">
                            <p id="information-wishlist-text">Items</p>
                            <p id="information-wishlist-numbers">0</p>
                        </div>
                        <div id="information-wishlist">
                            <p id="information-wishlist-text">Created</p>
                            <p contentEditable="true" id="information-wishlist-creation-date">11/12/23</p>
                        </div>
                    </div>
                    <div class="button-delete">
                        <button @click="deleteWishlist" id="button-delete-text">Delete</button>
                        <button @click="editWishlist" id="information-wishlist-save-button">Save</button>
                    </div>
                </div>
                <div id="hide-wishlist-data">
                        <div id="wishlist-information">
                    <div class="celebration-date-box">
                        <p id="text-celebration-box">Celebration day in</p>
                        <p id="information-wishlist-numbers-box">10 days 2h 11 min</p>
                    </div>

                    <div id="wishlist-data-information">
                        <div class="buttons-navegation-new-gift">
                            <a href="/wishlist">
                                <svg id="svg-icon-cross" viewBox="0 0 20 20">
                                    <path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                </svg>
                            </a>
                            <a href="/wishlist" id="button-add">Add</a>
                        </div>
                        <div>
                            <div class="image-name-new-gift">
                                
                                <p contenteditable="true" id="name-new-gift">Name of the gift</p>
                            </div>
                            <p id="description-neuw-gift">Description product Description product Description product Description product Description product</p>
                        </div>
                        <div class="buttons-source">
                            <p>Add to find it:</p>
                            <div class="buttons-source-gift">
                                <p @click="showLink" id="button-add-link">Add link</p>
                                <p href="#" id="button-mercado-expres">Mercado expres</p>
                                <p href="#" id="button-amazon">Amazon</p>
                            </div>
                        </div>
                    </div>
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