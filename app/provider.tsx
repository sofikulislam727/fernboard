"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import axios from 'axios';

function Provider({ children }: { children: React.ReactNode }) {

    const { data } = useSession();

    useEffect(() => {
        data?.user?.email && createNewUser()
    }, [data?.user?.email])

    const createNewUser = async () => {
        const res = await axios.post('/api/user', {})
        console.log(res.data)
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
