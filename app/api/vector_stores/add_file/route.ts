import OpenAI from "openai";
import { createApiRoute, jsonResponse } from "@/lib/api-utils";

const openai = new OpenAI();

export const POST = createApiRoute(async (request: Request) => {
  const { vectorStoreId, fileId, attributes } = await request.json();
  console.log(
    `Adding file ${fileId} with attributes ${JSON.stringify(attributes)}`
  );
  
  const vectorStore = await openai.vectorStores.files.create(vectorStoreId, {
    file_id: fileId,
    attributes,
  });
  
  return jsonResponse(vectorStore);
});
