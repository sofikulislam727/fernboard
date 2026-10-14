"use client"

import { Button } from "@/components/ui/button"
import { Layers2, Plus, Sparkles } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"

const WelcomeBanner = () => {
  const { data: session } = useSession()
  const user = session?.user
  const username = user?.name?.trim() || user?.email?.split("@")[0] || "Your account"
  const firstName = username.split(/\s+/)[0]

  return (
    <section className="relative isolate mb-6 overflow-hidden rounded-2xl border border-primary/10 bg-linear-to-br from-primary/10 via-card to-accent/40 px-5 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 right-40 size-72 rounded-full bg-brand-pink/15 blur-3xl"
      />

      <div className="relative flex min-h-48 items-center justify-between gap-6 md:gap-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/75 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-secondary-foreground shadow-sm">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            YOUR CREATIVE SPACE
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2.1rem]">
            Welcome back, {firstName}!
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
            Bring your ideas to life with Fernboard. Create boards, organize projects, and boost creativity with AI.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-xl shadow-md shadow-primary/20">
              <Plus aria-hidden="true" />
              Create new board
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-border/80 bg-background/75 shadow-sm"
              nativeButton={false}
              render={<Link href="/ai" />}
            >
              <Sparkles aria-hidden="true" />
              Explore Fern AI
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mr-2 hidden h-48 w-52 shrink-0 items-center justify-center md:flex lg:mr-5 lg:h-52 lg:w-60"
        >
          <div className="absolute inset-2 rounded-[2rem] border border-primary/10 bg-linear-to-br from-primary/10 via-background/40 to-brand-pink/10" />
          <div className="absolute right-2 top-6 h-32 w-40 rotate-6 rounded-2xl border border-brand-pink/15 bg-accent/70 shadow-sm" />
          <div className="absolute bottom-3 left-3 h-32 w-40 -rotate-6 rounded-2xl border border-brand-yellow/25 bg-secondary/80 shadow-sm" />
          <div className="absolute left-5 top-5 w-44 rounded-2xl border border-border/80 bg-card/95 p-4 shadow-xl shadow-primary/10 lg:left-7 lg:w-48">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-brand-pink" />
                <span className="size-2 rounded-full bg-brand-yellow" />
                <span className="size-2 rounded-full bg-primary" />
              </div>
              <Layers2 className="size-4 text-primary" strokeWidth={1.8} />
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Ideas, organized
            </p>
            <div className="mt-3 flex gap-2">
              <span className="h-8 flex-1 rounded-lg bg-primary/15" />
              <span className="h-8 flex-1 rounded-lg bg-brand-pink/15" />
              <span className="h-8 flex-1 rounded-lg bg-brand-yellow/25" />
            </div>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 w-4/5 rounded-full bg-muted" />
              <span className="block h-1.5 w-3/5 rounded-full bg-muted" />
            </div>
          </div>
          <span className="absolute right-3 top-4 size-3 rounded-full bg-brand-pink ring-4 ring-card/80" />
          <span className="absolute bottom-5 left-2 size-2.5 rounded-full bg-brand-yellow ring-4 ring-card/80" />
        </div>
      </div>
    </section>
  )
}

export default WelcomeBanner
