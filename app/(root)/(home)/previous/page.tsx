import React from 'react';

type pageProps = {

};

const Previous: React.FC<pageProps> = () => {

    return(
        <section className="flex size-full flex-col gap-10 text-white">
            <h1 className="text-xl font-bold lg:text-3xl">Previous Meetings</h1>
        </section>
    )
}
export default Previous;