const initalState = {
  favourites: {
    companies: [],
    jobs: [],
  },
  companySelected: {
    content: null,
  },
  jobSelected: {
    content: null,
  },
};

const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE_COMPANIES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [...state.favourites.companies, action.payload],
        },
      };
    case "REMOVE_FAVORITE_COMPANY":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: state.favourites.companies.filter(
            (_, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
