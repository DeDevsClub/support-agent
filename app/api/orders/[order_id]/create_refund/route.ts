import { createApiRoute, getDynamicParam, jsonResponse } from "@/lib/api-utils";

export const POST = createApiRoute(async (request: Request) => {
  // Extract order_id from the URL path
  const order_id = getDynamicParam(request, 'orders');
  
  // Get request data
  const { amount, reason } = await request.json();
  
  // Simulate refund creation
  return jsonResponse({
    message: `Refund of $${amount} for order ${order_id} is processing`,
    reason,
  });
});
