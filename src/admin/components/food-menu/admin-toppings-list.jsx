import React, { useContext } from 'react'
import { AdminContext } from '../../../services/admin/admin.context'
import AdminToppingsItem from './admin-toppings-item'

const AdminToppingsList = () => {
    const {ingredients} = useContext(AdminContext)

  return (
    <div>
      <h1>Toppings List</h1>
      {
        ingredients.map(item => {
          return (
            <AdminToppingsItem ingredient={item} key={item?.name}/>
          )
        })
      }
    </div>
  )
}

export default AdminToppingsList