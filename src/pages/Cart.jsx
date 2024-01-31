import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex flex-row items-start justify-around mt-10 mb-10">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col items-start w-[400px] h-[400px] justify-around p-4 pl-6 pr-6 gap-8 mt-10 ml-5 rounded-xl">

        <div>
          <div className="flex text-orange-400 font-bold text-xl text-left truncate mb-1">Your Cart</div>
          <div className="flex text-orange-400 font-bold text-4xl text-left truncate mt-1 mb-6">Summary</div>
          <p className="flex text-gray-800 font-semibold text-lg text-left truncate mt-1 mb-1">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-black-800  font-semibold text-base text-left truncate mt-1 mb-1">Total Amount: ${totalAmount}</p>
          <button className="text-white border-2 border-orange-400 mt-4 bg-orange-400 rounded-md font-semibold 
          text-[12px] p-3 px-5 uppercase 
          hover:bg-white
          hover:text-orange-400 transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col items-center  mt-40">
      <h1 className="flex text-orange-400 font-bold text-xl text-left truncate mb-1">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-white border-2 border-orange-400 mt-4 bg-orange-400 rounded-md font-semibold 
          text-[12px] p-3 px-6 uppercase 
          hover:bg-white
          hover:text-orange-400 transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
