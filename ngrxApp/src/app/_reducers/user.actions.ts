import * as UserActions from "../_actions/user.actions"
import {MainStore} from "../app.component";

export function userActionsReducer(state:MainStore, action: UserActions.All){
  switch (action.type){
    case UserActions.SELECT_TAB:
      return {selectedTab: action.payload}
    default:
      return state;
  }
}
