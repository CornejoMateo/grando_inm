import { Property, WaitingListEntry, Contract, Reminder, PropertyKey, Visit, Owner, Tenant } from "./types"

export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento moderno en el centro",
    price: 2500,
    location: "123 Main Street, Downtown, New York, NY 10001",
    shortLocation: "Downtown, New York",
    description: "Impresionante apartamento moderno en pleno centro. Cuenta con ventanales de piso a techo con vistas espectaculares de la ciudad, acabados premium y acceso a amenidades de primer nivel como piscina en la azotea, gimnasio y servicio de conserjeria 24/7. A poca distancia de restaurantes, tiendas y transporte publico.",
    status: "available",
    rooms: 2,
    bathrooms: 2,
    area: 95,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    ],
    features: ["Estacionamiento", "Piscina", "Gimnasio", "Conserjeria", "Balcon", "Aire acondicionado"],
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "2",
    title: "Estudio acogedor cerca del parque",
    price: 1200,
    location: "456 Park Avenue, Upper East Side, New York, NY 10021",
    shortLocation: "Upper East Side, NY",
    description: "Encantador estudio con vista a Central Park. Ideal para profesionales jovenes o parejas. Recientemente renovado con electrodomesticos modernos y suelos de madera en todo el espacio. El edificio ofrece lavanderia, aparcamiento para bicicletas y un hermoso patio ajardinado.",
    status: "rented",
    rooms: 1,
    bathrooms: 1,
    area: 45,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=800&h=600&fit=crop",
    ],
    features: ["Lavanderia", "Aparcamiento para bicicletas", "Jardin", "Suelos de madera"],
    coordinates: { lat: 40.7736, lng: -73.9566 },
  },
  {
    id: "3",
    title: "Penthouse de lujo",
    price: 8500,
    location: "789 Skyline Tower, Midtown, New York, NY 10019",
    shortLocation: "Midtown, NY",
    description: "Excepcional penthouse con vistas panoramicas al skyline de Manhattan. Esta residencia de lujo cuenta con 4 habitaciones, cocina gourmet con electrodomesticos de alta gama, terraza privada y tecnologia domotica en toda la propiedad. El edificio incluye amenidades exclusivas como ascensor privado, cava de vinos y spa.",
    status: "available",
    rooms: 4,
    bathrooms: 3,
    area: 220,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    ],
    features: ["Terraza privada", "Cava de vinos", "Spa", "Hogar inteligente", "Ascensor privado", "Conserjeria"],
    coordinates: { lat: 40.7614, lng: -73.9776 },
  },
  {
    id: "4",
    title: "Unidad brownstone en Brooklyn",
    price: 3200,
    location: "321 Oak Street, Brooklyn Heights, Brooklyn, NY 11201",
    shortLocation: "Brooklyn Heights, NY",
    description: "Hermoso apartamento en un historico brownstone de Brooklyn. Los detalles arquitectonicos originales se integran con mejoras modernas. Incluye paredes de ladrillo visto, techos altos y patio trasero privado. Ubicado en un vecindario arbolado cerca de excelentes restaurantes y del paseo costero.",
    status: "available",
    rooms: 3,
    bathrooms: 2,
    area: 140,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
    ],
    features: ["Patio trasero privado", "Ladrillo visto", "Techos altos", "Apto mascotas", "Almacenamiento"],
    coordinates: { lat: 40.6958, lng: -73.9936 },
  },
  {
    id: "5",
    title: "Condominio frente al agua",
    price: 4800,
    location: "555 Harbor Drive, Jersey City, NJ 07302",
    shortLocation: "Jersey City, NJ",
    description: "Espectacular condominio frente al agua con vistas despejadas a la Estatua de la Libertad y al skyline de Manhattan. Diseno moderno de planta abierta con ventanales de piso a techo. El edificio ofrece piscina infinita, acceso privado a marina y gimnasio de ultima generacion. Acceso rapido en ferry a Manhattan.",
    status: "rented",
    rooms: 2,
    bathrooms: 2,
    area: 110,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    ],
    features: ["Frente al agua", "Piscina", "Marina", "Gimnasio", "Acceso en ferry", "Porteria"],
    coordinates: { lat: 40.7178, lng: -74.0431 },
  },
  {
    id: "6",
    title: "Loft artistico en SoHo",
    price: 5500,
    location: "888 Broadway, SoHo, New York, NY 10012",
    shortLocation: "SoHo, NY",
    description: "Autentico loft artistico en el corazon de SoHo. Amplio espacio abierto con techos de 14 pies, columnas originales de hierro fundido y ventanales industriales que llenan el ambiente de luz natural. Ideal para profesionales creativos o coleccionistas de arte. Ubicacion privilegiada rodeada de galerias y boutiques.",
    status: "available",
    rooms: 2,
    bathrooms: 1,
    area: 165,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
    ],
    features: ["Techos altos", "Estilo industrial", "Luz natural", "Planta abierta", "Hierro fundido"],
    coordinates: { lat: 40.7233, lng: -73.9984 },
  },
]

export const waitingList: WaitingListEntry[] = [
  {
    id: "1",
    propertyId: "2",
    propertyTitle: "Estudio acogedor cerca del parque",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    date: "2024-01-15",
    status: "contacted",
  },
  {
    id: "2",
    propertyId: "2",
    propertyTitle: "Estudio acogedor cerca del parque",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    date: "2024-01-18",
    status: "pending",
  },
  {
    id: "3",
    propertyId: "5",
    propertyTitle: "Condominio frente al agua",
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 345-6789",
    date: "2024-01-20",
    status: "pending",
  },
  {
    id: "4",
    propertyId: "5",
    propertyTitle: "Condominio frente al agua",
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "+1 (555) 456-7890",
    date: "2024-01-22",
    status: "contacted",
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.slice(0, 3)
}

export function getWaitingListByProperty(propertyId: string): WaitingListEntry[] {
  return waitingList.filter((entry) => entry.propertyId === propertyId)
}

// Owners
export const owners: Owner[] = [
  {
    id: "1",
    name: "Robert Williams",
    email: "r.williams@email.com",
    phone: "+1 (555) 111-2222",
    address: "100 Owner Lane, Manhattan, NY 10001",
    properties: ["1", "3"],
    bankAccount: "****4567",
    taxId: "***-**-1234",
    notes: "Prefiere comunicacion por correo",
    createdAt: "2022-03-15",
  },
  {
    id: "2",
    name: "Patricia Brown",
    email: "p.brown@email.com",
    phone: "+1 (555) 222-3333",
    address: "200 Property Ave, Brooklyn, NY 11201",
    properties: ["2", "4"],
    bankAccount: "****7890",
    taxId: "***-**-5678",
    notes: "Cuenta con administrador para emergencias",
    createdAt: "2021-06-20",
  },
  {
    id: "3",
    name: "James Anderson",
    email: "j.anderson@email.com",
    phone: "+1 (555) 333-4444",
    address: "300 Investment Blvd, Jersey City, NJ 07302",
    properties: ["5", "6"],
    bankAccount: "****1234",
    taxId: "***-**-9012",
    createdAt: "2023-01-10",
  },
]

// Tenants
export const tenants: Tenant[] = [
  {
    id: "1",
    name: "Alice Martinez",
    email: "a.martinez@email.com",
    phone: "+1 (555) 444-5555",
    currentPropertyId: "2",
    currentPropertyTitle: "Estudio acogedor cerca del parque",
    contractId: "1",
    emergencyContact: {
      name: "Carlos Martinez",
      phone: "+1 (555) 444-5556",
      relationship: "Hermano",
    },
    moveInDate: "2023-06-01",
    createdAt: "2023-05-15",
  },
  {
    id: "2",
    name: "David Thompson",
    email: "d.thompson@email.com",
    phone: "+1 (555) 555-6666",
    currentPropertyId: "5",
    currentPropertyTitle: "Condominio frente al agua",
    contractId: "2",
    emergencyContact: {
      name: "Susan Thompson",
      phone: "+1 (555) 555-6667",
      relationship: "Esposa",
    },
    moveInDate: "2023-09-01",
    createdAt: "2023-08-20",
  },
  {
    id: "3",
    name: "Maria Garcia",
    email: "m.garcia@email.com",
    phone: "+1 (555) 666-7777",
    notes: "Inquilina anterior, contrato finalizado de forma amistosa",
    createdAt: "2022-01-10",
  },
]

// Contracts
export const contracts: Contract[] = [
  {
    id: "1",
    propertyId: "2",
    propertyTitle: "Estudio acogedor cerca del parque",
    tenantId: "1",
    tenantName: "Alice Martinez",
    ownerId: "2",
    ownerName: "Patricia Brown",
    startDate: "2023-06-01",
    endDate: "2024-05-31",
    monthlyRent: 1200,
    status: "expiring_soon",
    renewalHistory: [
      {
        id: "r1",
        date: "2023-06-01",
        previousRent: 1100,
        newRent: 1200,
        increasePercentage: 9.09,
        notes: "Contrato inicial con aumento del 9% respecto al inquilino anterior",
      },
    ],
  },
  {
    id: "2",
    propertyId: "5",
    propertyTitle: "Condominio frente al agua",
    tenantId: "2",
    tenantName: "David Thompson",
    ownerId: "3",
    ownerName: "James Anderson",
    startDate: "2023-09-01",
    endDate: "2025-08-31",
    monthlyRent: 4800,
    status: "active",
    renewalHistory: [],
  },
  {
    id: "3",
    propertyId: "4",
    propertyTitle: "Unidad brownstone en Brooklyn",
    tenantId: "3",
    tenantName: "Maria Garcia",
    ownerId: "2",
    ownerName: "Patricia Brown",
    startDate: "2022-01-01",
    endDate: "2023-12-31",
    monthlyRent: 3000,
    status: "expired",
    renewalHistory: [
      {
        id: "r2",
        date: "2023-01-01",
        previousRent: 2800,
        newRent: 3000,
        increasePercentage: 7.14,
        notes: "Renovacion anual",
      },
    ],
  },
]

// Reminders
export const reminders: Reminder[] = [
  {
    id: "1",
    type: "contract_expiry",
    title: "Contrato por vencer - Estudio acogedor cerca del parque",
    description: "El contrato de Alice Martinez vence el 31 de mayo de 2024. Contactar a la inquilina para conversar la renovacion.",
    dueDate: "2024-04-30",
    relatedEntityId: "1",
    relatedEntityType: "contract",
    status: "pending",
    priority: "high",
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    type: "rent_increase",
    title: "Revision anual de renta - Condominio frente al agua",
    description: "Revisar precios de mercado para discutir ajuste anual de renta con David Thompson.",
    dueDate: "2024-08-01",
    relatedEntityId: "2",
    relatedEntityType: "contract",
    status: "pending",
    priority: "medium",
    createdAt: "2024-01-15",
  },
  {
    id: "3",
    type: "visit",
    title: "Inspeccion de propiedad - Apartamento moderno en el centro",
    description: "Programar inspeccion rutinaria para la propiedad vacante.",
    dueDate: "2024-02-15",
    relatedEntityId: "1",
    relatedEntityType: "property",
    status: "completed",
    priority: "low",
    createdAt: "2024-01-20",
  },
  {
    id: "4",
    type: "key_return",
    title: "Devolucion de llaves - Brownstone de Brooklyn",
    description: "Recoger llaves de Maria Garcia tras finalizar el contrato.",
    dueDate: "2024-01-05",
    relatedEntityId: "4",
    relatedEntityType: "property",
    status: "completed",
    priority: "high",
    createdAt: "2023-12-28",
  },
  {
    id: "5",
    type: "payment",
    title: "Seguimiento de pago - Estudio acogedor",
    description: "Verificar si se recibio la renta de enero de Alice Martinez.",
    dueDate: "2024-01-10",
    relatedEntityId: "1",
    relatedEntityType: "tenant",
    status: "completed",
    priority: "medium",
    createdAt: "2024-01-05",
  },
]

// Property Keys
export const propertyKeys: PropertyKey[] = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Apartamento moderno en el centro",
    keyCode: "KEY-001",
    location: "Caja fuerte de oficina - Cajon A",
    status: "available",
    notes: "Main entrance + mailbox key",
  },
  {
    id: "2",
    propertyId: "2",
    propertyTitle: "Estudio acogedor cerca del parque",
    keyCode: "KEY-002",
    location: "Con inquilino",
    status: "with_tenant",
    assignedTo: "Alice Martinez",
  },
  {
    id: "3",
    propertyId: "3",
    propertyTitle: "Penthouse de lujo",
    keyCode: "KEY-003",
    location: "Caja fuerte de oficina - Cajon B",
    status: "available",
    notes: "Incluye control remoto del estacionamiento",
  },
  {
    id: "4",
    propertyId: "4",
    propertyTitle: "Unidad brownstone en Brooklyn",
    keyCode: "KEY-004",
    location: "Agent Maria",
    status: "with_agent",
    assignedTo: "Maria Rodriguez",
    notes: "Para mostrar esta semana",
  },
  {
    id: "5",
    propertyId: "5",
    propertyTitle: "Condominio frente al agua",
    keyCode: "KEY-005",
    location: "Con inquilino",
    status: "with_tenant",
    assignedTo: "David Thompson",
  },
  {
    id: "6",
    propertyId: "6",
    propertyTitle: "Loft artistico en SoHo",
    keyCode: "KEY-006",
    location: "Caja fuerte de oficina - Cajon A",
    status: "available",
  },
]

// Visits
export const visits: Visit[] = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Apartamento moderno en el centro",
    visitorName: "Jennifer Lee",
    visitorPhone: "+1 (555) 777-8888",
    visitorEmail: "j.lee@email.com",
    scheduledDate: "2024-02-01",
    scheduledTime: "10:00",
    agentName: "Maria Rodriguez",
    status: "scheduled",
    notes: "Busca 2 habitaciones, presupuesto hasta $3000",
  },
  {
    id: "2",
    propertyId: "3",
    propertyTitle: "Penthouse de lujo",
    visitorName: "William Foster",
    visitorPhone: "+1 (555) 888-9999",
    visitorEmail: "w.foster@email.com",
    scheduledDate: "2024-02-02",
    scheduledTime: "14:00",
    agentName: "John Smith",
    status: "scheduled",
    notes: "Cliente VIP, se muda desde California",
  },
  {
    id: "3",
    propertyId: "4",
    propertyTitle: "Unidad brownstone en Brooklyn",
    visitorName: "Sophie Chen",
    visitorPhone: "+1 (555) 111-0000",
    visitorEmail: "s.chen@email.com",
    scheduledDate: "2024-01-28",
    scheduledTime: "11:30",
    agentName: "Maria Rodriguez",
    status: "completed",
    notes: "Muy interesada, podria enviar solicitud",
  },
  {
    id: "4",
    propertyId: "6",
    propertyTitle: "Loft artistico en SoHo",
    visitorName: "Mark Johnson",
    visitorPhone: "+1 (555) 222-1111",
    visitorEmail: "m.johnson@email.com",
    scheduledDate: "2024-01-25",
    scheduledTime: "15:00",
    agentName: "John Smith",
    status: "no_show",
  },
]

// Helper functions
export function getContractById(id: string): Contract | undefined {
  return contracts.find((c) => c.id === id)
}

export function getContractsByStatus(status: Contract["status"]): Contract[] {
  return contracts.filter((c) => c.status === status)
}

export function getOwnerById(id: string): Owner | undefined {
  return owners.find((o) => o.id === id)
}

export function getTenantById(id: string): Tenant | undefined {
  return tenants.find((t) => t.id === id)
}

export function getVisitsByProperty(propertyId: string): Visit[] {
  return visits.filter((v) => v.propertyId === propertyId)
}

export function getPendingReminders(): Reminder[] {
  return reminders.filter((r) => r.status === "pending")
}

export function getKeyByProperty(propertyId: string): PropertyKey | undefined {
  return propertyKeys.find((k) => k.propertyId === propertyId)
}
