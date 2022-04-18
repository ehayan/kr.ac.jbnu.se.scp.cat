import Head from 'next/head';
import NotionHelp from '../../components/custom/sections/toolhelp/notion-help';
import HelpBannerComponent from '../../components/custom/sections/helpbannercomponent';

export default function ToolHelpNotion() {
  return (
    <div>
      <Head>
        <title>CAT | Help | Notion</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HelpBannerComponent />
      <NotionHelp />
    </div>
  );
}
