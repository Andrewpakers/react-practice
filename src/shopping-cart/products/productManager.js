/**
 * product object
 * .name
 * .price
 * .description
 * .key
 */
import image1 from '../assets/img/1.webp';
import image2 from '../assets/img/2.webp';
import image3 from '../assets/img/3.webp';
import image4 from '../assets/img/4.png';
import image5 from '../assets/img/5.png';
import image6 from '../assets/img/6.webp';
import image7 from '../assets/img/7.jpeg';
import image8 from '../assets/img/8.jpeg';
import image9 from '../assets/img/9.jpeg';
import image10 from '../assets/img/10.jpeg';
import image11 from '../assets/img/11.jpeg';
import image12 from '../assets/img/12.jpeg';
import image13 from '../assets/img/13.jpeg';
import image14 from '../assets/img/14.jpeg';
import image15 from '../assets/img/15.jpeg';
import image16 from '../assets/img/16.jpeg';

export default function getProducts() {
    return [
        {
            name: "Red Panda",
            price: 50,
            description: 'The red panda, also known as the lesser panda, is a small mammal native to the eastern Himalayas and southwestern China.',
            img: image1,
            key: 1,
        },
        {
            name: "White Tiger",
            price: 500,
            description: 'The white tiger or bleached tiger is a leucistic pigmentation variant of the Mainland tiger. ',
            img: image2,
            key: 2,
        },
        {
            name: "Zebra",
            price: 5,
            description: 'Zebras are African equines with distinctive black-and-white striped coats.',
            img: image3,
            key: 3,
        },
        {
            name: "Flamingo",
            price: 30,
            description: 'Flamingos or flamingoes are a type of wading bird in the family Phoenicopteridae, which is the only extant family in the order Phoenicopteriformes.',
            img: image4,
            key: 4,
        },
        {
            name: "Vulture",
            price: 3,
            description: 'Why would you want to buy a vulture?',
            img: image5,
            key: 5,
        },
    ]
}