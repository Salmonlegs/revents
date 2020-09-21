import {
	LISTEN_TO_CURRENT_USER_PROFILE,
	LISTEN_TO_SELECTED_USER_PROFILE,
	LISTEN_TO_USER_PHOTOS,
} from './profileConstants';

const initialState = {
	currentUserProfile: null,
	selectedUserProfile: null,
	photos: [],
};

export default function profileReducer(state = initialState, { type, payload }) {
	//console.log('profileReducer- payload', type, payload);
	// if (LISTEN_TO_CURRENT_USER_PROFILE) {
	// 	console.log('Receiving LISTEN_TO_CURRENT_USER_PROFILE');
	// }

	switch (type) {
		case LISTEN_TO_CURRENT_USER_PROFILE:
			return {
				...state,
				currentUserProfile: payload,
			};
		case LISTEN_TO_SELECTED_USER_PROFILE:
			return {
				...state,
				selectedUserProfile: payload,
			};
		case LISTEN_TO_USER_PHOTOS:
			return {
				...state,
				photos: payload,
			};
		default: {
			return state;
		}
	}
}