import { Button } from "@/components/ui/button"
import { CreateForm } from "./_components/CreateForm"

const page = () => {
  return (
    <div className="p-10 flex items-center justify-between">
      <h2 className="font-bold text-3xl flex items-center justify-between">Dashboard</h2>
      <CreateForm/>
    </div>
  )
}

export default page