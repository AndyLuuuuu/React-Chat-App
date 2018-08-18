const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");
const uuid = require("uuid");

const port = process.env.PORT || 4001;

// For heroku build
app.use(express.static(path.join(__dirname, "/socket-client/build")));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "./index.html");
});

// Current rooms
let currentRooms = [];

setInterval(() => {
  currentRooms = [];
}, 3600000);

const checkDuplicate = roomName => {
  currentRooms.map(room => {
    if (room === roomName) {
      return true;
    } else {
      return false;
    }
  });
};

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("RETRIEVE_ROOMS", () => {
    socket.emit("RETRIEVE_ROOMS", [...currentRooms]);
    console.log(currentRooms);
  });

  socket.on("CREATE_ROOM", roomInfo => {
    if (checkDuplicate(roomInfo.roomName)) {
      socket.join(roomInfo.roomName);
    } else {
      currentRooms.push({ id: roomInfo.id, room: roomInfo.roomName });
      socket.join(roomInfo.roomName);
      console.log(currentRooms);
    }
  });

  socket.on("JOINED_ROOM", ({ username, roomName }) => {
    if (username) {
      io.to(roomName).emit("SUCCESSFUL_JOIN", {
        id: uuid(),
        roomName: roomName,
        user: username,
        message: `${username} has joined the chat.`
      });
    }
  });

  socket.on("JOIN_A_ROOM", ({ username, roomName }) => {
    if (username && roomName) {
      socket.join(roomName);
      io.to(roomName).emit("SUCCESSFUL_JOIN", {
        id: uuid(),
        roomName: roomName,
        user: username,
        message: `${username} has joined the chat.`
      });
    }
  });

  // On client-side send message
  socket.on("SEND_MESSAGE", data => {
    console.log(data);
    // // Check if id, username and message are present
    if (data.id !== "" && data.user !== null && data.message !== "") {
      io.to(data.roomName).emit("RECEIVE_MESSAGE", {
        id: data.id,
        user: data.user,
        message: `${data.user} says "${data.message}"`
      });
    }
  });

  socket.on("disconnect", data => {
    console.log(data);
  });
});

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
