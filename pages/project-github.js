import Head from 'next/head';
import { useEffect, useState } from 'react';
import GitCommitComponent from '../components/custom/sections/gitcommitcomponent';
import { useRouter } from "next/router";

const Dashboard = (page) => {

  return (
    <div>
      <Head>
        <title>PROBBY | GitHub</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <GitCommitComponent />
    </div>
  );
};
export default Dashboard;
