import { GLOBALTYPES, DeleteData } from "./globalTypes";
import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from "../../utils/imageUpload";

export const PROFILE_TYPES = {
    LOADING: 'LOADING',
    GET_USER: 'GET_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW'
}

export const getProfileUsers = ({users, id, auth}) => async (dispatch) => {
    if(users.every(user => user._id !== id.substring(1))) {
        try {
            dispatch({type: PROFILE_TYPES.LOADING, payload: true})
            const res = await getDataAPI(`user/${id.substring(1)}`, auth.token)

            dispatch({
                type: PROFILE_TYPES.GET_USER,
                payload: res.data
            })

            dispatch({type: PROFILE_TYPES.LOADING, payload: false})

        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {error: err.response.data.message}
            })
        }
    }
}

export const follow = ({users, user, auth}) => async (dispatch) => {
    let newUser = {...user, followers: [...user.followers, auth.user]}

    dispatch({
        type: PROFILE_TYPES.FOLLOW,
        payload: newUser
    })

    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: {...auth.user, following:[...auth.user.following, user]}
        }
    })


    try {
        await patchDataAPI(`user/${user._id}/follow`, null, auth.token)
    } catch(err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.message}
        })
    }

}

export const unfollow = ({users, user, auth}) => async (dispatch) => {

    let newUser = {
        ...user,
        followers: DeleteData(user.followers, auth.user._id)
    }


    dispatch({
        type: PROFILE_TYPES.UNFOLLOW,
        payload: newUser
    })

    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: {
                ...auth.user, 
                following: DeleteData(auth.user.following, newUser._id)
            }
        }
    })

    try {
        await patchDataAPI(`user/${user._id}/unfollow`, null, auth.token)
    } catch(err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.message}
        })
    }


}

export const updateProfile = ({userData, profilePic, auth}) => async (dispatch) => {
    console.log(userData)

    if(!userData.story) {
        return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Add a bio please"}});
    }
    if(!userData.username) {
        return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Add a username please"}});
    }

    try {
        let media;

        if(profilePic) {
            media = await imageUpload([profilePic])
        }

        const response = await patchDataAPI(`user`, {
            ...userData,
            profilePic: profilePic ? media[0].url : auth.user.profilePic
        }, auth.token)
        console.log(response)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                user: {
                    ...auth.user, ...userData,
                    profilePic: profilePic ? media[0].url : auth.user.profilePic,
                }
            }
        })

        
    } catch (err) {
        console.log(err)
        
    }

}