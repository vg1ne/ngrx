import * as UserActions from "../_actions/user.actions"
import {AppStore} from "../app.component";

export function userActionsReducer(state:AppStore = { selectedTab: 0}, action: UserActions.All){
  switch (action.type){
    case UserActions.SELECT_TAB:
      return {selectedTab: action.payload}
    default:
      return state;
  }
}
