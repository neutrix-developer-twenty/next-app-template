import '@mantine/core/styles.css';

import React from 'react';
import { Toaster } from 'sonner';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        {/* <script
          async
          defer
          src="https://neutrix-cms-external-script.vercel.app/neutrix.js?siteId=neuMf4rvd4v"
        /> */}
        {/* <script async defer src="http://localhost:8080/neutrix.js?siteId=neuvMDWihVg" /> */}
        <script
          async
          defer
          src="https://neutrix-cms-panel-frontend-ful-git-10a6e3-neutrix-in-house-apps.vercel.app/neutrix.js?siteId=neuT87Kz2G2"
        />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Toaster richColors position="top-center" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
