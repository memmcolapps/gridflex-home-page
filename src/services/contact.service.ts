import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface ContactMessage {
  organizationName: string;
  organizationSize: string;
  email: string;
  phoneNo: string;
  message: string;
}

export const createMessage = async (data: ContactMessage) => {
  const response = await axios.post(
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
