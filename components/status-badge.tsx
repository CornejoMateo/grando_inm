import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PropertyStatus, WaitingListStatus } from "@/lib/types"

interface StatusBadgeProps {
  status: PropertyStatus | WaitingListStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    available: {
      label: "Disponible",
      className: "bg-[var(--success)] text-[var(--success-foreground)] border-transparent",
    },
    rented: {
      label: "Alquilado",
      className: "bg-warning text-warning-foreground border-transparent",
    },
    pending: {
      label: "Pendiente",
      className: "bg-muted text-muted-foreground border-transparent",
    },
    contacted: {
      label: "Contactado",
      className: "bg-primary text-primary-foreground border-transparent",
    },
  }

  const config = statusConfig[status]

  return (
    <Badge className={cn(config.className, className)}>
      {config.label}
    </Badge>
  )
}
