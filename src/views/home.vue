<script>
  import divideTokenVue from '../components/divideToken.vue';
  export default {
  data() {
    return {
      friends: [],
      myWishlists: [],
      friendsWishlists: [],
      requests: [],
    };
  },
  methods: {
    async loadFriendsWishlists(idsFriends) {
      const friendsWishlists = [];

      for (var i = 0; i < idsFriends.length; i++) {
        fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${idsFriends[i]}/wishlists`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            switch (response.status) {
              case 401:
                throw new Error('Unauthorized');
              case 500:
                throw new Error('Error getting wishlists');
              default:
                throw new Error('Unknown error');
            }
          }
        })
        .then((data) => {
          console.log("Hola");
          friendsWishlists.push(data);
        })
        .catch((error) => {
          alert(error.message);
        });
      }
      console.log(idsFriends[0]);
      this.friendsWishlists = friendsWishlists;
      console.log("Response: " + this.friendsWishlists);
    },
    async loadFriends() {
      const idsFriends = [];
      const token = localStorage.getItem('token');
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends', {
          method: 'GET',
          headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json',
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
                    alert('Error getting friends');
                    break;
                case 502:
                    alert('Internal Server Error');
                    break;
              }
          }
      })
      .then((friendsData) => {
        friendsData.forEach((friend) => {
          idsFriends.push(friend.id);
        });
      })
      console.log(idsFriends);
      await this.loadFriendsWishlists(idsFriends);
    },
    async acceptRequest(userID) {
      const token = localStorage.getItem('token');
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/${userID}`, {
          method: 'PUT',
          headers: {
              'accept': 'application/json',
              Authorization: `Bearer ${token}`,
          },
      })
      .then((response) => {
          if (response.status === 200) {
              alert('Friend request accepted');
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
                    alert('This user id does not exist');
                    break;
                  case 500:
                    alert('Error accepting friend request');
                    break;
                  case 502:
                    alert('Internal Server Error');
                    break;
              }
          }
      })
    },
    async removeRequest(userID) {
      const token = localStorage.getItem('token');
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/${userID}`, {
          method: 'DELETE',
          headers: {
              'accept': 'application/json',
              Authorization: `Bearer ${token}`,
          },
      })
      .then((response) => {
          if (response.status === 200) {
              alert('Friend request removed');
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
                  case 500:
                    alert('Friend request not removed');
                    break;
                  case 502:
                    alert('Internal Server Error');
                    break;
              }
          }
      })
    },
    showfriends() {
      var x = document.getElementById("hide");

      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    },
    shownotifications() {
      var x = document.getElementById("hide-notifications");

      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    },
    hidenotifications() {
      var x = document.getElementById("hide-notifications");

      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    },
    hidefilters() {
      var x = document.getElementById("hide-filters");

      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
    },
    editWishlist(wishlistID) {
      localStorage.setItem('wishlistID', wishlistID);
      window.location.href = "/wishlist";
    },
    formatDate(date) {
      return date.substring(0, 10);
    },
    executeSearch() {
      //
    },
    search() {
      var searchTerm = document.getElementById("search-bar").value;
      // Aquí puedes agregar la lógica para realizar la búsqueda con el término ingresado
      console.log("Realizando búsqueda: " + searchTerm);
      // Limpia el campo de búsqueda después de ejecutar la búsqueda
      document.getElementById("search-bar").value = "";
    },
  },
  mounted() {
    /*document.addEventListener("DOMContentLoaded", function() {
      var searchForm = document.getElementById("searchForm");

      searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
        executeSearch();
      });
    });*/

    const token = localStorage.getItem('token');
    fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends', {
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
                  alert('Error getting friends');
                  break;
              case 502:
                  alert('Internal Server Error');
                  break;
            }
        }
    })
    .then((friendsData) => {
      this.friends = friendsData;
    })

    const idUser = divideTokenVue.methods.divideToken(token);
    fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${idUser}/wishlists`, {
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
                  alert('Error getting wishlists');
                  break;
            }
        }
    })
    .then((myWishlistsData) => {
      this.myWishlists = myWishlistsData;
    })


    this.loadFriends();

    fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/requests', {
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
                  alert('Error getting friend requests');
                  break;
              case 502:
                  alert('Internal Server Error');
                  break;
            }
        }
    })
    .then((requestsData) => {
      this.requests = requestsData;
    })
  }
}
</script>
<template>
    <div id="body_container">
        <header>
            <section>
                <a href="/home" id="logo"><strong>Social</strong>Gift</a>
            </section>
            <section id="search" >
                <input type="text" id="search-bar" name="search" placeholder="Search.." @keydown.enter="search">
                <div id="menu">
                  <button class="unstyle" @click= "showfriends" >
                    <svg
                    herf=""
                    class="button-menu"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    >
                    <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                    </svg>
                  </button>
                <a href="/newWishlist">
                    <svg
                    herf=""
                    class="button-menu"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M 16.9375 1.0625 L 3.875 14.125 L 1.0742188 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.8375 4.9615 20.9375 3.0625 C 19.0375 1.1625 16.9375 1.0625 16.9375 1.0625 z M 17.3125 2.6875 C 18.3845 2.8915 19.237984 3.3456094 19.896484 4.0214844 C 20.554984 4.6973594 21.0185 5.595 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 L 16.9375 3.0625 L 17.3125 2.6875 z M 4.9785156 15.126953 C 4.990338 15.129931 6.1809555 15.430955 7.375 16.625 C 8.675 17.825 8.875 18.925781 8.875 18.925781 L 8.9179688 18.976562 L 5.3691406 20.119141 L 3.8730469 18.623047 L 4.9785156 15.126953 z"
                    ></path>
                    </svg>
                  </a>
                <a href="/chat">
                    <svg
                    herf=""
                    class="button-menu"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    >
                    <path
                        d="M32,10c13.785,0,25,8.951,25,19.954S45.785,49.907,32,49.907c-0.646,0-1.311-0.022-1.983-0.065	c-7.369,5.504-13.411,6.251-13.672,6.281c-0.076,0.009-0.152,0.013-0.228,0.013c-0.7,0-1.356-0.368-1.72-0.979	c-0.402-0.678-0.369-1.528,0.084-2.172c0.023-0.033,1.966-2.8,4.003-6.234C11.346,43.104,7,36.827,7,29.954	C7,18.951,18.215,10,32,10z M32,45.907c11.579,0,21-7.157,21-15.954S43.579,14,32,14s-21,7.157-21,15.954	c0,5.86,4.242,11.243,11.071,14.046c0.529,0.217,0.939,0.65,1.128,1.19c0.189,0.54,0.138,1.135-0.142,1.634	c-0.749,1.343-1.521,2.635-2.236,3.787c2.061-0.888,4.615-2.27,7.363-4.401c0.398-0.31,0.9-0.458,1.4-0.412	C30.409,45.871,31.222,45.907,32,45.907z"
                    ></path>
                    </svg>
                </a>
                <button class="unstyle" @click= "shownotifications">
                    <svg
                    herf=""
                    class="button-menu"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    >
                    <path
                        d="M 32 10 C 29.662 10 28.306672 11.604938 27.638672 13.085938 C 24.030672 13.809937 17.737984 16.956187 16.958984 24.742188 C 16.665984 29.334188 16.1185 37.883781 13.0625 39.300781 C 12.8505 39.398781 12.655234 39.533219 12.490234 39.699219 C 12.235234 39.954219 10 42.294 10 46 C 10 47.104 10.896 48 12 48 L 25.257812 48 C 25.652433 51.372928 28.522752 54 32 54 C 35.477248 54 38.347567 51.372928 38.742188 48 L 52 48 C 53.104 48 54 47.104 54 46 C 54 42.294 51.764766 39.954219 51.509766 39.699219 C 51.344766 39.534219 51.1495 39.397828 50.9375 39.298828 C 47.8825 37.881828 47.333203 29.333922 47.033203 24.669922 C 46.258203 16.945922 39.966375 13.806984 36.359375 13.083984 C 35.692375 11.603984 34.338 10 32 10 z M 32 14 C 32.603 14 32.766719 14.619859 32.886719 15.255859 C 33.063719 16.190859 33.884422 16.914062 34.857422 16.914062 C 34.931422 16.914063 42.311828 17.650047 43.048828 24.998047 C 43.557828 32.932047 44.389891 40.250797 48.837891 42.716797 C 49.024891 42.956797 49.333937 43.401 49.585938 44 L 14.414062 44 C 14.667063 43.397 14.976203 42.95375 15.158203 42.71875 C 19.609203 40.25475 20.442312 32.935313 20.945312 25.070312 C 21.688313 17.650312 29.068578 16.914062 29.142578 16.914062 C 30.099578 16.914062 30.934375 16.156391 31.109375 15.275391 C 31.232375 14.660391 31.396 14 32 14 z M 29.335938 48 L 34.664062 48 C 34.319789 49.152328 33.262739 50 32 50 C 30.737261 50 29.680211 49.152328 29.335938 48 z"
                    ></path>
                    </svg>
                  </button>
                <a href="/accountManager">
                    <svg
                    herf=""
                    class="button-account"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                    />
                    </svg>
                </a>
                </div>
            </section>
        </header>
        <main>
          <div id="hide">
            <div id="friends">
              <h3 id="title-text-friend">Friends</h3>
              <div v-for="friend in friends" :key="friend.id" class="content-friend">
                  <div id="content-notification-friend">
                    <div id="name-surname-friend">
                      <p id="text-firend-info">{{ friend.name }}</p>
                      <p id="text-firend-info">{{ friend.last_name }}</p>
                    </div>
                    <div >
                      <p id="email-friend">{{ friend.email }}</p>
                    </div>
                  </div>
                  <div >
                    <img id="image-friend-info" :src="friend.image">
                  </div>
                </div>
            </div>
          </div>
          <div id="hide-notifications">
            <div id="notification-tab">
              <button class="unstyle" @click= "hidenotifications">
                <svg id="svg-icon-cross" viewBox="0 0 20 20">
                  <path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                </svg>
              </button>
              <p class="text"><b>New Requests</b></p>
              <div v-for="request in requests" :key="request.id" class="tab-part">
                <div class="profile">
                  <img id="image-friend-info" :src="request.image">
                  <p>{{ request.name }}</p>
                </div>
                <button @click="acceptRequest(request.id)" class="tick">
                  <svg width="10" height="7.5" viewBox="0 0 10 7.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5,4.5 l2.5,2.5 l7.5,-7.5" style="stroke:green; stroke-width:1; fill:none;"/>
                  </svg>
                </button>
                <button @click="removeRequest(request.id)" class="cross">
                  <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="10" y2="10" style="stroke:red; stroke-width:1;"/>
                    <line x1="10" y1="0" x2="0" y2="10" style="stroke:red; stroke-width:1;"/>
                  </svg>
                </button>
              </div>
              <svg viewBox="0 0 290 1">
                <line x1="0" y1="0.5" x2="290" y2="0.5" stroke="#CCCCCC" stroke-width="1" />
              </svg>
              <p class="text"><b>Gifts</b></p>
              <div class="gift">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                </svg>
                <p id="text-notifiaction-gift">Someone Reserved a new gift in Andrea's Party</p>                                            
              </div>
              <div class="gift">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                </svg>
                <p id="text-notifiaction-gift">Someone Reserved a new gift in Andrea's Party</p>                                            
              </div>
              <div class="gift">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                </svg>
                <p id="text-notifiaction-gift">Someone Reserved a new gift in Andrea's Party</p>                                            
              </div>
            </div>
          </div>
          <section>
        <button class="unstyle filters" @click= "hidefilters" >
          <p>Filters</p>
          <svg
            id="icon-filter"
            herf=" "
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 16 16 "
          >
            <path
              d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5
                    0 0 1 .128-.334L13.5 3.308V2h-11z "
            />
          </svg>
        </button>
        <div id="hide-filters">
          <div class="filters-wrap">
            <p  id="filters-text">Ends in:</p>
            <button class="unstyle" id="filters-type-1">24h</button>
            <button class="unstyle" id="filters-type-2">7 days</button>
            <button class="unstyle" id="filters-type-3">1 month</button>
          </div>
        </div>
      </section>

      <!-- Following-->
      <section>
        <div id="title-slider">
          <p><b>Following</b></p>
        </div>
      </section>

      <section id="slider">
        <a href="">
            <div id="icon-left">
                <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                    d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"
                ></path>
                </svg>
            </div>
        </a>
        <div id="slider-wishlists">
          <article>
            <div class="present-cover">
              <div class="text-present">
                <div class="text-title-present">
                  <p>Andrea's Party</p>
                </div>
                <div class="text-time-present">
                  <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                  <p style="margin-top: 0">10days</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div id="icon-right">
          <a href="">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <!-- My Wishlists-->
      <section>
        <div id="title-slider">
          <p><b>My Wishlist</b></p>
        </div>
      </section>
      
      <section id="slider">
        <div id="icon-left">
          <a href="">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"
              ></path>
            </svg>
          </a>
        </div>
        <div v-for="myWishlist in myWishlists" :key="myWishlist.id" id="slider-wishlists">
          <article>
            <div class="present-cover">
              <div class="text-present">
                <div class="text-title-present">
                  <p>{{ myWishlist.name }}</p>
                </div>
                <div class="text-time-present">
                  <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                  <p style="margin-top: 0"> {{ formatDate(myWishlist.end_date) }}</p>
                </div>
                <a href="" class="button_share">Share</a>
                <button @click="editWishlist(myWishlist.id)" class="button_share">Edit</button>
              </div>
            </div>
          </article>
        </div>
        <!--<div id="slider-wishlists">
          <article>
            <div class="present-cover">
              <div class="text-present">
                <div class="text-title-present">
                  <p>Andrea's Party</p>
                </div>
                <div class="text-time-present">
                  <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                  <p style="margin-top: 0">10days</p>
                </div>
                <a href="" class="button_share">Share</a>
              </div>
            </div>
          </article>
          <article>
            <div class="present-cover">
              <div class="text-present">
                <div class="text-title-present">
                  <p>Andrea's Party</p>
                </div>
                <div class="text-time-present">
                  <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                  <p style="margin-top: 0">10days</p>
                </div>
                <a href="" class="button_share">Share</a>
              </div>
            </div>
          </article>
          <article>
            <div class="present-cover">
              <div class="text-present">
                <div class="text-title-present">
                  <p>Andrea's Party</p>
                </div>
                <div class="text-time-present">
                  <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                  <p style="margin-top: 0">10days</p>
                </div>
                <a href="" class="button_share">Share</a>
              </div>
            </div>
          </article>

          <article>
            <div class="present-cover">
              <div class="text-present">
                <div class="text-title-present">
                  <p>Andrea's Party</p>
                </div>
                <div class="text-time-present">
                  <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                  <p style="margin-top: 0">10days</p>
                </div>
                <a href="" class="button_share">Share</a>
              </div>
            </div>
          </article>
        </div>-->
        <div id="icon-right">
          <a href="">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </main>
    <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_home.css';
</style>