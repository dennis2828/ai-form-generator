"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { AIChatSession } from "@/configs/AIModal";
import { useState } from "react";

const PROMPT = ', on the basis of description please give me form in json format, with form title, form subheading, form fileld, form name, form placeholder and form label in json format'

export const CreateForm = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [userInput, setUserInput] = useState("");

    const onCreateForm = async () =>{
        const result = await AIChatSession.sendMessage(`Description: ${userInput}${PROMPT}`);
        console.log(result.response.text());
        
    }

  return (
    <div>
        <Button onClick={()=>setOpenDialog(true)}>+ Create Form</Button>
      <Dialog open={openDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new form</DialogTitle>
            <DialogDescription>
                <Textarea className="my-2" onChange={(e)=>setUserInput(e.target.value)} placeholder="Write description of your form" />
                <div className="flex gap-2 my-3 justify-end">
                    <Button onClick={()=>setOpenDialog(false)} variant="destructive">Cancel</Button>
                    <Button onClick={()=>onCreateForm()}>Create</Button>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
