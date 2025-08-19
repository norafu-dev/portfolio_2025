import configPromise from "@payload-config";
import { getPayload, type Payload } from "payload";

let cachedPayload: Payload | null = null;

const getPayloadClient = async (): Promise<Payload> => {
  if (!cachedPayload) {
    const config = await configPromise;
    cachedPayload = await getPayload({ config });
  }
  return cachedPayload;
};

export default getPayloadClient;
