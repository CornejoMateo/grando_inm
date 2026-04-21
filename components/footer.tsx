import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Grando Inmobiliaria</h3>
            <p className="text-sm text-muted-foreground">
              Tu socio de confianza para encontrar la propiedad perfecta. Conectamos personas con el hogar de sus suenos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Propiedades
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Av. Ejemplo 123</p>
              <p>Ciudad de Río Cuarto, Córdoba</p>
              <p>contacto@grandoinmobiliaria.com</p>
              <p>+52 (55) 1234-5678</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Grando Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
