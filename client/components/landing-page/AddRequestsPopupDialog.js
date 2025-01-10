import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddRequestsForm from "@/components/landing-page/AddRequestsForm";

export default function AddRequestsPopupDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Request</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Request</DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
          <AddRequestsForm />
        </DialogHeader>
        
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
