export async function POST(request: Request) {
  try {
    // Extract order_id from the URL path
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const order_id = pathParts[pathParts.indexOf('orders') + 1];
    
    // Get request data
    const { amount, reason } = await request.json();
    
    // Simulate refund creation
    return new Response(
      JSON.stringify({
        message: `Refund of $${amount} for order ${order_id} is processing`,
        reason,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating refund:", error);
    return new Response(
      JSON.stringify({ error: "Error creating refund" }),
      { status: 500 }
    );
  }
}
