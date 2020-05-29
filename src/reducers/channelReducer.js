const initialstate = {
  channelName: null,
  currentChannel: null,
};

const ChannelReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_CHANNEL":
      return [...state, action.payload.channelName];

    case "CHANGE_CHANNEL":
      return { ...state, currentChannel: action.payload.channel };

    default:
      return state;
  }
};
export default ChannelReducer;
