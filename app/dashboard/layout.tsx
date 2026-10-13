import { AppSidebar } from '@/components/custom/dashboard/AppSideBar'
import { AppHeader } from '@/components/custom/dashboard/AppHeader'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <AppSidebar />
        <div className="flex min-h-svh min-w-0 flex-1 flex-col">
            <AppHeader />
            <main className="flex-1 p-4 sm:p-6">
              {children}
            </main>
        </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
