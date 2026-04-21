"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { reminders } from "@/lib/data"
import { Reminder } from "@/lib/types"
import { 
  Bell, 
  Plus, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Key, 
  CreditCard, 
  MoreHorizontal,
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react"

function ReminderTypeIcon({ type }: { type: Reminder["type"] }) {
  const icons = {
    contract_expiry: FileText,
    rent_increase: TrendingUp,
    visit: Calendar,
    key_return: Key,
    payment: CreditCard,
    other: Bell,
  }
  const Icon = icons[type]
  return <Icon className="h-4 w-4" />
}

function ReminderTypeLabel({ type }: { type: Reminder["type"] }) {
  const labels = {
    contract_expiry: "Vencimiento",
    rent_increase: "Aumento",
    visit: "Visita",
    key_return: "Llaves",
    payment: "Pago",
    other: "Otro",
  }
  return labels[type]
}

function PriorityBadge({ priority }: { priority: Reminder["priority"] }) {
  const config = {
    low: { label: "Baja", className: "bg-muted text-muted-foreground" },
    medium: { label: "Media", className: "bg-warning text-warning-foreground" },
    high: { label: "Alta", className: "bg-destructive text-destructive-foreground" },
  }
  const { label, className } = config[priority]
  return <Badge className={className}>{label}</Badge>
}

function StatusIcon({ status }: { status: Reminder["status"] }) {
  if (status === "completed") return <CheckCircle className="h-4 w-4 text-success" />
  if (status === "dismissed") return <Clock className="h-4 w-4 text-muted-foreground" />
  return <AlertTriangle className="h-4 w-4 text-warning" />
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function isOverdue(dateString: string) {
  return new Date(dateString) < new Date()
}

export default function RemindersPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all")
  
  const pendingReminders = reminders.filter(r => r.status === "pending")
  const completedReminders = reminders.filter(r => r.status === "completed")
  const highPriorityCount = pendingReminders.filter(r => r.priority === "high").length
  const overdueCount = pendingReminders.filter(r => isOverdue(r.dueDate)).length

  const filteredReminders = filter === "all" 
    ? reminders 
    : reminders.filter(r => filter === "pending" ? r.status === "pending" : r.status === "completed")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Recordatorios</h1>
          <p className="text-muted-foreground">
            Gestiona recordatorios automáticos y tareas pendientes
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Recordatorio
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingReminders.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alta Prioridad</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highPriorityCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Vencidos</CardTitle>
            <Bell className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overdueCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedReminders.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <Button 
          variant={filter === "all" ? "default" : "outline"} 
          size="sm"
          onClick={() => setFilter("all")}
        >
          Todos ({reminders.length})
        </Button>
        <Button 
          variant={filter === "pending" ? "default" : "outline"} 
          size="sm"
          onClick={() => setFilter("pending")}
        >
          Pendientes ({pendingReminders.length})
        </Button>
        <Button 
          variant={filter === "completed" ? "default" : "outline"} 
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Completados ({completedReminders.length})
        </Button>
      </div>

      {/* Reminders List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Recordatorios</CardTitle>
          <CardDescription>
            {filter === "pending" ? "Tareas pendientes por completar" : 
             filter === "completed" ? "Tareas completadas" : "Todos los recordatorios"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredReminders.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No hay recordatorios para mostrar
              </p>
            ) : (
              filteredReminders.map((reminder) => (
                <div 
                  key={reminder.id} 
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    reminder.status === "completed" ? "bg-muted/50" : 
                    isOverdue(reminder.dueDate) && reminder.status === "pending" ? "bg-destructive/5 border-destructive/20" : ""
                  }`}
                >
                  <Checkbox 
                    checked={reminder.status === "completed"}
                    className="mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <ReminderTypeIcon type={reminder.type} />
                      <span className="text-xs text-muted-foreground uppercase">
                        {ReminderTypeLabel({ type: reminder.type })}
                      </span>
                      <PriorityBadge priority={reminder.priority} />
                      {isOverdue(reminder.dueDate) && reminder.status === "pending" && (
                        <Badge variant="destructive">Vencido</Badge>
                      )}
                    </div>
                    <h3 className={`font-medium mt-1 ${reminder.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                      {reminder.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {reminder.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Vence: {formatDate(reminder.dueDate)}
                      </span>
                      <span>Creado: {formatDate(reminder.createdAt)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusIcon status={reminder.status} />
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
