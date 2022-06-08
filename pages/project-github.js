import Head from 'next/head';
import { useEffect, useState } from 'react';
import GitCommitComponent from '../components/custom/sections/gitcommitcomponent';
import { useRouter } from "next/router";
import * as Github from "../api/github";

const Dashboard = (page) => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const [link, setLink] = useState("");

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('/api/addlinks');
      const data = await response.json();
      return data;
    }
    getResponse().then((data) => {
      const allLinks = data.message;
      const filteredLinks = allLinks.filter((link)=>(link.projectId == projectId));
      const projectLinks = filteredLinks.length == 0 ? {} : filteredLinks[0];
      const githubLink = projectLinks.github;
      setLink(githubLink);
    })
  }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | GitHub</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <GitCommitComponent link={link} />
    </div>
  );
};
export default Dashboard;
