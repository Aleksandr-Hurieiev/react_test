import Product from "./Product";
import { Alert } from "./Alert";
import Card from "./Card";
export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
      <Product prods={productsArr} />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </div>
  );
}

const productsArr = [
  {
    id: 1,
    name: "Tacos",
    price: 111111,
    imgUrl:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  },
  {
    id: 2,
    name: "Сherry",
    price: 222222,
    imgUrl:
      "https://images.pexels.com/photos/461197/pexels-photo-461197.jpeg?dpr=2&h=480&w=640",
  },
  {
    id: 3,
    name: "Mushrooms",
    price: 333333,
    imgUrl:
      "https://images.pexels.com/photos/461196/pexels-photo-461196.jpeg?dpr=2&h=480&w=640",
  },
];
//------------------------
