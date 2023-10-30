import { apiConnection } from "@/api_connection/api_crud"

export const handleDelete = (userId:number)=>{
  const id = userId
  apiConnection.delete(`/users/${id}`)
}
export const  onUpdate = (data:any, id:number)=>{
  apiConnection.put(`/users/${id}`, data)
}
export const onSubmit = (data: any) => {
  apiConnection.post('/users',data)
};