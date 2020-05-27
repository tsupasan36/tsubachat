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
