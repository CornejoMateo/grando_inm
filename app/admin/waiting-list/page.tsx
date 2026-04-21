"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { StatusBadge } from "@/components/status-badge"
import { waitingList, properties } from "@/lib/data"
import { Empty, EmptyTitle, EmptyDescription, EmptyMedia } from "@/components/ui/empty"
import { Users } from "lucide-react"

export default function AdminWaitingListPage() {
  // Group waiting list entries by property
  const groupedByProperty = waitingList.reduce(
    (acc, entry) => {
      if (!acc[entry.propertyId]) {
        acc[entry.propertyId] = {
          propertyTitle: entry.propertyTitle,
          entries: [],
        }
      }
      acc[entry.propertyId].entries.push(entry)
      return acc
    },
    {} as Record<string, { propertyTitle: string; entries: typeof waitingList }>
  )

  const rentedProperties = properties.filter((p) => p.status === "rented")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Lista de espera</h1>
        <p className="text-muted-foreground mt-1">
          Gestiona los contactos que esperan propiedades disponibles
        </p>
      </div>

      {Object.keys(groupedByProperty).length === 0 ? (
        <Card>
          <CardContent className="py-12">
            <Empty>
              <EmptyMedia variant="icon">
                <Users />
              </EmptyMedia>
              <EmptyTitle>No hay registros en la lista de espera</EmptyTitle>
              <EmptyDescription>
                Cuando una persona se una a la lista de espera de una propiedad alquilada, aparecera aqui.
              </EmptyDescription>
            </Empty>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {rentedProperties.map((property) => {
            const group = groupedByProperty[property.id]
            if (!group) return null

            return (
              <Card key={property.id}>
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                  <CardDescription>
                    {group.entries.length} {group.entries.length === 1 ? "persona" : "personas"} en la lista de espera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Correo</TableHead>
                        <TableHead>Telefono</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {group.entries.map((entry) => (
                        <TableRow key={entry.id}>
                          <TableCell className="font-medium">{entry.name}</TableCell>
                          <TableCell>{entry.email}</TableCell>
                          <TableCell>{entry.phone}</TableCell>
                          <TableCell>
                            {new Date(entry.date).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </TableCell>
                          <TableCell>
                            <Select defaultValue={entry.status}>
                              <SelectTrigger className="w-[130px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">
                                  <StatusBadge status="pending" />
                                </SelectItem>
                                <SelectItem value="contacted">
                                  <StatusBadge status="contacted" />
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
