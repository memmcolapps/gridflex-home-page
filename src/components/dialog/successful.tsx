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
        const newProgress = Math.min((elapsed / duration) * 200, 100);
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

  const size = isMobile ? 120 : 200;
  const radius = isMobile ? 70 : 78;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 border-none">
        <DialogHeader className="gap-0 pt-8">
          {isLoading && (
            <div className="flex md:items-center md:justify-center py-18 px-18 md:py-18 md:px-38">
              <div className="relative">
                <div className="h-26 w-26 md:h-40 md:w-40 rounded-full border-2 border-white"></div>
                <svg
                  className="absolute bottom-14 h-26 w-26 md:h-40 md:w-40 transform -rotate-90"
                  viewBox="0 0 160 160"
                >
                  <circle
                    cx="80"
                    cy="80"
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
              <div className="flex px-16 md:px-0 items-center justify-center">
                <CircleCheck size={size} strokeWidth={0.4} color="#161CCA" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <DialogTitle className="pt-4 text-center text-sm md:text-base font-normal text-[var(--primary)]">
                  Your message has been successfully sent
                </DialogTitle>
                <DialogDescription className="text-center text-xs md:text-base font-light pt-4">
                  Our team is reviewing it and will get back to you with feedback as
                  soon as possible. Thank you for reaching out to GridFlex.
                </DialogDescription>
              </div>
            </>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};