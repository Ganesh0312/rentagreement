import { TrendingUp } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
        {title}
      </h1>
      {description ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

interface PagePlaceholderProps {
  title: string;
  description?: string;
  icon?: React.ElementType;
  trend?: string;
}

export function PagePlaceholder({
  title,
  description,
  icon: Icon = TrendingUp,
  trend,
}: PagePlaceholderProps) {
  return (
    <div className="card-hover group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-150" />

      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{description}</p>
          <p className="text-2xl font-extrabold tracking-tight text-foreground">
            {title}
          </p>
          {trend && (
            <p className="text-xs font-medium text-emerald-600">{trend}</p>
          )}
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
