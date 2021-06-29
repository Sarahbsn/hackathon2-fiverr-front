import React from 'react';
import { Flex, FlexCol } from '../styles/GenericsContainer';
import FiverrMeetCard from './FiverrMeetCard';
import '../styles/Home.css'


const Home = () => {

  const fiverrMeets = [
    {
      name: 'event#1',
      domaine: 'photography',
      region: 'auvergne',
      text: 'event with some nice people from Quebec',
      author: 'Juliette Loiseaux',
      image: '',
      date: '12/07/2021'
    },
    {
      name: 'event#2',
      domaine: 'coworking',
      region: 'paca',
      text: 'work with us in a nice place',
      author: 'Kevinho',
      image: '',
      date: '25/08/2021'
    },
    {
      name: 'event#3',
      domaine: 'projet',
      region: 'paris',
      text: 'partageons nos connaissances',
      author: 'O Gillou',
      image: '',
      date: '19/11/2021'
    },
  ];

  return (
    <div>
        <div className='home-picture'>
coucou
        </div>

      <Flex>
        {
          fiverrMeets.map((fiverrMeet, index) => {
            (index % 2 === 0) ? (
            <FlexCol center>
              <FiverrMeetCard {...fiverrMeet}/>
            </FlexCol>
          ) : (
            <FlexCol end>
            <FiverrMeetCard {...fiverrMeet}/>
          </FlexCol>
          )
          })
        }
      </Flex>
    
    </div>
  );
};

export default Home;