"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { propertyKeys, visits } from "@/lib/data"
import { PropertyKey, Visit } from "@/lib/types"
import { 
  Key, 
  Calendar, 
  Plus, 
  MapPin, 
  User, 
  Phone, 
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit
} from "lucide-react"

function KeyStatusBadge({ status }: { status: PropertyKey["status"] }) {
  const config = {
    available: { label: "Disponible", className: "bg-success text-success-foreground" },
    with_agent: { label: "Con Agente", className: "bg-primary text-primary-foreground" },
    with_tenant: { label: "Con Inquilino", className: "bg-muted text-muted-foreground" },
    lost: { label: "Perdida", className: "bg-destructive text-destructive-foreground" },
  }
  const { label, className } = config[status]
  return <Badge className={className}>{label}</Badge>
}

function VisitStatusBadge({ status }: { status: Visit["status"] }) {
  const config = {
    scheduled: { label: "Programada", className: "bg-primary text-primary-foreground", icon: Clock },
    completed: { label: "Completada", className: "bg-success text-success-foreground", icon: CheckCircle },
    cancelled: { label: "Cancelada", className: "bg-muted text-muted-foreground", icon: XCircle },
    no_show: { label: "No asistió", className: "bg-destructive text-destructive-foreground", icon: AlertCircle },
  }
  const { label, className, icon: Icon } = config[status]
  return (
    <Badge className={className}>
      <Icon className="h-3 w-3 mr-1" />
      {label}
    </Badge>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("es-ES", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function KeysVisitsPage() {
  const availableKeys = propertyKeys.filter(k => k.status === "available").length
  const keysWithAgent = propertyKeys.filter(k => k.status === "with_agent").length
  const scheduledVisits = visits.filter(v => v.status === "scheduled").length
  const completedVisits = visits.filter(v => v.status === "completed").length

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Llaves y Visitas</h1>
          <p className="text-muted-foreground">
            Administra llaves de propiedades y reservas de visitas
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Programar Visita
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Visitas Programadas</CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledVisits}</div>
            <p className="text-xs text-muted-foreground">Próximos días</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Visitas Completadas</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedVisits}</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="keys" className="space-y-4">
        <TabsList>
          <TabsTrigger value="visits">
            <Calendar className="h-4 w-4 mr-2" />
            Visitas ({visits.length})
          </TabsTrigger>
        </TabsList>

        {/* Visits Tab */}
        <TabsContent value="visits">
          <Card>
            <CardHeader>
              <CardTitle>Reservas de Visitas</CardTitle>
              <CardDescription>Calendario de visitas programadas y historial</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha y Hora</TableHead>
                    <TableHead>Propiedad</TableHead>
                    <TableHead>Visitante</TableHead>
                    <TableHead>Contacto</TableHead>
                    <TableHead>Agente</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visits.map((visit) => (
                    <TableRow key={visit.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{formatDate(visit.scheduledDate)}</span>
                          <span className="text-sm text-muted-foreground">{visit.scheduledTime} hs</span>
                        </div>
                      </TableCell>
                      <TableCell>{visit.propertyTitle}</TableCell>
                      <TableCell className="font-medium">{visit.visitorName}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1 text-sm">
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {visit.visitorPhone}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {visit.visitorEmail}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{visit.agentName}</TableCell>
                      <TableCell>
                        <VisitStatusBadge status={visit.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
