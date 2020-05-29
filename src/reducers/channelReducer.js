const initialstate = {
  channelName: null,
  currentChannel: null,
  isPrivate: false,
};

const ChannelReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_CHANNEL":
      return [...state, action.payload.channelName];

    case "CHANGE_CHANNEL":
      return { ...state, currentChannel: action.payload.channel };

    case "SET_PRIVATE_CHANNEL":
      return { ...state, isPrivate: action.payload.isPrivate };
    default:
      return state;
  }
};
export default ChannelReducer;
