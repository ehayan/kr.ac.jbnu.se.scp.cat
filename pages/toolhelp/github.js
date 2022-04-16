import Head from 'next/head';
import GitHubHelp from '../../components/custom/sections/toolhelp/github-help';
import FeatureComponent from '../../components/custom/sections/featurecomponent';

export default function ToolHelpGit() {
  return (
    <div>
      <Head>
        <title>CAT | Help | Github</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeatureComponent />
      <GitHubHelp />
    </div>
  );
}
