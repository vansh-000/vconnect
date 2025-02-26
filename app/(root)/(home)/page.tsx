"use client"
import { getFirstUpcomingCallTime } from '@/components/CardList';
import MeetingList from '@/components/MeetingLists';
import { useGetCalls } from '@/hooks/useGetCalls';
import React from 'react'

const Home = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();
  const firstUpcomingCallTime = getFirstUpcomingCallTime();

  console.log("First upcoming call time:",);

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-stone-800 ">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className=" p-4 flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            {firstUpcomingCallTime
              ? `Upcoming Meeting at: ${firstUpcomingCallTime.toLocaleString()}`
              : "No upcoming meetings"}
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingList />
    </section>
  );
};

export default Home;