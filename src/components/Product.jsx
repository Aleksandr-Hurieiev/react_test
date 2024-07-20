const Product = ({ prods }) => {
  const width = 340;
  const box = prods.map((prod) => (
    <div key={prod.id}>
      <h3>{prod.name}</h3>
      <p>{prod.price}</p>
      <img src={prod.imgUrl} alt={prod.name} width={width} />
    </div>
  ));

  return <div>{box}</div>;
};
export default Product;


