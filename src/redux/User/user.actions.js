import userTypes from './user.types';

export const emailSignInStart = userCredentials => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const signUpUserStart = userCredentials => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials
});

export const userError = err => ({
  type: userTypes.USER_ERROR,
  payload: err
});


export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE
});

export const updateGroupsForUser = bookclub => ({
  type: userTypes.UPDATE_GROUPS_FOR_USER,
  payload: bookclub
});

export const updatedUserSuccess = user => ({
  type: userTypes.UPDATED_USER_SUCCESS,
  payload: user
});