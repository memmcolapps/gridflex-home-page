import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface ContactResponse{
    responsecode: string;
    responsedesc: string;
    responsedata: ContactMessage;
}

export interface ContactMessage {
  organizationName: string;
  organizationSize: string;
  email: string;
  phoneNo: string;
  message: string;
}

export const createMessage = async (
    data: ContactMessage
  ): Promise<ContactResponse> => {
    const response = await axios.post<ContactResponse>(
      `${BASE_URL}/portal/onboard/v1/api/gfPortal/service/message/create`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    return response.data;
  };
