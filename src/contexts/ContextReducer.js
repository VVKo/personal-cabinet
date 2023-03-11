import { toast } from 'react-toastify';

const ContextReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: undefined
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
                [action.payload.newtoast]: toast.loading(action.payload.msg, {toastId: action.payload.newtoast }),
            };
        case 'UPDATE':
            return {
                ...state,
                loading: action.payload.loading,
                [action.payload.newtoast]: toast.update(
                    state[action.payload.newtoast],
                    {
                        render: action.payload.status,
                        type: 'success',
                        isLoading: false,
                        autoClose: 500,
                    }
                ),
            };
        case 'UPDATEROW':
            return {
                ...state,
                staff: {
                    ...state.staff,
                    rows: action.payload
                }
            }
        case 'GETLISTOFACADEMICYEARS':
            return {

        ...state,
            academicYears: action.payload,
        };
        case 'GETSTAFF':
            return {
                ...state,
                staff: action.payload,
            }
        case 'SET_CURRENT_YEAR':
            return {
                ...state,
                currentAcademicYear: action.payload
            }
        case 'SET_SHOWMODAL':
            return {
                ...state,
                showModal: action.payload,
            };
        case 'SET_DATAFORMODAL':
            return {
                ...state,
                dataForModal: action.payload,
            };
        default:
            return state
    }
}

export default ContextReducer
