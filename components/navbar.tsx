"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/properties", label: "Propiedades" },
  { href: "/about", label: "Nosotros" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image src="/f_icon.png" alt="Logo Ferrero Inmobiliaria" width={100} height={100} className="flex-shrink-0" />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Ferrero Inmobiliaria</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] max-w-sm p-0">
            <SheetHeader className="border-b bg-gradient-to-b from-primary/10 to-background pt-6 pr-12 pb-5 pl-5">
              <SheetTitle className="text-left text-primary">Ferrero Inmobiliaria</SheetTitle>
              <SheetDescription className="text-left">
                Navega rapido por las secciones principales.
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-3 flex flex-col gap-2 px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between rounded-lg border px-4 py-3 text-base font-medium transition-all",
                    pathname === link.href
                      ? "border-primary/35 bg-primary/10 text-primary"
                      : "border-border/60 bg-muted/40 text-muted-foreground hover:border-primary/25 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            <SheetFooter className="mt-auto border-t px-3 pt-3 pb-5">
              <Button asChild className="w-full" onClick={() => setOpen(false)}>
                <Link href="/properties">Ver propiedades</Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
