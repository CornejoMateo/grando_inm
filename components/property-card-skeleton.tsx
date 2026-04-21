import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function PropertyCardSkeleton() {
  return (
    <Card className="overflow-hidden py-0 gap-0">
      <Skeleton className="aspect-[4/3] rounded-none" />
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-6 w-48 mt-1" />
          </div>
          <Skeleton className="h-4 w-32" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-9 w-full mt-2" />
        </div>
      </CardContent>
    </Card>
  )
}
