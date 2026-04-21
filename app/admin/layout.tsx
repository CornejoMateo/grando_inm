import { Metadata } from "next"
import { AdminSidebar } from "@/components/admin-sidebar"

export const metadata: Metadata = {
  title: "Administracion | Grando Inmobiliaria",
  description: "Panel de administracion de Grando Inmobiliaria",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <main className="md:pl-64">
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  )
}
