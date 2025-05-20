export async function POST(request: Request) {
  try {
    // Extract order_id from the URL path
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const order_id = pathParts[pathParts.indexOf('orders') + 1];
    
    // Get request data
    const { product_ids } = await request.json();
    
    // Simulate return initiation
    return new Response(
      JSON.stringify({
        message: `Return initiated for order ${order_id}`,
        product_ids,  
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating return:", error);
    return new Response(
      JSON.stringify({ error: "Error creating return" }),
      { status: 500 }
    );
  }
}
