import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
} from 'reactstrap';

import {
  FaGithub,
  FaGoogleDrive,
  FaTrello,
  FaSlack,
  FaDiaspora,
} from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const ListData = [
  {
    title: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/gusdn6901/kr.ac.jbnu.se.scp.cat',
    id: 1,
  },
  {
    title: 'GoogleDrive',
    icon: <FaGoogleDrive />,
    link: '#',
    id: 2,
  },
  {
    title: 'Notion',
    icon: <SiNotion />,
    link: '#',
    id: 3,
  },
  {
    title: 'Trello',
    icon: <FaTrello />,
    link: '#',
    id: 4,
  },
  {
    title: 'Slack',
    icon: <FaSlack />,
    link: '#',
    id: 5,
  },
  {
    title: 'etc',
    icon: <FaDiaspora />,
    link: '#',
    id: 6,
  },
];

const handleDelete = () => {
  console.log('삭제');
};

const List = () => {
  return (
    <Card className='m-r-10'>
      <CardBody>
        <CardTitle tag='h5'>Registered Link</CardTitle>
        <CardSubtitle className='mb-2 text-muted' tag='h6'>
          클릭시 해당 링크로 이동합니다
        </CardSubtitle>
        <ListGroup flush>
          {ListData.map((list) => (
            <ListGroupItem
              key={list.id}
              action
              href={list.link}
              tag='a'
              className='d-flex align-items-center p-3 border-0'
            >
              <div>
                <i className='m-r-5'> {list.icon} </i>
                {list.title} :
                <a className={list.link === '#' ? 'hide' : 'm-l-5'}>
                  {list.link}
                </a>
                <button
                  className={list.link === '#' ? 'hide' : 'm-l-5'}
                  onClick={handleDelete}
                >
                  ❌
                </button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default List;