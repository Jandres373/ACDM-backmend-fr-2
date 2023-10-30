'use client'

import usersStore from '@/redux/store/usersStore'
import { Provider } from 'react-redux';

interface Props { children: React.ReactNode }


const UserProvider = ({children}: Props) => {
  return (
    <Provider store={usersStore}>
      {children}
    </Provider>
  )
}

export default UserProvider