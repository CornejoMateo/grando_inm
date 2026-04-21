export type PropertyStatus = "available" | "rented"

export type WaitingListStatus = "pending" | "contacted"

export interface Property {
  id: string
  title: string
  price: number
  location: string
  shortLocation: string
  description: string
  status: PropertyStatus
  rooms: number
  bathrooms: number
  area: number
  images: string[]
  features: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export interface WaitingListEntry {
  id: string
  propertyId: string
  propertyTitle: string
  name: string
  email: string
  phone: string
  date: string
  status: WaitingListStatus
}

// Contract Management Types
export type ContractStatus = "active" | "expiring_soon" | "expired" | "renewed"

export interface Contract {
  id: string
  propertyId: string
  propertyTitle: string
  tenantId: string
  tenantName: string
  ownerId: string
  ownerName: string
  startDate: string
  endDate: string
  monthlyRent: number
  status: ContractStatus
  renewalHistory: RenewalRecord[]
}

export interface RenewalRecord {
  id: string
  date: string
  previousRent: number
  newRent: number
  increasePercentage: number
  notes?: string
}

// Reminder Types
export type ReminderType = "contract_expiry" | "rent_increase" | "visit" | "key_return" | "payment" | "other"
export type ReminderStatus = "pending" | "completed" | "dismissed"
export type ReminderPriority = "low" | "medium" | "high"

export interface Reminder {
  id: string
  type: ReminderType
  title: string
  description: string
  dueDate: string
  relatedEntityId?: string
  relatedEntityType?: "property" | "contract" | "tenant" | "owner"
  status: ReminderStatus
  priority: ReminderPriority
  createdAt: string
}

// Keys and Visits Types
export type KeyStatus = "available" | "with_agent" | "with_tenant" | "lost"
export type VisitStatus = "scheduled" | "completed" | "cancelled" | "no_show"

export interface PropertyKey {
  id: string
  propertyId: string
  propertyTitle: string
  keyCode: string
  location: string
  status: KeyStatus
  assignedTo?: string
  notes?: string
}

export interface Visit {
  id: string
  propertyId: string
  propertyTitle: string
  visitorName: string
  visitorPhone: string
  visitorEmail: string
  scheduledDate: string
  scheduledTime: string
  agentName: string
  status: VisitStatus
  notes?: string
}

// Owner and Tenant Types
export interface Owner {
  id: string
  name: string
  email: string
  phone: string
  address: string
  properties: string[]
  bankAccount?: string
  taxId?: string
  notes?: string
  createdAt: string
}

export interface Tenant {
  id: string
  name: string
  email: string
  phone: string
  currentPropertyId?: string
  currentPropertyTitle?: string
  contractId?: string
  emergencyContact?: {
    name: string
    phone: string
    relationship: string
  }
  documents?: string[]
  notes?: string
  moveInDate?: string
  createdAt: string
}
