
function CartScreen({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) {

  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>image</th>
                <th>name</th>
                <th>Quantity</th>
                <th>price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      className="fluid rounded"
                      width={60}
                      height={60}
                      src={item.image}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa-solid fa-plus"
                      onClick={() => increaseQuantity(item)}
                    ></i>
                    <span className="mx-2">{item.quantity}</span>
                    <i
                      style={{ cursor: "pointer" }}
                      onClick={() => decreaseQuantity(item)}
                      className="fa-solid fa-minus"
                    ></i>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <i
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteItem(item)}
                      class="fa-sharp fa-solid fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <th colSpan={3} className="text-center">
                  Total
                </th>
                <td colSpan={3} className="text-center">
                  <span className="badge bg-danger rounded-pill">
                    $
                    {cartItems.reduce(
                      (accumelator, item) =>
                        (accumelator += item.price * item.quantity),
                      0
                    )}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
