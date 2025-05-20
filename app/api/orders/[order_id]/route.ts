import { DEMO_ORDERS } from "@/config/demoData";

export async function GET(request: Request) {
  try {
    // Extract order_id from the URL path
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const order_id = pathParts[pathParts.indexOf('orders') + 1];
    
    const order = DEMO_ORDERS.find((order) => order.id === order_id);
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.error("Error retrieving order:", error);
    return new Response(
      JSON.stringify({ error: "Error retrieving order" }),
      { status: 500 }
    );
  }
}
