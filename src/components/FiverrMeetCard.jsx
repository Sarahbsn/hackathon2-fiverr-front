import styled from 'styled-components';


export const FiverrMeetCardHeader = ({ name, image }) => {
    <div>
        <h4>{name}</h4>
        <img src={image} alt='' />
    </div>
}

export const FiverrMeetCardBody = ({ domaine, region, text, date }) => {
    <div>
        <p>{text}</p>
        <div>{domaine}</div>
        <div>{region}</div>
        <div>{date}</div>
    </div>
}

export const FiverrMeetCardFooter = ({ author }) => {
    <div>
        <div>{author}</div>
    </div>
}


export default function FiverrMeetCard({ name, domaine, region, text, author, image, date }) {
    return(
        <div>
            <FiverrMeetCardHeader name={name} image={image}/>
            <FiverrMeetCardBody domaine={domaine} region={region} text={text}/>
            <FiverrMeetCardFooter author={author}/>
        </div>
    );
}