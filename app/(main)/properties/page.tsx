import { Metadata } from "next"
import { PropertyGrid } from "@/components/property-grid"
import { PropertyFilters } from "@/components/property-filters"
import { properties } from "@/lib/data"

export const metadata: Metadata = {
  title: "Propiedades | Grando Inmobiliaria",
  description: "Explora nuestra amplia coleccion de propiedades en alquiler.",
}

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Propiedades</h1>
        <p className="mt-2 text-muted-foreground">
          Explora nuestra coleccion de {properties.length} propiedades disponibles
        </p>
      </div>

      <div className="mb-8">
        <PropertyFilters />
      </div>

      <PropertyGrid properties={properties} />
    </div>
  )
}
