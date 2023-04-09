export default function Card ({ image }) {
    return (
        <div className='cardContainer'>
            <img className='cardImage' src={image} alt='Card'></img>
        </div>
    );
}