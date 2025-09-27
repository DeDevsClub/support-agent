import { createApiRoute, getDynamicParam, jsonResponse } from "@/lib/api-utils";

export const POST = createApiRoute(async (request: Request) => {
  // Extract user_id from the URL path
  const user_id = getDynamicParam(request, 'users');
  
  // Get request data
  const { info } = await request.json();
  
  // Simulate updating user information
  return jsonResponse({
    message: `User ${user_id} info updated`,
    updatedField: info.field,
    newValue: info.value,
  });
});
