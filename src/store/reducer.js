const defaultState = {
  focused: false,
};
export default (state = defaultState, action) => {
  const { type } = action;
  if (type === "search_focus") {
    return {
      focused: true,
    };
  }
  if (type === "search_blur") {
    return {
      focused: false,
    };
  }
  return state;
};
