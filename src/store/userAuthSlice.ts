import {
  createSelector,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { RootState } from '.';
import {
  AuthSubjectField,
  AvatarUrlField,
  EmailField,
  FirstNameField,
  JWTField,
  LastNameField,
  PersonalName,
  UserRoleField,
} from '../model/model';

export interface UserAuthState
  extends Partial<FirstNameField>,
    Partial<LastNameField>,
    Partial<EmailField>,
    Partial<UserRoleField>,
    Partial<AvatarUrlField>,
    Partial<AuthSubjectField>,
    Partial<JWTField> {}

const initialState: UserAuthState = {
  firstName: undefined,
  lastName: 'azran',
  roles: [],
  avatarUrl: undefined,
  authSubject: undefined,
  jwt: undefined,
};

export const userAuthSlice = createSlice<
  UserAuthState,
  SliceCaseReducers<UserAuthState>
>({
  name: 'userAuth',
  initialState: initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<UserAuthState>) => {
      console.log(action.payload);
      Object.assign(state, action.payload);
    },
  },
});

export const { setUserAuth } = userAuthSlice.actions;

export const selectUserAuthState = (state: RootState) => state.userAuth;

export const selectUserEmail = createSelector(
  selectUserAuthState,
  (state) => state.email
);

export const selectUserPersonalName = createSelector(
  selectUserAuthState,
  (state) => {
    return state as PersonalName;
  }
);

export const selectUserJwt = createSelector(
  selectUserAuthState,
  (state) => state.jwt
);

export const selectUserRoles = createSelector(
  selectUserAuthState,
  (state) => state.roles
);

export const isAdmin = createSelector(
  selectUserAuthState,
  selectUserRoles,
  (state, roles) => {
    if (roles?.includes('admin')) return true;
    return false;
  }
);

export const isAuthorized = createSelector(
  selectUserAuthState,
  selectUserRoles,
  (state, roles) => {
    if (roles?.includes('user')) return true;
    return false;
  }
);

export default userAuthSlice.reducer;
