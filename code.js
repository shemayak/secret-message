export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS so your GitHub Pages site can fetch it safely
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://github.io", // Replace with your GitHub Pages URL
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // 2. Fetch the variable from your private KV storage
    // You can also add custom password-checking query parameters here for extra security
    const secretValue = await env.MY_VARIABLES_STORE.get("API_KEY");

    // 3. Return the variable to your frontend
    return new Response(JSON.stringify({ value: secretValue }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  },
};
