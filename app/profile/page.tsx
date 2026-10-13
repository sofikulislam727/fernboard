import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/sign-in")
  }

  const name = session.user.name?.trim() || "Your account"
  const initials =
    name
      .split(/[\s.@_-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "U"

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to dashboard
        </Link>

        <div className="mt-6">
          <h1 className="text-2xl font-semibold tracking-tight">Manage account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View the profile details associated with your Fernboard account.
          </p>
        </div>

        <section className="mt-6 rounded-xl border bg-card p-5 text-card-foreground sm:p-6">
          <div className="flex items-center gap-4 border-b pb-5">
            <Avatar size="lg">
              {session.user.image && <AvatarImage src={session.user.image} alt="" />}
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h2 className="truncate font-medium">{name}</h2>
              <p className="truncate text-sm text-muted-foreground">
                {session.user.email ?? "No email available"}
              </p>
            </div>
          </div>

          <dl className="grid gap-4 pt-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Name</dt>
              <dd className="mt-1 truncate text-sm">{name}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Email address</dt>
              <dd className="mt-1 truncate text-sm">
                {session.user.email ?? "No email available"}
              </dd>
            </div>
          </dl>

          <p className="mt-5 border-t pt-4 text-xs leading-relaxed text-muted-foreground">
            Your profile details are provided by the account you used to sign in.
          </p>
        </section>
      </div>
    </main>
  )
}
