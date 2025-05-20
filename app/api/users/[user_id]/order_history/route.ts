import { USER_INFO } from "@/config/demoData";

export async function GET(request: Request) {
  try {
    // Extract user_id from the URL path
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const userIdIndex = pathParts.findIndex(part => part === 'users') + 2;
    const user_id = pathParts[userIdIndex];
    
    console.log("Retrieving order history for user:", user_id);
    return new Response(JSON.stringify(USER_INFO.order_history), {
      status: 200,
    });
  } catch (error) {
    console.error("Error retrieving order history:", error);
    return new Response(
      JSON.stringify({ error: "Error retrieving order history" }),
      { status: 500 }
    );
  }
}
