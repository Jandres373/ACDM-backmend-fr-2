import { useEffect, useState } from "react";
import React from 'react'
import { BASE_URL } from "@/api_connection/url";
import { apiConnection } from '../api_connection/api_crud';

type Method = 'get' | 'post' | 'put' | 'delete'

export const crudHook = () => {
  const [apiResponse, setApiResponse] = useState()

  const consumeAPI = async function (method: Method) {
    if (method = 'get') {
      const response: any = await apiConnection.get('/users')
      setApiResponse(response)
      return response
    }
    if (method = 'post') {
      const response: any = await apiConnection.post('/users')
      setApiResponse(response)
      return response
    }
    if (method = 'delete') {
      const response: any = await apiConnection.delete('/users')
      setApiResponse(response)
      return response
    }
  }

  return [apiResponse, consumeAPI]
}

