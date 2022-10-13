import pin from '../img/pin.png';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img src={props.entry.img} alt='Mount Fuji' className='card-img' />
      <div className='card-content'>
        <div className='card-location-info'>
          <img src={pin} alt='Location pin' className='card-pin' />
          <p className='card-location'>{props.entry.img}</p>
          <a href={props.entry.link} className='card-link'>
            View on Google Maps
          </a>
        </div>
        <h1>{props.entry.title}</h1>
        <p className='card-dates'>
          <strong>
            {props.entry.dates.startDate} - {props.entry.dates.endDate}
          </strong>
        </p>
        <p>{props.entry.description}</p>
      </div>
    </div>
  );
}
