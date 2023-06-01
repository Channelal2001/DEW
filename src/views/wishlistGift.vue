<script>
export default {
  data() {
    return {
      gifts: [],
    };
  },
  methods: {
    showProductInformation(productURL) {
      fetch(productURL, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          switch (response.status) {
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
      .then(productData => {
        document.getElementById('name-new-gift').innerHTML = productData.name;
        document.getElementById('description-new-gift').innerHTML = productData.description;
        document.getElementsByClassName("image-icon-wishlist-user")[0].src = productData.photo;
        this.showProductPanel();
      })
    },
    unreservedGift(giftID) {
        const token = localStorage.getItem('token');
        fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/${giftID}/book/`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Gift unreserved');
                window.location.href = "/wishlistGift";
                return response.json();
            } else {
                switch(response.status) {
                    case 401:
                        alert('Unauthorized');
                        break;
                    case 500:
                        alert('The reservation has not been canceled');
                        break;
                    case 502:
                        alert('Internal Server Error');
                        break;
                }
            }
        })
    },
    showProductPanel() {
      var x = document.getElementById("gift-information");

      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
    reserveGift(giftId) {
      const token = localStorage.getItem('token');
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/${giftId}/book`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          alert('The gift has been reserved');
          window.location.href = "/wishlistGift";
          return response.json();
        } else {
          switch (response.status) {
            case 204:
              alert('Product not found');
              break;
            case 400:
              alert('Bad request');
              break;
            case 406:
              alert('Missing parameters');
              break;
            case 409:
              alert('The reservation has been previously registered');
              break;
            case 500:
              alert('The gift reserve has not been created');
              break;
            case 502:
              alert('Internal Server Error');
              break;
          }
        }
      })
    }
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
      document.getElementById('name-wishlist').innerHTML = wishlistData.name;
      document.getElementById('description-wishlist').innerHTML = wishlistData.description;
      // TODO: S'ha de modificar la sortida d'aquesta data perque mostri els dies, hores minuts que falten per la finalització de la wishlist
      document.getElementById('information-wishlist-numbers-box').innerHTML = wishlistData.end_date.substring(0, 10);
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
                <div v-for="gift in gifts" :key="gift.id" class="chat-user">
                  <div id="box-message-gift">
                    <p id="user-chat">Priority: {{ gift.priority }}</p>
                    <p id="message-text">{{ gift.product_url }}</p>
                    <svg v-if="gift.booked === 1" width="100" height="75" viewBox="0 0 100 75">
                      <image xlink:href="../assets/images/gift_box.svg" width="100" height="75" />
                    </svg>
                    <button @click="showProductInformation(gift.product_url)" id="button-see-more">See more</button>
                  </div>
                  <div class="butons-reserve">
                  <button @click="reserveGift(gift.id)" id="notifications">Reserve</button>
                  <button @click="unreservedGift(gift.id)" id="button-delete-unreserve">Unreserve</button>
                  </div>
                </div>
            </div>
            <div id="wishlist-information">
                <div class="celebration-date-box">
                    <p id="text-celebration-box">Celebration day</p>
                    <p id="information-wishlist-numbers-box">10 days 2h 11 min</p>
                </div>
                <div id="gift-information">
                    <div class="image-name-new-gift">
                        <img class="image-icon-wishlist-user" src="something.png" alt="image-gift">
                        <p id="name-new-gift">iPhone 14 Pro ultra</p>
                    </div>
                    <p id="description-new-gift">Product description</p>
                    
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