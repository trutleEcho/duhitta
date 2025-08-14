import Link from "next/link"
import { Building2, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface OrganizationNotFoundProps {
  organizationId?: string
  organizationName?: string
}

export default function OrganizationNotFound({ organizationId, organizationName }: OrganizationNotFoundProps = {}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Building2 className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Organization Not Found</CardTitle>
          <CardDescription className="text-base">
            {organizationId || organizationName ? (
              <>
                We couldn't find the organization{" "}
                <span className="font-medium text-foreground">"{organizationName || organizationId}"</span>
              </>
            ) : (
              "The organization you're looking for doesn't exist or may have been removed."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/organizations">
                <Search className="mr-2 h-4 w-4" />
                Browse Organizations
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/public">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Need help finding an organization?</p>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/support">Contact Support</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
