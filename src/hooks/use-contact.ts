import { useMutation } from "@tanstack/react-query";
import { createMessage, type ContactMessage } from "@/services/contact.service";

export const useCreateMessage = () => {
  return useMutation({
    mutationFn: (data: ContactMessage) => createMessage(data),
  });
};
