"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Users, LayoutDashboard, Menu, X, FileText, Bell, Key, UserCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const sidebarLinks = [
  { href: "/admin", label: "Panel", icon: LayoutDashboard },
  { href: "/admin/properties", label: "Propiedades", icon: Building2 },
  { href: "/admin/waiting-list", label: "Lista de Espera", icon: Users },
  { href: "/admin/contracts", label: "Contratos", icon: FileText },
  { href: "/admin/reminders", label: "Recordatorios", icon: Bell },
  { href: "/admin/keys-visits", label: "Llaves y Visitas", icon: Key },
  { href: "/admin/owners", label: "Propietarios", icon: Home },
  { href: "/admin/tenants", label: "Inquilinos", icon: UserCircle },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Alternar menu</span>
      </Button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
            <Link href="/admin" className="flex items-center gap-2 min-w-0">
              <span className="text-sm font-semibold text-sidebar-primary truncate">
                Grando Inmobiliaria
              </span>
            </Link>
            <span className="ml-2 text-xs bg-sidebar-accent text-sidebar-accent-foreground px-2 py-0.5 rounded">
              Administracion
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-sidebar-border">
            <Link
              href="/"
              className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
            >
              Volver al sitio
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
