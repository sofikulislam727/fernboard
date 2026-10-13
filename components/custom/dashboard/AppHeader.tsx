"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { LogOut, UserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

const pageTitles: Record<string, string> = {
  "/dashboard": "All files",
  "/shared-files": "Shared files",
  "/archived": "Archived",
  "/ai": "AI helper",
  "/settings": "Settings",
}

export function AppHeader() {
  const path = usePathname()
  const { data: session } = useSession()
  const user = session?.user
  const displayName = user?.name?.trim() || user?.email?.split("@")[0] || "Your account"

  const title =
    pageTitles[path] ??
    pageTitles[Object.keys(pageTitles).find((route) => path.startsWith(`${route}/`)) ?? ""] ??
    "Dashboard"

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <SidebarTrigger className="-ml-2" />
        <div className="h-5 w-px bg-border" />
        <h1 className="truncate text-sm font-semibold sm:text-base">{title}</h1>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          type="button"
          aria-label="Open account menu"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-full bg-muted text-foreground">
            {user?.image ? (
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="36px"
                src={user.image}
                unoptimized
              />
            ) : (
              <UserRound className="size-5" aria-hidden="true" />
            )}
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8} className="w-72">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-2 py-2 font-normal">
              <span className="flex min-w-0 items-center gap-3">
                <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-foreground">
                  {user?.image ? (
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      sizes="40px"
                      src={user.image}
                      unoptimized
                    />
                  ) : (
                    <UserRound className="size-5" aria-hidden="true" />
                  )}
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="truncate text-sm font-semibold text-foreground">{displayName}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user?.email ?? "Signed-in account"}
                  </span>
                </span>
              </span>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            render={<Link href="/profile" />}
            className="cursor-pointer py-2"
          >
            <UserRound />
            Manage account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => void signOut({ callbackUrl: "/sign-in" })}
            variant="destructive"
            className="cursor-pointer py-2"
          >
            <LogOut />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}