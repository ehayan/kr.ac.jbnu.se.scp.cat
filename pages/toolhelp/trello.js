import Head from 'next/head';
import TrelloHelp from '../../components/custom/sections/toolhelp/trello-help';
import HelpBannerComponent from '../../components/custom/sections/helpbannercomponent';

export default function ToolHelpTrello() {
  return (
    <div>
      <Head>
        <title>PROBBY | Help | Trello</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HelpBannerComponent />
      <TrelloHelp />
    </div>
  );
}
