// import { NextRequest } from 'next/server';

import { createApiRoute, getDynamicParam, jsonResponse, errorResponse } from "@/lib/api-utils";

export const POST = createApiRoute(async (request: Request) => {
  try {
    // Extract order_id from the URL path
    const order_id = getDynamicParam(request, 'orders');
    
    // Simulate order cancellation
    return jsonResponse({ 
      message: `Order ${order_id} cancelled successfully` 
    });
  } catch (error) {
    console.error("Error cancelling order:", error);
    return errorResponse("Error cancelling order");
  }
});
