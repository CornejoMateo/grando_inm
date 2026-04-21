import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Bed, Bath, Square, MessageCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { ImageGallery } from "@/components/image-gallery"
import { GoogleMap } from "@/components/google-map"
import { WaitingListForm } from "@/components/waiting-list-form"
import { getPropertyById, properties } from "@/lib/data"

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const property = getPropertyById(id)
  
  if (!property) {
    return { title: "Propiedad no encontrada | Grando Inmobiliaria" }
  }

  return {
    title: `${property.title} | Grando Inmobiliaria`,
    description: property.description,
  }
}

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price)

  const whatsappMessage = encodeURIComponent(
    `Hola! Estoy interesado en la propiedad "${property.title}" publicada por ${formattedPrice}/mes.`
  )
  const whatsappLink = `https://wa.me/15551234567?text=${whatsappMessage}`

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Back Button */}
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a propiedades
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <ImageGallery images={property.images} title={property.title} />

          {/* Property Info */}
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-balance">{property.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>
              <StatusBadge status={property.status} className="text-sm" />
            </div>

            <p className="text-3xl md:text-4xl font-bold text-primary">
              {formattedPrice}
              <span className="text-lg font-normal text-muted-foreground">/mes</span>
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Bed className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">{property.rooms}</span>
                <span className="text-sm text-muted-foreground">
                  {property.rooms === 1 ? "Habitacion" : "Habitaciones"}
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Bath className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">{property.bathrooms}</span>
                <span className="text-sm text-muted-foreground">
                  {property.bathrooms === 1 ? "Bano" : "Banos"}
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Square className="h-6 w-6 text-primary mb-2" />
                <span className="text-2xl font-bold">{property.area}</span>
                <span className="text-sm text-muted-foreground">m²</span>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Descripcion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Caracteristicas y amenidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card>
            <CardHeader>
              <CardTitle>Ubicacion</CardTitle>
            </CardHeader>
            <CardContent>
              <GoogleMap
                lat={property.coordinates.lat}
                lng={property.coordinates.lng}
                title={`Ubicacion de ${property.title}`}
                className="h-[300px] md:h-[400px]"
              />
              <p className="text-sm text-muted-foreground mt-3">
                {property.location}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* CTA Card */}
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Te interesa esta propiedad?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {property.status === "available" ? (
                <Button asChild size="lg" className="w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </a>
                </Button>
              ) : (
                <WaitingListForm propertyTitle={property.title} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
