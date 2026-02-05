export async function onRequest(context) {
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = context.env;
  
  const url = new URL(context.request.url);
  
  if (!url.searchParams.has('code')) {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo&redirect_uri=${encodeURIComponent(url.origin)}`;
    return Response.redirect(authUrl, 302);
  }
  
  return new Response("OAuth callback received - SUCCESS!", { status: 200 });
}
