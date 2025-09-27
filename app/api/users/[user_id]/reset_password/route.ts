import { createApiRoute, getDynamicParam, jsonResponse } from "@/lib/api-utils";

export const POST = createApiRoute(async (request: Request) => {
  // Extract user_id from the URL path
  const user_id = getDynamicParam(request, 'users');
  
  // Simulate sending a reset password email
  return jsonResponse({
    message: `Password reset email sent to user ${user_id}`,
  });
});
