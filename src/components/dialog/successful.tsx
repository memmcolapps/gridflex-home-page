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
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setProgress(0);
      const startTime = Date.now();
      const duration = 2000;

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 800, 100);
        setProgress(newProgress);

        if (newProgress < 100) {
          requestAnimationFrame(updateProgress);
        } else {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      };

      requestAnimationFrame(updateProgress);
    } else {
      setIsLoading(true);
      setProgress(0);
    }
  }, [isOpen]);

  const size = isMobile ? 60 : 80; 
  const radius = isMobile ? 45 : 55; 
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="gap-0 border-none max-w-md w-full">
        <DialogHeader className="gap-0 pt-4">
          {isLoading && (
            <div className="flex items-center justify-center pb-4 py-8 px-4">
              <div className="relative">
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-white"></div>
                <svg
                  className="absolute top-0 left-0 h-20 w-20 md:h-24 md:w-24 transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#22c55e"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{
                      transition: progress === 0 ? 'none' : 'stroke-dashoffset 2.0s ease-out'
                    }}
                  />
                </svg>
              </div>
            </div>
          )}

          {!isLoading && (
            <>
              <div className="flex items-center justify-center py-4">
                <CircleCheck size={size} strokeWidth={0.4} color="#161CCA" />
              </div>
              <div className="flex flex-col items-center justify-center px-4 pb-4">
                <DialogTitle className="text-center text-base md:text-md font-medium text-[var(--primary)] mb-2">
                  Message Sent Successfully!
                </DialogTitle>
                <DialogDescription className="text-center font-light leading-relaxed">
                  Our team will review your message and get back to you soon. Thank you for reaching out!
                </DialogDescription>
              </div>
            </>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};