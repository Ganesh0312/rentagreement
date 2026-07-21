"use client";

import { signOut, useSession } from "next-auth/react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROLE_LABELS } from "@/constants/roles";
import { cn } from "@/lib/utils";

export function DashboardTopBar() {
  const { data: session } = useSession();
  const user = session?.user;
  const initials = user?.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background/95 backdrop-blur px-4 md:px-6">
      {/* Left: greeting */}
      <div>
        <p className="text-xs text-muted-foreground">Welcome back 👋</p>
        <p className="text-sm font-semibold text-foreground">{user?.name ?? "User"}</p>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full text-muted-foreground hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          {/* Unread badge */}
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
        </Button>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-9 w-9 rounded-full p-0 ring-2 ring-primary/30 hover:ring-primary/60 transition-all"
            >
              <Avatar className="h-9 w-9">
                <AvatarFallback
                  className={cn(
                    "bg-gradient-to-br from-primary to-indigo-600 text-primary-foreground text-xs font-bold"
                  )}
                >
                  {initials ?? "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-indigo-600 text-primary-foreground text-xs font-bold">
                    {initials ?? "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{user?.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {user?.email}
                  </span>
                  {user?.role && (
                    <span className="mt-0.5 inline-flex w-fit rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                      {ROLE_LABELS[user.role]}
                    </span>
                  )}
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-destructive focus:text-destructive"
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
