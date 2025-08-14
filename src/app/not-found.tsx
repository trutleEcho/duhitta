// In your organization page
import {notFound} from 'next/navigation'
import OrganizationNotFound from "../components/ui/organization-not-found";

export default async function OrganizationPage() {
    return <OrganizationNotFound/>
}