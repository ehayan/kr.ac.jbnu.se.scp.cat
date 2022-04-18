import Head from 'next/head';
import GitHubHelp from '../../components/custom/sections/toolhelp/github-help';
import HelpBannerComponent from '../../components/custom/sections/helpbannercomponent';

export default function ToolHelpGit() {
  return (
    <div>
      <Head>
        <title>CAT | Help | Github</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HelpBannerComponent />
      <GitHubHelp />
    </div>
  );
}
