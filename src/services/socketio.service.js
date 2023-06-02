import { io } from 'socket.io-client';
import { io } from 'socket.io-client';

class SocketioService {
      socket;
      constructor() {}

      setupSocketConnection() {
            this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
      }
}

export default new SocketioService();