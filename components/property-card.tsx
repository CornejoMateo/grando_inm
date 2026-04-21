import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { Property } from "@/lib/types"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price)

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 py-0 gap-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <StatusBadge status={property.status} />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-2xl font-bold text-primary">{formattedPrice}<span className="text-sm font-normal text-muted-foreground">/mes</span></p>
            <h3 className="font-semibold text-lg mt-1 text-balance">{property.title}</h3>
          </div>
          
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">{property.shortLocation}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4" />
              <span>{property.rooms} {property.rooms === 1 ? "Habitacion" : "Habitaciones"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? "Bano" : "Banos"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square className="h-4 w-4" />
              <span>{property.area} m²</span>
            </div>
          </div>

          <Button asChild className="w-full mt-2">
            <Link href={`/properties/${property.id}`}>Ver detalles</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
