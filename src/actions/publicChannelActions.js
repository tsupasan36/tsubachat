export const addChannel = (newChannel) => {
  return {
    type: "ADD_CHANNEL",
    payload: {
      channelName: newChannel,
    },
  };
};

export const changeChannel = (channel) => {
  return {
    type: "CHANGE_CHANNEL",
    payload: {
      channel: channel,
    },
  };
};

export const setPrivateChannel = (isPrivate) => {
  return {
    type: "SET_PRIVATE_CHANNEL",
    payload: {
      isPrivate: isPrivate,
    },
  };
};
