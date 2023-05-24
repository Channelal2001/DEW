<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    loadProducts(gifts) {
      gifts.forEach((gift) => {
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
        .then((productsData) => {
          this.products.push(productsData);
        })
      })
    },
  },
  mounted() {
    let gifts = [];
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
        switch (response.status) {
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
      console.log(wishlistData);
      document.getElementById('name-wishlist').innerHTML = wishlistData.name;
      document.getElementById('description-wishlist').innerHTML = wishlistData.description;
      // TODO: S'ha de modificar la sortida d'aquesta data perque mostri els dies, hores minuts que falten per la finalització de la wisghlist
      document.getElementById('information-wishlist-numbers-box').innerHTML = wishlistData.end_date.substring(0, 10);
      gifts = wishlistData.gifts;
      this.loadProducts(gifts);
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
            <div class="arrow"> 
                <a href="javascript:history.back()"> 
                <img href="#" width="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3auUoEURCF4d9xG30FA5cX0FAwFYwFQ3GJNJtAMDUSBBcwNzA2MHTER9EncEBxCdQZdKShbyKo1dCDbdX5oNKGc6Fv3Q1ERERERESkZ/qBKWCYgDaBB6ALtIGjSAOxmwf/WgcEsPNN+KxegCEc2/4hfKoxnGoYwt8CfTi0AXwYBmANh1aBd0P4QxxaAjqG8Mc4tGgMf+Lxv18AXg3hT4Eazszn/fy38Gf5UtiVOeDZEP4cGMCZWeDJEL7pcc0/A9wbwl8BdZyZBu4M4dt5u9v7g8o2XyvAaNnhJ4GWIXxV6gaYKHMALisQqmhlc1ApRowLnapVu6x5qJ5/rPvP6q3MLtSsQKCidUHgSfAaGCdoG1zuRRtMQi+EktBL4ST0ZigJvR1OQh+IJKGPxJLQh6JJ6GPxohcj6zjWMAxAy/N8QPTLUev1+CCBH0jsE8gW8Bj1iUxSi/xISkREREREhKr5BGvcPBacCGFQAAAAAElFTkSuQmCC
            ">
        </a>
    </div>
            <div id="menu">
               
                <a href="/accountManager">
                    <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                </a>
            </div>
        </section>
        <section>
            <p id="name-wishlist">Name for the Wishlist</p>
            <p id="description-wishlist">Name for the Wishlist</p>
        </section>
        <section class="chats-dashboard">
            <div id="wishlist-product-list">
                <!-- TODO: Quan es cliqui aquest botó s'ha de mostrar el panell amb la informació del producte -->
                <button @click="" v-for="product in products" :key="product.id" class="chat-user-moving">
                    <img id="image-user" :src="product.photo" alt="image-chat-user ">
                    <div id="box-message-gift">
                        <p id="user-chat">{{ product.name }}</p>
                        <p id="message-text">{{ product.description }}</p>
                    </div>
                    <a href="/wishlistGiftReserved" id="notifications">Reserve</a>
                </button>
            </div>
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
                        <p id="description-new-gift">Product description</p>
                        <p id="text-link-gift">Website to find it</p>
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