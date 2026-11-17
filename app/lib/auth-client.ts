import { createAuthClient } from "better-auth/react";
import type { BetterAuthClientPlugin } from "better-auth/client";

const genericOAuthClient = () =>
  ({
    id: "generic-oauth-client",
    pathMethods: {
      "/sign-in/oauth2": "POST",
      "/oauth2/link": "POST",
    },
  }) satisfies BetterAuthClientPlugin;

export const authClient = createAuthClient({
  plugins: [genericOAuthClient()],
});
