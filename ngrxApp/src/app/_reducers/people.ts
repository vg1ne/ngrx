import * as PeopleActions from "../_actions/people"

export function guestReducer(state, action){
  switch (action.type){
    case PeopleActions.ADD_GUEST:
      return Object.assign({}, {guests: state.guests + 1})
    case PeopleActions.REMOVE_GUEST:
      return Object.assign({}, {guests: state.guests - 1})
    case PeopleActions.ToggleAttendingAction:
      return Object.assign({}, {attending: !state.attending})
    default:
      return state
  }
}

export function peopleReducer(state = [], action: PeopleActions.All){
  switch (action.type){
    case PeopleActions.ADD_PERSON:
      return [...state, Object.assign(
        {},
        {
          id: action.payload.id,
          name: action.payload.name,
          guests: 0,
          attending: false
        })
      ];
    case PeopleActions.REMOVE_PERSON:
      return state.filter(person => person.id!==action.payload.id)
    case PeopleActions.ADD_GUEST:
      return state.map(person => guestReducer(person, action))
    case PeopleActions.REMOVE_GUEST:
      return state.map(person => guestReducer(person, action))
    case PeopleActions.TOGGLE_ATTENDING:
      return state.map(person => guestReducer(person, action))
    default:
      return state;
  }
}
