import React, { useState } from 'react';
import { FormGroup, Input, FormText, Container } from 'reactstrap';
import Table from '../../basic/table';
const Drivecomponent = () => {
  const [file, setFile] = useState([]);

  const onSelectFile = (e) => {
    if (e.target.files[0]) {
      const [file] = e.target.files;
      setFile((arr) => [...arr, { file, fileName: file.name }]);
      // console.log(file);
    }
  };

  const FileList = ({ file, setFile }) => {
    const onClick = (fileName) => {
      setFile(file.filter((f) => f.fileName !== fileName));
      console.log(fileName);
    };

    return (
      <div>
        {file.map((f) => {
          return (
            <div>
              {f.fileName}
              {f.fileDate}
              <button onClick={() => onClick(f.fileName)}>❌</button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Container className='m-t-10'>
      <h3>Project GoogleDrive : link</h3>
      <FormGroup>
        {/* <FormText>Select a file to upload to GoogleDrive</FormText> */}
        <Input name='file' type='file' onChange={onSelectFile} />
      </FormGroup>
      <hr></hr>
      <FileList file={file} setFile={setFile} />
      <Table setForm={''} />
    </Container>
  );
};

export default Drivecomponent;
