import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyGrid } from "@/components/property-grid"
import { getFeaturedProperties } from "@/lib/data"

export default function HomePage() {
  const featuredProperties = getFeaturedProperties()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Encuentra tu hogar perfecto con <span className="text-primary">Grando Inmobiliaria</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Descubre propiedades excepcionales en ubicaciones privilegiadas. Desde estudios acogedores hasta penthouses de lujo, te ayudamos a encontrar el hogar que se adapta a tu estilo de vida.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/properties">
                  Ver propiedades
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/about">Conoce mas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Propiedades destacadas</h2>
              <p className="mt-2 text-muted-foreground">
                Propiedades destacadas para que explores
              </p>
            </div>
            <Button asChild variant="ghost" className="self-start md:self-auto">
              <Link href="/properties">
                Ver todas las propiedades
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <PropertyGrid properties={featuredProperties} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Listo para encontrar la casa de tus suenos?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Recorre nuestra amplia coleccion de propiedades y deja que te ayudemos a encontrar el lugar perfecto para llamar hogar.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/properties">
              Empezar a explorar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
