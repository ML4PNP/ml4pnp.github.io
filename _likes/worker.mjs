export default {
  async fetch(request, env) {
    if (request.headers.get("Origin") !== env.SITE_ORIGIN) return new Response(null, {status: 403});
    const headers = {
      "Access-Control-Allow-Origin": env.SITE_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "no-store"
    };
    if (request.method === "OPTIONS") return new Response(null, {status: 204, headers});
    if (request.method !== "POST") return new Response(null, {status: 405, headers});
    const body = await request.json().catch(() => null);
    const {item, token, action} = body ?? {};
    const validToken = typeof token === "string" && /^[a-f0-9-]{36}$/i.test(token);
    if (typeof item !== "string" || item.length > 1024 ||
        !/^(news|publication|\/projects\/|\/software\/):.+$/.test(item) ||
        !["read", "like", "unlike"].includes(action) ||
        !(validToken || (token === null && action === "read"))) {
      return new Response(null, {status: 400, headers});
    }

    const statements = [];
    if (action === "like") statements.push(env.DB.prepare("INSERT OR IGNORE INTO likes(item, token) VALUES (?, ?)").bind(item, token));
    if (action === "unlike") statements.push(env.DB.prepare("DELETE FROM likes WHERE item = ? AND token = ?").bind(item, token));
    statements.push(env.DB.prepare("SELECT COUNT(*) AS count, COALESCE(MAX(token = ?), 0) AS liked FROM likes WHERE item = ?").bind(token, item));
    const results = await env.DB.batch(statements);
    const {count, liked} = results.at(-1).results[0];
    return Response.json({count, liked: Boolean(liked)}, {headers});
  }
};
