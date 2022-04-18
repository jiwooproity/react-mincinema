export const loadingStatus = {
  setLoading: "setLoading",
  resetLoading: "resetLoading",
};

const loadingState = {
  isLoading: true,
};

const setLoading = (state = loadingState, action) => {
  switch (action.type) {
    case loadingStatus.setLoading:
      return {
        ...state,
        isLoading: false,
      };
    case loadingState.resetLoading:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default setLoading;
