import * as UserActions from "../_actions/user.actions"

export function userActionsReducer(state = [], action: UserActions.All){
  switch (action.type){
    case UserActions.SELECT_TAB:
      return {selectedTab: action.payload}
    default:
      return state;
  }
}
