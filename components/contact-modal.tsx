"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Linkedin } from "lucide-react"

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>Feel free to reach out through email or LinkedIn.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button asChild className="w-full">
            <a href="mailto:frankmungai77@gmail.com" className="flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a
              href="https://www.linkedin.com/in/francismungai77/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

