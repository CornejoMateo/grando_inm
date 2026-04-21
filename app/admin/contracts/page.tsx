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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { contracts } from "@/lib/data"
import { Contract } from "@/lib/types"
import { FileText, Plus, RefreshCw, TrendingUp, AlertTriangle, CheckCircle, Clock, History } from "lucide-react"

function ContractStatusBadge({ status }: { status: Contract["status"] }) {
  const config = {
    active: { label: "Activo", variant: "default" as const, className: "bg-success text-success-foreground" },
    expiring_soon: { label: "Por Vencer", variant: "default" as const, className: "bg-warning text-warning-foreground" },
    expired: { label: "Vencido", variant: "destructive" as const, className: "" },
    renewed: { label: "Renovado", variant: "default" as const, className: "bg-primary text-primary-foreground" },
  }
  const { label, variant, className } = config[status]
  return <Badge variant={variant} className={className}>{label}</Badge>
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "USD" }).format(amount)
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function getDaysUntilExpiry(endDate: string) {
  const end = new Date(endDate)
  const today = new Date()
  const diff = Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  return diff
}

export default function ContractsPage() {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null)

  const activeContracts = contracts.filter(c => c.status === "active").length
  const expiringContracts = contracts.filter(c => c.status === "expiring_soon").length
  const expiredContracts = contracts.filter(c => c.status === "expired").length
  const totalRent = contracts.filter(c => c.status === "active" || c.status === "expiring_soon")
    .reduce((sum, c) => sum + c.monthlyRent, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contratos</h1>
          <p className="text-muted-foreground">
            Gestiona vencimientos, aumentos y renovaciones de contratos
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Contrato
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Contratos Activos</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeContracts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Por Vencer</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiringContracts}</div>
            <p className="text-xs text-muted-foreground">Próximos 60 días</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Vencidos</CardTitle>
            <Clock className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiredContracts}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Renta Mensual Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRent)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Contracts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Todos los Contratos</CardTitle>
          <CardDescription>Lista completa de contratos de alquiler</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Inquilino</TableHead>
                <TableHead>Propietario</TableHead>
                <TableHead>Inicio</TableHead>
                <TableHead>Vencimiento</TableHead>
                <TableHead>Renta</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => {
                const daysUntil = getDaysUntilExpiry(contract.endDate)
                return (
                  <TableRow key={contract.id}>
                    <TableCell className="font-medium">{contract.propertyTitle}</TableCell>
                    <TableCell>{contract.tenantName}</TableCell>
                    <TableCell>{contract.ownerName}</TableCell>
                    <TableCell>{formatDate(contract.startDate)}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{formatDate(contract.endDate)}</span>
                        {contract.status !== "expired" && contract.status !== "renewed" && (
                          <span className={`text-xs ${daysUntil <= 30 ? "text-destructive" : daysUntil <= 60 ? "text-warning" : "text-muted-foreground"}`}>
                            {daysUntil > 0 ? `${daysUntil} días restantes` : "Vencido"}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{formatCurrency(contract.monthlyRent)}</TableCell>
                    <TableCell>
                      <ContractStatusBadge status={contract.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedContract(contract)}
                            >
                              <History className="h-4 w-4" />
                              <span className="sr-only">Historial</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Historial de Renovaciones</DialogTitle>
                              <DialogDescription>
                                {contract.propertyTitle} - {contract.tenantName}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              {contract.renewalHistory.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-4">
                                  No hay historial de renovaciones
                                </p>
                              ) : (
                                contract.renewalHistory.map((renewal) => (
                                  <div key={renewal.id} className="border rounded-lg p-4 space-y-2">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium">{formatDate(renewal.date)}</span>
                                      <Badge variant="outline" className="text-success">
                                        +{renewal.increasePercentage.toFixed(1)}%
                                      </Badge>
                                    </div>
                                    <div className="flex gap-4 text-sm">
                                      <span className="text-muted-foreground">
                                        Anterior: {formatCurrency(renewal.previousRent)}
                                      </span>
                                      <span className="text-foreground font-medium">
                                        Nueva: {formatCurrency(renewal.newRent)}
                                      </span>
                                    </div>
                                    {renewal.notes && (
                                      <p className="text-sm text-muted-foreground">{renewal.notes}</p>
                                    )}
                                  </div>
                                ))
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4" />
                          <span className="sr-only">Renovar</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">Ver</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
