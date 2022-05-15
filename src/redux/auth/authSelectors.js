const getIsLoggedIn = state => state.authorization.isLoggedIn;

const getUserName = state => state.authorization.user.name;

const getToken = state => state.authorization.token;

export { getIsLoggedIn, getUserName, getToken };
