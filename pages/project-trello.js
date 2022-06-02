import Head from "next/head";
import TrelloBoardComponent from "../components/custom/sections/trelloboardcomponent";
import TrelloModal from "../components/custom/sections/modalcomponent";
import { db } from "../pages/firebase";
import { useEffect, useState } from "react";
const Trello = (page) => {
  // const [info, setInfo] = useState([]);
  const [url, setURL] = useState("");
  const [api, setAPI] = useState("");
  const [token, setToken] = useState("");
  const [exist, setExist] = useState(false);

  useEffect(() => {
    db.collection("registered_link")
      .doc("trello")
      .get()
      .then((snapshot) => {
        // const API = snapshot.data().APIkey.API;
        // const token = snapshot.data().token.token;
        if (snapshot.exists) {
          setURL(snapshot.data().url.url);
          if (snapshot.data().APIkey != "") {
            setExist(true);
            setAPI(snapshot.data().APIkey);
            setToken(snapshot.data().token);
          }
        }
      });
  }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | Trello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {exist ? (
          <TrelloBoardComponent link={url} api={api} token={token} />
        ) : (
          <div className="m-t-30 m-l-20">
            <TrelloModal />
          </div>
        )}
      </div>
    </div>
  );
};
export default Trello;
