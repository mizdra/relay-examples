"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "./environment";

type Props = {
  children: React.ReactNode;
};

// RelayEnvironmentProvider is not a Server Component, but since it is not marked with `'use client';`,
// it is treated as a Server Component. This causes a runtime error.
// Therefore, we will create a wrapper for the client component to work around this problem.
// ref: https://beta.nextjs.org/docs/rendering/server-and-client-components#rendering-third-party-context-providers-in-server-components
export function ClientOnlyRelayEnvironmentProvider({ children }: Props) {
  const environment = getCurrentEnvironment();
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
