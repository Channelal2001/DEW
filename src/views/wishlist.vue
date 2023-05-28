<script>
import divideTokenVue from '../components/divideToken.vue';

export default {
  data() {
    return {
      gifts: [],
      wishlists: [],
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
                window.location.href="/wishlist";
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
    async deleteGift() {
        const token = localStorage.getItem('token');
        const giftID = localStorage.getItem('giftID');
        fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/${giftID}`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Gift removed');
                window.location.href = "/wishlist";
                return response.json();
            } else {
                switch(response.status) {
                    case 401:
                        alert('Unauthorized');
                        break;
                    case 500:
                        alert('The Gift has not deleted');
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
    showWhislistInfo() {
        var x = document.getElementById("wishlist-data-information");
        var y = document.getElementById("hide-wishlist-data");

        if (x.style.display === "block") {
            x.style.display = "none";
            y.style.display = "block";
        } else {
            x.style.display = "block";
            y.style.display = "none";
        }
    },
    showLinks(){
        var x = document.getElementById("hide-links");
        if (x.style.display === "block") {
          x.style.display = "none";
       
        } else {
          x.style.display = "block";
          
      }
    },
    showMovingPanel(){
        var x = document.getElementById("hide-moving");
        var y = document.getElementById("hide-info");
        if (x.style.display === "block") {
          x.style.display = "none";
          y.style.display = "block";
       
        } else {
          x.style.display = "block";
          y.style.display = "none";
      }
    },
    loadProduct(gift) {
      localStorage.setItem('giftID', gift.id);
      fetch(gift.product_url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          switch(response.status) {
            case 204:
              alert('Product not found');
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
      .then((productData) => {
        document.getElementById('name-gift').innerHTML = productData.name;
        document.getElementById('description-gift').innerHTML = productData.description;
        document.getElementsByClassName('image-icon-wishlist-user')[0].src = productData.photo;
        this.showMovingPanel();
      })
    },
    moveWishlist(wishlist) {
      const token = localStorage.getItem('token');
      const giftID = localStorage.getItem('giftID');
      const wishlistID = wishlist.id;
      const productURL = wishlist.gifts.product_url;
      const priority = wishlist.gifts.priority;
      const booked = wishlist.gifts.booked;
      const gift = {
        wishlist_id: wishlistID,
        product_url: productURL,
        priority: priority,
        booked: booked,
      }
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/${giftID}`, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gift),
      })
      .then((response) => {
        if (response.status === 200) {
          alert('Gift moved');
          window.location.href = "/wishlist";
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
              alert('The gift has not been moved');
              break;
          }
        }
      })
      .then((productData) => {
        document.getElementById('name-gift').innerHTML = productData.name;
        document.getElementById('description-gift').innerHTML = productData.description;
        document.getElementsByClassName('image-icon-wishlist-user')[0].src = productData.photo;
        this.showMovingPanel();
      })
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
        document.getElementById('information-wishlist-numbers-box').innerHTML = wishlistData.end_date.substring(0, 10);
        this.gifts = wishlistData.gifts;
    })

    const userID = divideTokenVue.methods.divideToken(token);
    fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${userID}/wishlists`, {
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
          case 401:
            alert('Unauthorized');
            break;
          case 500:
            alert('Error getting all wishlists');
            break;
        }
      }
    })
    .then((wishlistsData) => {
      this.wishlists = wishlistsData;
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
            <a href="javascript:history.back()">
                <div class="arrow"> 
                    <img width="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3auUoEURCF4d9xG30FA5cX0FAwFYwFQ3GJNJtAMDUSBBcwNzA2MHTER9EncEBxCdQZdKShbyKo1dCDbdX5oNKGc6Fv3Q1ERERERESkZ/qBKWCYgDaBB6ALtIGjSAOxmwf/WgcEsPNN+KxegCEc2/4hfKoxnGoYwt8CfTi0AXwYBmANh1aBd0P4QxxaAjqG8Mc4tGgMf+Lxv18AXg3hT4Eazszn/fy38Gf5UtiVOeDZEP4cGMCZWeDJEL7pcc0/A9wbwl8BdZyZBu4M4dt5u9v7g8o2XyvAaNnhJ4GWIXxV6gaYKHMALisQqmhlc1ApRowLnapVu6x5qJ5/rPvP6q3MLtSsQKCidUHgSfAaGCdoG1zuRRtMQi+EktBL4ST0ZigJvR1OQh+IJKGPxJLQh6JJ6GPxohcj6zjWMAxAy/N8QPTLUev1+CCBH0jsE8gW8Bj1iUxSi/xISkREREREhKr5BGvcPBacCGFQAAAAAElFTkSuQmCC">
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
               
                <!-- TODO: Quan s'arribi a aquella part s'ha de poder moure el regal de wishlist. S'haurà de poder seleccionar a quina wishlist es vol moure -->
                <button @click="loadProduct(gift)" v-for="gift in gifts" :key="gift.id" class="chat-user-moving">
                  <div id="box-message-gift">
                    <p id="user-chat">Priority: {{ gift.priority }}</p>
                    <p id="message-text">{{ gift.product_url }}</p>
                  </div>
                </button>
                <div id="hide-text">
                    <p id="message-emty">Add the first gift</p>
               </div>
            </div>
            <div id="wishlist-information">
                <div id="hide-info">
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
                </div>
                <div id="hide-wishlist-data">
                  <div id="wishlist-information">
                    <div class="celebration-date-box">
                        <p id="text-celebration-box">Celebration day in</p>
                        <p id="information-wishlist-numbers-box">10 days 2h 11 min</p>
                    </div>

                    <div id="wishlist-data-information">
                        <div class="buttons-navegation-new-gift">
                            <div @click="showWhislistInfo">
                                <svg id="svg-icon-cross" viewBox="0 0 20 20">
                                    <path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                </svg>
                            </div>
                            <!-- TODO: Afegir un mètode al @click per afegir el regal a la api -->
                            <a @click="hideFirstGiftMessage" id="button-add">Add</a>
                           
                        </div>
                        <div>
                            <input id="name-new-gift" type="text" name="search" placeholder="Add a wishlist id">
                            <input id="description-new-gift" type="text" name="search" placeholder="Add a product url">
                            <input id="box-link" type="text" name="search" placeholder="Add a priority for the gift">
                        </div>
                        <div class="buttons-source">
                            <p id="add-links" @click="showLinks" >Add a photo</p>
                            <div id="hide-links">
                                <div class="buttons-source-gift">
                                    <input id="box-link" type="text" name="search" placeholder="Add a link...">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hide-moving">
                <div class="wishlist-moving-info">
                        <div class="buttons-navegation-new-gift">
                            <!-- TODO: Quan s'apreti aquest botó s'ha de tancar la pestanya per moure el regal -->
                            <a @click="showMovingPanel">
                                <svg id="svg-icon-cross-friends" viewBox="0 0 20 20">
                                    <path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="image-name-new-gift">
                          <img class="image-icon-wishlist-user" src="something.png" alt="image-gift">
                          <p id="name-gift">iPhone 14 Pro ultra</p>
                        </div>
                        <p id="description-gift">Product description</p>
                        <button @click="deleteGift" id="button-delete-product">Delete</button>
                        <p id="text-list-wishlist">Where you want to move</p>
                        <div v-for="wishlist in wishlists" :key="wishlist.id" id="lists">
                            <p id="name-wishlist-move">{{ wishlist.name }}</p>
                            <!-- TODO: Quan s'apreti aquest botó s'ha de tancar la pestanya per moure el regal i s'ha de moure el regal. Es posarà la funció showMovingPanel dins de la funció que s'hagi creat per moure el regal -->
                            <a @click="moveWishlist(wishlist)" id="move-button">Move</a>
                        </div>
                        <!-- TODO: Quan s'apreti aquest botó s'ha de tancar la pestanya per moure el regal -->
                        <a @click="showMovingPanel" id="cancel-button">Cancel</a>
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