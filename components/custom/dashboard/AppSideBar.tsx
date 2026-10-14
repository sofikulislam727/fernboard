"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Archive, LayoutGrid, Plus, Settings, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

export function AppSidebar() {
  const path = usePathname()
  const { data: session } = useSession()
  const user = session?.user
  const username =
    user?.name?.trim() || user?.email?.split("@")[0] || "Your account"

  const initials = username
    .split(/[\s.@_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="px-4 pt-3 pb-1">
        <div className="flex min-w-0 items-center gap-2">
          <Image src="/logo.png" alt="" width={40} height={40} className="shrink-0" />
          <span className="truncate text-xl font-bold tracking-tight text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Fernboard
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="gap-1 px-3 pt-2 pb-4">
        <SidebarGroup className="py-1">
          <SidebarGroupLabel className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Workspace
          </SidebarGroupLabel>
          <SidebarMenuButton
            className="h-10 rounded-lg px-3 transition-colors [&[data-active=true]>svg]:text-primary"
            isActive={path === "/dashboard"}
          >
            <LayoutGrid aria-hidden="true" />
            <span>All Files</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="mt-1 h-10 rounded-lg px-3 transition-colors [&[data-active=true]>svg]:text-primary"
            isActive={path === "/shared-files"}
          >
            <Users aria-hidden="true" />
            <span>Shared Files</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="mt-1 h-10 rounded-lg px-3 transition-colors [&[data-active=true]>svg]:text-primary"
            isActive={path === "/archived"}
          >
            <Archive aria-hidden="true" />
            <span>Archived Files</span>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup className="py-1">
          <SidebarGroupLabel className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            More
          </SidebarGroupLabel>
          <SidebarMenuButton
            className="h-10 rounded-lg px-3 transition-colors [&[data-active=true]>svg]:text-primary"
            isActive={path === "/ai"}
          >
            <Sparkles aria-hidden="true" />
            <span>Fern AI</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="mt-1 h-10 rounded-lg px-3 transition-colors [&[data-active=true]>svg]:text-primary"
            isActive={path === "/settings"}
          >
            <Settings aria-hidden="true" />
            <span>Settings</span>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-3 border-t border-sidebar-border/70 px-3 pt-4 pb-4">
        <Button className="h-10 w-full justify-start gap-2 rounded-lg shadow-sm shadow-primary/15">
          <Plus aria-hidden="true" />
          <span className="group-data-[collapsible=icon]:hidden">Create new board</span>
        </Button>

        <div className="flex min-w-0 items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-colors hover:border-sidebar-border/70 hover:bg-background/70">
          <span
            className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-xs font-semibold text-primary ring-1 ring-primary/15"
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

          <span className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <span className="block truncate text-sm font-medium text-sidebar-foreground">
              {username}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {user?.email ?? "Signed-in account"}
            </span>
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}