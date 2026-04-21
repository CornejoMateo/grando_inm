import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, DollarSign, TrendingUp, FileText, Bell, Key, Calendar, Home, UserCircle, AlertTriangle } from "lucide-react"
import { properties, waitingList, contracts, reminders, visits, owners, tenants } from "@/lib/data"

export default function AdminDashboard() {
  const totalProperties = properties.length
  const availableProperties = properties.filter((p) => p.status === "available").length
  const rentedProperties = properties.filter((p) => p.status === "rented").length
  const totalWaitingList = waitingList.length
  const pendingContacts = waitingList.filter((w) => w.status === "pending").length
  
  const activeContracts = contracts.filter(c => c.status === "active" || c.status === "expiring_soon").length
  const expiringContracts = contracts.filter(c => c.status === "expiring_soon").length
  const pendingReminders = reminders.filter(r => r.status === "pending").length
  const highPriorityReminders = reminders.filter(r => r.status === "pending" && r.priority === "high").length
  const scheduledVisits = visits.filter(v => v.status === "scheduled").length
  const totalMonthlyRent = contracts
    .filter(c => c.status === "active" || c.status === "expiring_soon")
    .reduce((sum, c) => sum + c.monthlyRent, 0)

  const stats = [
    {
      title: "Propiedades",
      value: totalProperties,
      description: `${availableProperties} disponibles, ${rentedProperties} alquiladas`,
      icon: Building2,
      href: "/admin/properties",
    },
    {
      title: "Contratos Activos",
      value: activeContracts,
      description: expiringContracts > 0 ? `${expiringContracts} por vencer` : "Todos vigentes",
      icon: FileText,
      href: "/admin/contracts",
      alert: expiringContracts > 0,
    },
    {
      title: "Renta Mensual",
      value: `$${totalMonthlyRent.toLocaleString()}`,
      description: "Ingresos proyectados",
      icon: DollarSign,
      href: "/admin/contracts",
    },
    {
      title: "Tasa de Ocupación",
      value: `${Math.round((rentedProperties / totalProperties) * 100)}%`,
      description: "Ocupación actual",
      icon: TrendingUp,
      href: "/admin/properties",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Panel</h1>
        <p className="text-muted-foreground mt-1">Panel de administracion de Ferrero Inmobiliaria</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className="flex items-center gap-1">
                  {stat.alert && <AlertTriangle className="h-4 w-4 text-warning" />}
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <CardDescription className="text-xs mt-1">{stat.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link href="/admin/reminders">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Recordatorios</p>
                  <p className="text-xl font-bold">{pendingReminders}</p>
                </div>
                <div className="flex items-center gap-1">
                  {highPriorityReminders > 0 && (
                    <Badge variant="destructive" className="text-xs">{highPriorityReminders}</Badge>
                  )}
                  <Bell className="h-5 w-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/keys-visits">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Visitas Programadas</p>
                  <p className="text-xl font-bold">{scheduledVisits}</p>
                </div>
                <Calendar className="h-5 w-5 text-primary" />
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/owners">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Propietarios</p>
                  <p className="text-xl font-bold">{owners.length}</p>
                </div>
                <Home className="h-5 w-5 text-success" />
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/tenants">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Inquilinos Activos</p>
                  <p className="text-xl font-bold">{tenants.filter(t => t.currentPropertyId).length}</p>
                </div>
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Reminders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recordatorios Pendientes
            </CardTitle>
            <CardDescription>Tareas y alertas que requieren atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reminders.filter(r => r.status === "pending").slice(0, 4).map((reminder) => (
                <div key={reminder.id} className="flex justify-between items-start gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{reminder.title}</p>
                      <Badge 
                        variant={reminder.priority === "high" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {reminder.priority === "high" ? "Alta" : reminder.priority === "medium" ? "Media" : "Baja"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Vence: {new Date(reminder.dueDate).toLocaleDateString("es-ES")}
                    </p>
                  </div>
                </div>
              ))}
              {pendingReminders === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No hay recordatorios pendientes
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Accesos Rápidos</CardTitle>
            <CardDescription>Accede rápidamente a las secciones principales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/admin/contracts"
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Contratos</span>
              </Link>
              <Link
                href="/admin/reminders"
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Bell className="h-5 w-5 text-warning" />
                <span className="text-sm font-medium">Recordatorios</span>
              </Link>
              <Link
                href="/admin/keys-visits"
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Key className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Llaves y Visitas</span>
              </Link>
              <Link
                href="/admin/waiting-list"
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Lista de Espera</span>
              </Link>
              <Link
                href="/admin/owners"
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Home className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Propietarios</span>
              </Link>
              <Link
                href="/admin/tenants"
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <UserCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Inquilinos</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contracts Expiring Soon */}
      {expiringContracts > 0 && (
        <Card className="border-warning/50 bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="h-5 w-5" />
              Contratos por Vencer
            </CardTitle>
            <CardDescription>Contratos que vencen en los próximos 60 días</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {contracts.filter(c => c.status === "expiring_soon").map((contract) => (
                <div key={contract.id} className="flex justify-between items-center p-3 rounded-lg bg-background border">
                  <div>
                    <p className="font-medium">{contract.propertyTitle}</p>
                    <p className="text-sm text-muted-foreground">
                      Inquilino: {contract.tenantName} | Vence: {new Date(contract.endDate).toLocaleDateString("es-ES")}
                    </p>
                  </div>
                  <Link href="/admin/contracts">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Ver Contrato
                    </Badge>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
