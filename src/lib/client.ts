import { createClient } from "microcms-js-sdk";
import type { MicroCMSClient } from "microcms-js-sdk";

const config: MicroCMSClient = {
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
};

export const client = createClient(config);
