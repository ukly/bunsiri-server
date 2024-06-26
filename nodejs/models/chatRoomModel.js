const mongoose = require("mongoose");

// chatRoomShema
const chatRoomSchema = new mongoose.Schema({
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board",
        required: true
    },
    boardOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    sendNickname: {
        type: String
    },
    isRewarded: {
        type: Boolean,
        default: false
    },
    lastChat: {
        type: String
    },
    lastChatTime: {
        type: Date,
    }
});

// ChatRoom model 생성
const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;
