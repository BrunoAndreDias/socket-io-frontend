import socketIOClient from "socket.io-client";

const endpoint = process.env.REACT_APP_API_URL

export function SocketCommunication() {
  return socketIOClient(endpoint);
}
