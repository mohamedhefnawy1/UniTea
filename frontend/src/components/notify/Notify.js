import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Auth = () => {
    const { auth } = useSelector(state => state)
  return (
    <div>
        {auth.loading && <h1>Loading</h1>}
    </div>
  )
}

export default Auth
