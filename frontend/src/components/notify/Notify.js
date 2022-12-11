import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Notify = () => {
    const { notify } = useSelector(state => state)
  return (
    <div>
        {notify.loading && <h1>Loading</h1>}
    </div>
  )
}

export default Notify
