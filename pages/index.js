import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import AfterLoginBanner from "../components/banner/AfterLoginBanner";
import BeforeLoginBanner from "../components/banner/BeforeLoginBanner";
import Project_Setting from "../components/custom/sections/settingcomponent";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>PROBBY</title>
        <meta name="description" content="CAT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? <AfterLoginBanner /> : <BeforeLoginBanner />}
      {session ? (
        <div className="spacer">
          <h2 className="text-center">PROJECT LIST</h2>
          <p className="text-center">프로젝트 관리(등록/수정/삭제/추가)</p>
          <Project_Setting />
        </div>
      ) : (
        <CustomComponents />
      )}
    </div>
  );
}
