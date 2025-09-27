import { DEMO_ORDERS } from "@/config/demoData";
import { createApiRoute, getDynamicParam, jsonResponse } from "@/lib/api-utils";

export const GET = createApiRoute(async (request: Request) => {
  // Extract order_id from the URL path
  const order_id = getDynamicParam(request, 'orders');
  
  const order = DEMO_ORDERS.find((order) => order.id === order_id);
  if (!order) {
    return jsonResponse({ error: "Order not found" }, 404);
  }
  
  return jsonResponse(order);
});
