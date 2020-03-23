const demo = (state = "myDemo", action) => {
  switch (action.type) {
    case "CHANGE-DEMO":
      return action.value;
    default:
      return state;
  }
};

export default demo;
