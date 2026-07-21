import type { User, UserAction } from "../types/types";

export function UserReducer(state: User[], action: UserAction) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;

    case "ADD_USER":
      return [...state, action.payload];

    case "DELETE_USER":
      return state.filter((user) => user.id === action.payload);

    case "UPDATE_USER":
      return state.map((user) => (user.id === action.payload.id ? action.payload : user));

    default:
      return state;
  }
}
