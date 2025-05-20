/**
 * API Route Utilities for Next.js 15+
 * 
 * This file provides helper functions for consistent API route handling,
 * compatible with Next.js 15.3.2 and above.
 */

/**
 * Extract a dynamic parameter from the URL path
 * 
 * @param request The request object
 * @param segmentName The dynamic segment name (e.g., 'orders', 'users')
 * @returns The dynamic parameter value
 */
export function getDynamicParam(request: Request, segmentName: string): string {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const paramIndex = pathParts.indexOf(segmentName) + 1;
  
  if (paramIndex < pathParts.length) {
    return pathParts[paramIndex];
  }
  
  throw new Error(`Dynamic parameter for ${segmentName} not found in URL path`);
}

/**
 * Create a successful JSON response
 * 
 * @param data The data to return
 * @param status The HTTP status code (default: 200)
 * @returns A Response object
 */
export function jsonResponse(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * Create an error response
 * 
 * @param message The error message
 * @param status The HTTP status code (default: 500)
 * @returns A Response object
 */
export function errorResponse(message: string, status = 500): Response {
  console.error(`API Error: ${message}`);
  return new Response(
    JSON.stringify({ error: message }),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

/**
 * Type for API route handlers that need to use dynamic parameters
 */
export type ApiRouteHandler = (request: Request) => Promise<Response>;

/**
 * Create a dynamic API route handler with error handling
 * 
 * @param handler The handler function
 * @returns A route handler compatible with Next.js 15.3.2+
 */
export function createApiRoute(handler: ApiRouteHandler): ApiRouteHandler {
  return async (request: Request) => {
    try {
      return await handler(request);
    } catch (error) {
      if (error instanceof Error) {
        return errorResponse(error.message);
      }
      return errorResponse('An unknown error occurred');
    }
  };
}
