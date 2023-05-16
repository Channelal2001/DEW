<script>
export default {
  data() {
    return {
        gifts: [],
    };
  },
  methods: {
    async editWishlist() {
        const name = document.getElementById('name-wishlist').innerHTML;
        const description = document.getElementById('description-wishlist').innerHTML;
        const endDate = document.getElementById('information-wishlist-end-date').innerHTML;
        const creationDate = document.getElementById('information-wishlist-creation-date').innerHTML;
        const wishlist = {
            name: name,
            description: description,
            end_date: endDate,
            creation_date: creationDate,
        }
        const token = localStorage.getItem('token');
        fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists`, {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wishlist),
        })
        .then((response) => {
            if (response.status === 201) {
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

      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    },
    showWhislistInfo() {
      var x = document.getElementById("hide-wishlist-data");

      if (x.style.display === "none") {
          x.style.display = "block";
        
      } else {
          x.style.display = "none";
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
                        <button @click="deleteWishlist" href="#" id="button-delete-text">Delete</button>
                        
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
                    <div>
                        <div class="image-name-new-gift">
                            <svg href="#" class="image-icon-wishlist" viewBox="0 0 20 20">
                            <path d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645"></path>
                            </svg>
                            <p id="name-new-gift">iPhone 14 Pro ultra</p>
                        </div>
                        <p id="description-neuw-gift">Description product Description product Description product Description product Description product</p>
                        <p id="text-link-gift">Website to find it</p>
                    </div>
                    <div id="navegation-gift">
                        <a href="/wishlistMoving" id="button-move">Move</a>
                        <a href="" id="button-delete">Delete</a>
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