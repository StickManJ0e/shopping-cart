import ProductCard from '../components/ProductCards'
import AustriaFlag from '../images/Austria_flag.svg.png'
import DenmarkFlag from '../images/Denmark_flag.png'
import EstoniaFlag from '../images/Estonia_flag.svg.png'
import FranceFlag from '../images/France_flag.svg.png'
import GermanyFlag from '../images/Germany_flag.png'
import GreeceFlag from '../images/Greece_flag.svg.png'
import NorwayFlag from '../images/Norway_flag.png'
import PolandFlag from '../images/Poland_flag.svg.png'
import SpainFlag from '../images/Spain_flag.png'
import UKFlag from '../images/UK_flag.svg.png'
import ItalyFlag from '../images/Italy_flag.svg'
import NetherlandsFlag from '../images/Netherlands_flag.svg'

let productArray = [
    ProductCard(AustriaFlag, 'Austrian Flag', 10.99),
    ProductCard(DenmarkFlag, 'Danish Flag', 10.99),
    ProductCard(EstoniaFlag, 'Estonian Flag', 10.99),
    ProductCard(FranceFlag, 'French Flag', 10.99),
    ProductCard(GermanyFlag, 'German Flag', 10.99),
    ProductCard(GreeceFlag, 'Greek Flag', 10.99),
    ProductCard(NorwayFlag, 'Norwegian Flag', 10.99),
    ProductCard(PolandFlag, 'Polish Flag', 10.99),
    ProductCard(SpainFlag, 'Spanish Flag', 10.99),
    ProductCard(UKFlag, 'British Flag', 10.99),
    ProductCard(ItalyFlag, 'Italian Flag', 10.99),
    ProductCard(NetherlandsFlag, 'Dutch Flag', 10.99),
];

let ItemData = [];

productArray.map((item) => ItemData.push(item));

export default ItemData;