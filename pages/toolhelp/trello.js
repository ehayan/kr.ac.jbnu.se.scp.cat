import Head from 'next/head';
import TrelloHelp from '../../components/custom/sections/toolhelp/trello-help';
import FeatureComponent from '../../components/custom/sections/featurecomponent';

export default function ToolHelpTrello() {
  return (
    <div>
      <Head>
        <title>CAT | Help | Trello</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeatureComponent />
      <TrelloHelp />
    </div>
  );
}
