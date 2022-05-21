import React, { useState, useRef } from "react";
import { FormGroup, Input, FormText, Container, Button } from "reactstrap";
import Table from "../../basic/table";
const Drivecomponent = () => {
  const [file, setFile] = useState([]);

  const onSelectFile = (e) => {
    if (e.target.files[0]) {
      const [file] = e.target.files;
      setFile((arr) => [...arr, { file, fileName: file.name }]);
    }
  };

  const FileList = ({ file, setFile }) => {
    const onClick = (fileName) => {
      setFile(file.filter((f) => f.fileName !== fileName)); //같은이름이면 다지워짐
      // console.log(fileName);
    };

    const onSave = () => {
      console.log("save");
    };

    return (
      <div>
        {file.map((f) => {
          return (
            <div>
              {f.fileName}
              <button onClick={onSave}>✔</button>
              <button onClick={() => onClick(f.fileName)}>❌</button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="m-l-30">
        <h2 className="title">Project GoogleDrive : link</h2>
      </div>
      <Container className="m-t-30">
        <FormGroup>
          <Input type="file" onChange={onSelectFile} />
        </FormGroup>
        <hr></hr>
        <FileList file={file} setFile={setFile} />
        <Table />
      </Container>
    </div>
  );
};
export default Drivecomponent;
