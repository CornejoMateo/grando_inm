"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { CheckCircle } from "lucide-react"

interface WaitingListFormProps {
  propertyTitle: string
}

export function WaitingListForm({ propertyTitle }: WaitingListFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // UI only - just show success state
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <CheckCircle className="h-12 w-12 text-[var(--success)]" />
            <div>
              <h3 className="font-semibold text-lg">Ya estas en la lista</h3>
              <p className="text-muted-foreground mt-1">
                Te avisaremos cuando esta propiedad vuelva a estar disponible.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unirse a la lista de espera</CardTitle>
        <CardDescription>
          Recibe una notificacion cuando &quot;{propertyTitle}&quot; este disponible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nombre</FieldLabel>
              <Input id="name" placeholder="Tu nombre completo" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Correo electronico</FieldLabel>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Telefono</FieldLabel>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
            </Field>
            <Button type="submit" className="w-full">
              Unirme a la lista de espera
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
