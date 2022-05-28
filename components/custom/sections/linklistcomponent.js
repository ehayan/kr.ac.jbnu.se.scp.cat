import React, { useRef, useEffect, useState } from "react";
import { db } from "../../../pages/firebase";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
} from "reactstrap";

import {
  FaGithub,
  FaGoogleDrive,
  FaTrello,
  FaSlack,
  FaDiaspora,
} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const List = () => {
  const [dbIsEmpty, setDbIsEmpty] = useState(true);
  const [link, setLink] = useState([]);
  const linkData = db.collection("registered_link");
  const linkId = useRef(1);

  useEffect(() => {
    linkData.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          setDbIsEmpty(false);
          const newLink = {
            title: doc.data().title,
            url: doc.data().url.url,
            name: doc.id,
            id: linkId.current,
          };
          linkId.current += 1;
          setLink((link) => [...link, newLink]);
        }
      });
    });
  }, []);

  console.log(link);

  return (
    <Card className="m-r-10">
      <CardBody className="">
        <h3 style={{ fontFamily: "Spoca_B" }}>Registered Link</h3>
        {dbIsEmpty ? (
          <div>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              등록된 링크가 없습니다
            </CardSubtitle>
          </div>
        ) : (
          <div>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              클릭시 해당 링크로 이동합니다
            </CardSubtitle>
          </div>
        )}
        <ListGroup flush>
          {link.map((list) => (
            <ListGroupItem
              key={list.id}
              action
              href={list.url}
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <div>
                {/* <i className="m-r-5">{list.icon}</i> */}
                {list.title} :
                <a
                  id={list.name}
                  className={list.url === "" ? "hide" : "m-l-5"}
                >
                  {list.url}
                </a>
                <button
                  id={`delete-btn${list.name}`}
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                    list.url = "";
                    const print_url = document.getElementById(list.name);
                    print_url.remove();
                    linkData.doc(list.name).delete();
                  }}
                >
                  <TiDelete size={20} />
                </button>
                <style jsx>{`
                  h3 {
                    font-family: "Spoca_B";
                  }

                  button {
                    background-color: transparent;
                    border-color: transparent;
                  }
                `}</style>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default List;
