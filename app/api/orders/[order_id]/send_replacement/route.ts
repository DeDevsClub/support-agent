export async function POST(request: Request) {
  try {
    // Extract order_id from the URL path
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const order_id = pathParts[pathParts.indexOf('orders') + 1];
    
    // Get request data
    const { product_id } = await request.json();
    
    // Simulate sending a replacement
    return new Response(
      JSON.stringify({
        message: `Replacement for product ${product_id} in order ${order_id} sent successfully`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending replacement:", error);
    return new Response(
      JSON.stringify({ error: "Error sending replacement" }),
      { status: 500 }
    );
  }
}
