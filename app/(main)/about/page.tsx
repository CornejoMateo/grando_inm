import { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros | Grando Inmobiliaria",
  description: "Conoce Grando Inmobiliaria: tu socio de confianza para encontrar la propiedad ideal.",
}

const stats = [
  { label: "Propiedades publicadas", value: "500+", icon: Building2 },
  { label: "Clientes satisfechos", value: "2,000+", icon: Users },
  { label: "Anos de experiencia", value: "15+", icon: Award },
  { label: "Ciudades cubiertas", value: "25+", icon: Heart },
]

const team = [
  {
    name: "Sarah Mitchell",
    role: "CEO y fundadora",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  },
  {
    name: "David Chen",
    role: "Directora de ventas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Gestora de propiedades",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
  {
    name: "Michael Thompson",
    role: "Relaciones con clientes",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Sobre <span className="text-primary">Grando Inmobiliaria</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Nos dedicamos a ayudarte a encontrar el lugar perfecto para vivir. Con anos de experiencia y pasion por el sector inmobiliario, conectamos personas con propiedades que se ajustan a su estilo de vida y aspiraciones.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <stat.icon className="h-10 w-10 text-primary mb-4" />
                  <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra mision</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En Grando Inmobiliaria creemos que encontrar la propiedad adecuada es mucho mas que una transaccion: se trata de descubrir un lugar donde se construyen recuerdos y se hacen realidad los suenos.
                </p>
                <p>
                  Nuestra mision es simplificar la busqueda de vivienda con informacion transparente, asesoria experta y atencion personalizada para cada cliente. Buscamos que cada persona encuentre una propiedad que realmente se sienta como su hogar.
                </p>
                <p>
                  Con nuestra amplia red y profundo conocimiento de los mercados locales, estamos comprometidos a ser tu aliado de confianza en cada etapa de tu camino inmobiliario.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Interior de apartamento moderno"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Transparencia</h3>
                <p className="text-muted-foreground">
                  Creemos en una comunicacion clara y honesta. Sin costos ocultos, sin sorpresas; solo informacion directa para ayudarte a tomar decisiones informadas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Excelencia</h3>
                <p className="text-muted-foreground">
                  Estamos comprometidos con ofrecer un servicio excepcional en cada etapa. Desde la primera consulta hasta el dia de mudanza, cuidamos una experiencia fluida.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
                <p className="text-muted-foreground">
                  Somos mas que una inmobiliaria. Formamos parte de las comunidades a las que servimos y trabajamos para crear barrios mas vivos y conectados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Conoce a nuestro equipo</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Nuestro equipo de profesionales esta aqui para ayudarte a encontrar tu propiedad ideal.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
