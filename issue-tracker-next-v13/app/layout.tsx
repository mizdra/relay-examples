import { ClientOnlyRelayEnvironmentProvider } from "../src/relay/ClientOnlyRelayEnvironmentProvider";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Github Issues: Relay</title>
      </head>
      <body>
        <ClientOnlyRelayEnvironmentProvider>
          {children}
        </ClientOnlyRelayEnvironmentProvider>
      </body>
    </html>
  );
}
