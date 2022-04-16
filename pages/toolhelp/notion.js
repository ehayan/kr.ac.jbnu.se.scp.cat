import Head from 'next/head';
import NotionHelp from '../../components/custom/sections/toolhelp/notion-help';
import FeatureComponent from '../../components/custom/sections/featurecomponent';

export default function ToolHelpNotion() {
  return (
    <div>
      <Head>
        <title>CAT | Help | Notion</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeatureComponent />
      <NotionHelp />
    </div>
  );
}
