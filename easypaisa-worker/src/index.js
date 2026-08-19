export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "easypaisa-worker" }, { headers: cors });
    }

    if (url.pathname === "/create-payment" && request.method === "POST") {
      if (!env.EASYPAISA_STORE_ID || !env.EASYPAISA_HASH_KEY || !env.EASYPAISA_API_URL) {
        return Response.json({ ok: false, code: "EASYPAISA_NOT_CONFIGURED", message: "Easypaisa merchant credentials are not configured yet." }, { status: 503, headers: cors });
      }

      const body = await request.json().catch(() => ({}));
      const amount = Number(body.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        return Response.json({ ok: false, code: "INVALID_AMOUNT" }, { status: 400, headers: cors });
      }

      const orderId = `ACL-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
      return Response.json({
        ok: false,
        code: "MERCHANT_CONFIGURATION_REQUIRED",
        orderId,
        message: "Merchant credentials are present, but the exact Easypaisa production request format must be populated from the merchant-issued Integration Guide before accepting live payments."
      }, { status: 501, headers: cors });
    }

    return Response.json({ ok: false, code: "NOT_FOUND" }, { status: 404, headers: cors });
  }
};
