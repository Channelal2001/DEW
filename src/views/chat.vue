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
                    <div>
                        <h4>Search...</h4>
                    </div>
                    <div id="icon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                    </div>
                </div>
                <div class="messages-box">
                    <div class="chat-user">
                        <img id="image-user" src="/src/assets/images/chat-image-user.png " alt="image-chat-user ">
                        <div id="box-message-chat">
                            <p id="user-chat">Alessandro Sadney</p>
                            <p id="message-text">Hi! I’m some grateful for your present!!!!</p>
                        </div>
                        <p id="notifications">2</p>
                    </div>
                    <div class="chat-user">
                        <img id="image-user" src="/src/assets/images/chat-image-user.png " alt="image-chat-user ">
                        <div id="box-message-chat">
                            <p id="user-chat">Alessandro Sadney</p>
                            <p id="message-text">Hi! I’m some grateful for your present!!!!</p>
                        </div>
                        <p id="notifications">2</p>
                    </div>
                    <div class="chat-user">
                        <img id="image-user" src="/src/assets/images/chat-image-user.png " alt="image-chat-user ">
                        <div id="box-message-chat">
                            <p id="user-chat">Alessandro Sadney</p>
                            <p id="message-text">Hi! I’m some grateful for your present!!!!</p>
                        </div>
                        <p id="notifications">2</p>
                    </div>
                </div>
            </div>
            <section class="chat-open">
                <div id="name-user-chat">
                    <p id="user-name">Alessandro Sadany</p>
                </div>
                <div class="messages">

                </div>
                <div id="text-imput">
                    <p id="text-imput-chat">Type your message here...</p>
                    <div href="#" id="icon-send-back">
                        <svg id="icon-send " xmlns="http://www.w3.org/2000/svg " width="16 " height="16 " fill="currentColor " class="bi bi-send " viewBox="0 0 16 16 "> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643
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