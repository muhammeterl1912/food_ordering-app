import Image from "next/image";

const Card = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]"> 
      <div className="flex justify-between items-center">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1">
          <table className="table-auto w-full"> 
            <thead>
              <tr>
                <th className="px-4 py-2">PRODUCT</th> 
                <th className="px-4 py-2">EXTRAS</th>
                <th className="px-4 py-2">PRICE</th>
                <th className="px-4 py-2">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 flex items-center"> 
                  <Image
                    src="/images/burger-sunum-yemekcom.jpg"
                    alt="Burger Image"
                    width={50}
                    height={50}
                    className="mr-4" 
                  />
                  <span>Good Pizza</span>
                </td>
                <td className="px-4 py-2">
                  <span>mayonez, spicy, sauce, ketchup</span> 
                </td>
                <td className="px-4 py-2">$20</td>
                <td className="px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12">
          <div className="text-[40px]">CART TOTAL</div> 
          <div className="mt-6">
            <b>Subtotal: </b>$20 <br /> 
            <b className="inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$20 
          </div>
          <button className="btn-primary mt-4">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Card; // Card bileşenini dışa aktarır
