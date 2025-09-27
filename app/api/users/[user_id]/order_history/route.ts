import { USER_INFO } from "@/config/demoData";
import { createApiRoute, getDynamicParam, jsonResponse } from "@/lib/api-utils";

export const GET = createApiRoute(async (request: Request) => {
  // Extract user_id from the URL path
  const user_id = getDynamicParam(request, 'users');
  
  console.log("Retrieving order history for user:", user_id);
  return jsonResponse(USER_INFO.order_history);
});
