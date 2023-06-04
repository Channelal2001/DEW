<script>
import divideTokenVue from '../components/divideToken.vue';
import io from 'socket.io-client';
export default {
  data() {
    return {
      users: [],
      messages: [],
    };
  },
  methods: {
    /**
     * Get the username of the user with the given ID
     * @param userID
     * @returns {Promise<*>}
     */
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

    /**
     * Get the messages between the authenticated user and the user with the given ID
     * @param userID
     * @returns {Promise<void>}
     */
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
          var x = document.getElementById("hide-messages");

          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
          for (const message of messagesData) {
            const username = await this.getUsername(message.user_id_send);
            mensaje.push({
              username: username,
              content: message.content,
            });
          }
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

    /**
     * Send a message to the user with the given ID
     */
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
      this.socket.emit("query_user", JSON.stringify(message));
      this.socket.emit("send_msg", JSON.stringify(message));
    },

    /**
     * Search users by name
     */
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
    // All socket.io code
    const token = localStorage.getItem('token');
    this.socket = io("https://balandrau.salle.url.edu", {path: "/i3/socialgift/socket.io"});

    if (this.socket) {
      console.error("mySocket is not null and not undefined");
      this.socket.on('connect', () => {
        console.log("Connected to server");
        console.log(this.socket.id);
        this.socket.emit("login", `${token}`);
        //this.socket.emit("login", JSON.stringify({"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIxLCJlbWFpbCI6ImFkbWluc0BnbWFpbC5jb20iLCJpYXQiOjE2ODU2OTc3Mzl9.34S-_iU06GeaObnPqCJkugi2czCeMXquj05XgIqnwXY"}));
      });

      this.socket.on("save_msg", async (saveMsg) => {
        const message = {
          username: await this.getUsername(divideTokenVue.methods.divideToken(token)),
          content: document.getElementById('text-input-chat').value
        }
        this.messages.push(message);
        document.getElementById("text-input-chat").value = "";
        console.log("Mensaje recibido: " + saveMsg);
      });

      this.socket.on("send_msg", (sendMsg) => {
        console.log("sendMsg => " + sendMsg )
      });

      this.socket.on("query_user", (queryUser) => {
        console.log("queryUser => " + queryUser )

      });

      this.socket.on("historic_msg", (historicMsg) => {
        console.log("historicMsg => " + historicMsg )
      });

      this.socket.on("new_msg", async (newMsg) => {
        const messageParts = newMsg.split('"');
        const idParts = messageParts[6].split(':');
        const idParts2 = idParts[1].split(',');
        const id = idParts2[0];
        const message = {
          username: await this.getUsername(id),
          content: messageParts[3]
        };
        this.messages.push(message);
        console.log("newMsg => " + newMsg )
      });

      this.socket.on("connect_error", (error) => {
        console.log("TransportError:", error);
      });

      this.socket.on("login", (login) => {
        console.log("login => " + login )
      });

      this.socket.on("disconnect", (reason) => {
        console.log("disconnect:");
        setTimeout(() => {
          this.socket.connect();
        }, 1000);
      });
    } else {
      console.error("mySocket is null or undefined");
    }

    // Get all users with whom the user has chatted
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
                        </div>
                    </button>
                </div>
            </div>
            <div id="hide-messages">
              <section class="chat-open">
                  <div class="chat-box">
                    <div id="name-user-chat">
                        <p id="user-name"></p>
                    </div>
                    <div class="messages">
                      <div  v-for="message in messages" :key="message.id">
                        <p id="message-name">{{ message.username }}</p>
                        <p id="message-text">{{ message.content }}</p>
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
            </div>
        </section>
    </main>
    <footer></footer>
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_chat.css';
</style>