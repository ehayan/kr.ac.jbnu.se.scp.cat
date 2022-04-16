import Head from 'next/head';
import SlackHelp from '../../components/custom/sections/toolhelp/slack-help';
import FeatureComponent from '../../components/custom/sections/featurecomponent';

export default function ToolHelpSlack() {
  return (
    <div>
      <Head>
        <title>CAT | Help | Slack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeatureComponent />
      <SlackHelp />
    </div>
  );
}
