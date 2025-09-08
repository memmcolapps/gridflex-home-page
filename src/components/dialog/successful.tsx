"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleCheck } from "lucide-react";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SuccessfulDialog = ({ isOpen, onOpenChange }: Props) => {
  const [delayedOpen, setDelayedOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      timer = setTimeout(() => setDelayedOpen(true), 500);
    } else {
      setDelayedOpen(false);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <Dialog open={delayedOpen} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 border-none">
        <DialogHeader className="gap-0 pt-8">
          <div className="flex items-center justify-center">
            <CircleCheck size={200} strokeWidth={0.4} color="#161CCA" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <DialogTitle className="pt-4 font-normal text-[var(--primary)] ">
              Your message has been successfully sent
            </DialogTitle>
            <DialogDescription className="text-center font-light w-102 pt-4">
              Our team is reviewing it and will get back to you with feedback as
              soon as possible. Thank you for reaching out to GridFlex.
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
