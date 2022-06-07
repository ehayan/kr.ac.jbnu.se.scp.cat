import Head from "next/head";
import TrelloBoardComponent from "../components/custom/sections/trelloboardcomponent";
import TrelloModal from "../components/custom/sections/modalcomponent";
import { db } from "../pages/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Trello = ({ }) => {
  // const [info, setInfo] = useState([]);
  const [url, setURL] = useState("");
  const [api, setAPI] = useState("");
  const [token, setToken] = useState("");
  const [exist, setExist] = useState(false);
  const router = useRouter();
  const projectId= router.query.projectId;

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
      const trelloLink = projectLinks.trello;
      const api = projectLinks.trelloAPIKey;
      const token = projectLinks.trelloToken;
      setURL(trelloLink);
      setAPI(api);
      setToken(token);
      console.log(api)
      console.log(token)
      if(api != undefined && token != undefined) {
        if(api != "" && token != "")
          setExist(true)
      } 
    })
  }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | Trello</title>
        <link rel="icon" href="/probby_logo.png" />
      </Head>

      <div>
        {exist ? (
          <TrelloBoardComponent link={url} api={api} token={token} />
        ) : (
          <div className="m-t-30 m-l-20">
            <TrelloModal router={router} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Trello;
