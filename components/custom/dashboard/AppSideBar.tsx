"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Archive, LayoutGrid, Settings, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSession } from 'next-auth/react'



export function AppSidebar() {

  const path = usePathname()
  const { data: session } = useSession()
  const user = session?.user
  const username =
    user?.name || user?.email?.split('@')[0] || 'Your account'

  const initials = username
    .split(/[\s.@_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()


  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="px-5 pt-5 pb-2">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <h2 className="whitespace-nowrap text-xl font-bold tracking-tight text-sidebar-foreground">Fernboard</h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0 px-3 pt-0 pb-4">
        <SidebarGroup className="py-1">
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Workspace</SidebarGroupLabel>
          <SidebarMenuButton className="h-10 rounded-lg px-3" isActive={path === "/dashboard"}>
            <LayoutGrid/>
            <span>All Files</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="mt-1 h-10 rounded-lg px-3"  isActive={path === "/shared-files"}>
            <Users/>
            <span>Shared Files</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="mt-1 h-10 rounded-lg px-3" isActive={path === "/archived"}>
            <Archive/>
            <span>Archived Files</span>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup className="py-1">
          <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">More</SidebarGroupLabel>
          <SidebarMenuButton className="h-10 rounded-lg px-3" isActive={path === "/ai"}>
            <Sparkles/>
            <span>AI Helper</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="mt-1 h-10 rounded-lg px-3"  isActive={path === "/settings"}>
            <Settings/>
            <span>Settings</span>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-2 px-4 pt-3 pb-4">
        <Button className="h-10 w-full rounded-lg shadow-sm">+ Create New Board</Button>
        <div className="rounded-lg bg-sidebar-accent/50 p-2.5">
          <h2 className="mb-2 flex items-center justify-between gap-2 text-xs font-medium text-sidebar-foreground">
            <span>2 files created</span>
            <span className="text-[11px] text-muted-foreground">Total 3</span>
          </h2>
          <Progress value={66.7}
            aria-label="2 of 3 boards created"
            className="w-full gap-0 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-indicator]:bg-primary" />
        </div>

        <div className="flex min-w-0 items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-sidebar-accent">
          <span
            className="
              relative flex size-8 shrink-0
              items-center justify-center
              overflow-hidden rounded-full bg-sidebar-accent text-xs font-semibold text-sidebar-accent-foreground ring-1 ring-border
            "
          >
            {user?.image ? (
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="32px"
                src={user.image}
                unoptimized
              />
            ) : (
              initials
            )}
          </span>

          <span className="truncate text-sm font-medium">
            {username}
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}