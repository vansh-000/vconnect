'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { tokenProvider } from '@/actions/stream.action';
import Loader from '@/components/Loader';

const apiKey = 'hump9jh8sqcj';

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) throw new Error('Stream API key is missing');

        const client = new StreamVideoClient({
            apiKey: apiKey,
            user: {
                id: user.id,
                name: user.username || user.id,
                image: user.imageUrl,
            },
            tokenProvider,
        });

        setVideoClient(client);

        return () => {
            client.disconnectUser();
        };
    }, [user, isLoaded]);

    if (!isLoaded) return <Loader />;
    if (!videoClient) return <div>Initializing Video Client...</div>;

    return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
