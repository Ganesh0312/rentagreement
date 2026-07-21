"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  registerSchema,
  type RegisterInput,
} from "@/lib/validators/auth.schema";
import { ROLES } from "@/constants/roles";

interface RegisterFormProps {
  defaultRole?: typeof ROLES.CUSTOMER | typeof ROLES.AGENT;
}

export function RegisterForm({
  defaultRole = ROLES.CUSTOMER,
}: RegisterFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: defaultRole,
    },
  });

  async function onSubmit(values: RegisterInput) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.error?.message ?? "Registration failed");
        return;
      }

      toast.success("Account created. Please sign in.");
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  }

  const isAgent = defaultRole === ROLES.AGENT;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1.5">
        <h1 className="text-2xl font-extrabold tracking-tight">
          {isAgent ? "Register as an agent" : "Create your account"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isAgent
            ? "Register as an agent to manage customer agreements."
            : "Register to create and track your rent agreements."}
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" {...form.register("role")} />

        {/* Full name */}
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm font-medium">Full name</Label>
          <Input
            id="name"
            placeholder="Rahul Sharma"
            className="h-11 focus-visible:ring-primary"
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="h-11 focus-visible:ring-primary"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm font-medium">Mobile number</Label>
          <Input
            id="phone"
            placeholder="+91 98765 43210"
            className="h-11 focus-visible:ring-primary"
            {...form.register("phone")}
          />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>

        {/* Password row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-11 pr-10 focus-visible:ring-primary"
                {...form.register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            {form.formState.errors.password && (
              <p className="text-xs text-destructive">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className="h-11 pr-10 focus-visible:ring-primary"
                {...form.register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            {form.formState.errors.confirmPassword && (
              <p className="text-xs text-destructive">{form.formState.errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full gap-2 font-semibold shadow-sm hover:shadow-md hover:shadow-primary/25 transition-all duration-200 mt-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Creating account…
            </>
          ) : (
            <>
              <UserPlus className="size-4" />
              Create account
            </>
          )}
        </Button>
      </form>

      {/* Footer link */}
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline underline-offset-4"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
