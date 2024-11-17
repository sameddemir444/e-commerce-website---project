import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailItem } from "../redux/getdatasSlice";
import { addToBasket } from "../redux/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.getdatas);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(detailItem(id));
    }
  }, [id, dispatch]);

  const capitalizeFirstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const setBasket = () => {
    dispatch(
      addToBasket({
        id: detail.id,
        title: detail.title,
        price: detail.price,
        image: detail.image,
        amount: amount,
      })
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="py-8 md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 ">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-9/12 border rounded-lg border-lastgrey2 shadow-transparent opacity-90"
                src={detail.image || "https://via.placeholder.com/150"}
                alt={detail.title || "Product Image"}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold sm:text-2xl ">
                {detail.title || "Product Title"}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold sm:text-3xl">
                  ${detail.price || "0.00"}
                </p>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  onClick={setBasket}
                  className="flex items-center justify-center py-2.5 px-5 font-semibold rounded-lg border-2 border-lastmaincolor text-lastmaincolor shadow-transparent hover:text-lastmaincolorHover3 hover:border-lastmaincolorHover3"
                >
                  Add to basket
                </button>

                {/* Counter */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.8rem",
                    backgroundColor: "#F3F3F3",
                    borderRadius: "8px",
                  }}
                >
                  <ion-icon
                    name="remove-outline"
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      padding: "0.4rem",
                      backgroundColor: "#F3F3F3",
                      color: "#333",
                      borderRadius: "50%",
                    }}
                    onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}
                  ></ion-icon>
                  <input
                    type="text"
                    readOnly
                    value={amount}
                    style={{
                      width: "3rem",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      backgroundColor: "#F3F3F3",
                      border: "none",
                      color: "#333",
                    }}
                  />
                  <ion-icon
                    name="add-outline"
                    onClick={() => setAmount(amount + 1)}
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      padding: "0.4rem",
                      backgroundColor: "#F3F3F3",
                      color: "#333",
                      borderRadius: "50%",
                    }}
                  ></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
