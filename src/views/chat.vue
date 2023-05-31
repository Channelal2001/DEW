<script>
import divideTokenVue from '../components/divideToken.vue';
export default {
  data() {
    return {
      users: [],
      messages: [],
    };
  },
  methods: {
    async getUsername(userID) {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${userID}`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          return data.name;
        } else {
          switch (response.status) {
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
      } catch (error) {
        throw new Error('Error occurred while fetching username');
      }
    },
    async showMessages(userID) {
      const token = localStorage.getItem('token');
      localStorage.setItem('userID', userID);
      try {
        const response = await fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages/${userID}`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const mensaje = [];
          const messagesData = await response.json();
          for (const message of messagesData) {
            const username = await this.getUsername(message.user_id_send);
            mensaje.push({
              username: username,
              content: message.content,
            });
          }
          // TODO: Crida a la funció per obtenir el nom de l'usuari amb qui es parla i substituir-ho el valor de l'id user-name
          const username = await this.getUsername(userID);
          document.getElementById('user-name').innerHTML = username;
          this.messages = mensaje;
        } else {
          switch (response.status) {
            case 401:
              alert('Unauthorized');
              break;
            case 410:
              alert('There is no user with that id');
              break;
            case 500:
              alert('Error getting messages between the identified user and the authenticated user');
              break;
            case 502:
              alert('Internal Server Error');
              break;
          }
        }
      } catch (error) {
        throw new Error('Error occurred while fetching messages');
      }
    },
    sendMessage() {
      const token = localStorage.getItem('token');
      const content = document.getElementById('text-input-chat').value;
      const userSenderID = divideTokenVue.methods.divideToken(token);
      const userReceiverID = localStorage.getItem('userID');
      const message = {
        content: content,
        user_id_send: userSenderID,
        user_id_recived: userReceiverID,
      }
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
      .then((response) => {
        if (response.status === 201) {
          alert('Message sent');
          return response.json();
        } else {
          switch (response.status) {
            case 401:
              alert('Unauthorized');
              break;
            case 500:
              alert('Error sending message');
              break;
            case 502:
              alert('Internal Server Error');
              break;
          }
        }
      })
    },
    searchUsers() {
      const searchTerm = document.getElementById("search-input").value;
      const token = localStorage.getItem('token');
      fetch(`https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s=${searchTerm}`, {
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
              alert('Error getting list of found users');
              break;
            case 502:
              alert('Internal Server Error');
              break;
          }
        }
      })
      .then((usersData) => {
        this.users = usersData;
      })
      document.getElementById("search-input").value = "";
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages/users', {
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
          case 401:
            alert('Unauthorized');
            break;
          case 500:
            alert('Error getting friends list');
            break;
          case 502:
            alert('Internal Server Error');
            break;
        }
      }
    })
    .then((usersData) => {
      this.users = usersData;
    })
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
            <p id="messages-text">Messages</p>
        </section>
        <section class="chats-dashboard">
            <div id="chat-open">
                <div id="search-bar">
                  <input id="search-input" type="text" name="search" placeholder="Search..." @keydown.enter="searchUsers">
                </div>
                <div class="messages-box">
                    <button @click="showMessages(user.id)" v-for="user in users" :key="user.id" class="chat-user">
                        <img id="image-user" :src="user.image" alt="image-chat-user ">
                        <div id="box-message-chat">
                            <p id="user-chat">{{ user.name }}</p>
                            <!--<p id="message-text">Hi! I’m some grateful for your present!!!!</p>-->
                        </div>
                    </button>
                </div>
            </div>
            <section class="chat-open">
                <div class="chat-box">
                  <div id="name-user-chat">
                      <p id="user-name">Alessandro Sadany</p>
                  </div>
                  <div class="messages">
                    <div v-for="message in messages" :key="message.id">
                      <p id="message-text">{{ message.username }}: {{ message.content }}</p>
                    </div>
                  </div>
                </div>
                <div id="text-input">
                    <input id="text-input-chat" type="text" name="search" placeholder="Type your message here...">
                    
                    <div @click="sendMessage" id="icon-send-back">
                        <svg id="icon-send " xmlns="http://www.w3.org/2000/svg" width="16 " height="16 " fill="currentColor " class="bi bi-send " viewBox="0 0 16 16 "> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643
                        7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z " fill="white "></path> </svg>
                    </div>
                </div>
            </section>
        </section>

    </main>
    <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_chat.css';
</style>