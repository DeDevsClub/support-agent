// import { NextRequest } from 'next/server';

export async function POST(request: Request) {
  try {
    // Extract order_id from the URL path
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const orderIdIndex = pathParts.findIndex(part => part === 'orders') + 2;
    const order_id = pathParts[orderIdIndex];
    
    // Get request body if needed
    // const data = await request.json();
    
    // Simulate order cancellation
    return new Response(
      JSON.stringify({ message: `Order ${order_id} cancelled successfully` }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error cancelling order:", error);
    return new Response(
      JSON.stringify({ error: "Error cancelling order" }),
      { status: 500 }
    );
  }
}
