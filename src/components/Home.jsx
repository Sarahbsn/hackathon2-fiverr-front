import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, FlexCol } from '../styles/GenericsContainer';
import FiverrMeetCard from './FiverrMeetCard';
import { StyledButton } from '../styles/StyledButtons';
import '../styles/Home.css';

const Home = () => {
  const fiverrMeets = [
    {
      name: 'event#1',
      domaine: 'photography',
      region: 'auvergne',
      text: 'event with some nice people from Quebec',
      author: 'Juliette Loiseaux',
      image: '',
      date: '12/07/2021',
    },
    {
      name: 'event#2',
      domaine: 'coworking',
      region: 'paca',
      text: 'work with us in a nice place',
      author: 'Kevinho',
      image: '',
      date: '25/08/2021',
    },
    {
      name: 'event#3',
      domaine: 'projet',
      region: 'paris',
      text: 'partageons nos connaissances',
      author: 'O Gillou',
      image: '',
      date: '19/11/2021',
    },
  ];
  console.log(fiverrMeets);
  return (
    <div className="maincontainer-home">
      <div className="home-picture">
        <div className="fiverrmeet-description">
          <h1>Welcome to Fiverr Friends!</h1>
          <h2>Have you ever wanted to meet Fiverr freelancers from your professional field near you?</h2>
          <p className="description-p">
            Good news, now you can create "Fiverr meets" that allow you to find new collaborations for your projects, grow your network or simply
            enjoying a moment with new people.
          </p>
          <p className="description-p">Join us, join the community!</p>
          <div>
            <Link to="/Connection">
              <StyledButton style={{ backgroundColor: 'white', color: '#1dbf73', fontSize: '23px', height: '50px' }}>
                Start the experience now!
              </StyledButton>
            </Link>
          </div>
        </div>
      </div>
      <Flex>
        {/* <FiverrMeetCard {...fiverrMeets[0]}/> */}
        {fiverrMeets.map((fiverrMeet, index) => {
          index % 2 === 0 ? (
            <FlexCol center>
              Coucou
              <FiverrMeetCard {...fiverrMeet} />
            </FlexCol>
          ) : (
            <FlexCol end>
              Et re coucou
              <FiverrMeetCard {...fiverrMeets} />
            </FlexCol>
          );
        })}
      </Flex>
    </div>
  );
};

export default Home;
