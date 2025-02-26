import StreamVideoProvider from '@/providers/ StreamClientProvider';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "VConnect",
    description: "A video conferencing application to meet your needs",
    icons: {
        icon: "/icons/logo.png",
    },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    )
}

export default RootLayout;