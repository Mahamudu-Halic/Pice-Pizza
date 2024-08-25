import { AdminContextProvider } from '../../services/admin/admin.context'
import { DashboardContextProvider } from '../services/dashboard/dashboard.context'

const Layout = ({children}) => {
  return (
    <AdminContextProvider>
        <DashboardContextProvider>
            {children}
        </DashboardContextProvider>
    </AdminContextProvider>
  )
}

export default Layout