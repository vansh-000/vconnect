import React from 'react';

type pageProps = {

};

const Upcoming: React.FC<pageProps> = () => {

    return(
        <section className="flex size-full flex-col gap-10 text-white">
            <h1 className="text-xl font-bold lg:text-3xl">Upcoming Meetings</h1>
        </section>
    )
}
export default Upcoming;