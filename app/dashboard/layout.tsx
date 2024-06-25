"use client"
import { SignedIn } from "@clerk/nextjs"
import SideNav from "./_components/SideNav"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div className="md:w-64 fixed">
            <SideNav />
        </div>
        <div className="md:ml-64">
            <SignedIn>
                {children}
            </SignedIn>
        </div>
    </div>
  )
}

export default DashboardLayout