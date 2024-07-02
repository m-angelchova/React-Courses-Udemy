import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const NOTIFICATIONS = [
  {
    status: "pending",
    title: "Sending...",
    message: "Sending cart data!",
  },
  {
    status: "success",
    title: "Success!",
    message: "Sent cart data successfully!",
  },
  {
    status: "error",
    title: "Error!",
    message: "Sending cart data failed!",
  },
  {
    status: "error",
    title: "Error!",
    message: "Fetching cart data failed!",
  },
];

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification(NOTIFICATIONS[0]));

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-project-ma-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showNotification(NOTIFICATIONS[1]));
    } catch (error) {
      dispatch(uiActions.showNotification(NOTIFICATIONS[2]));
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-demo-project-ma-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart items.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(uiActions.showNotification(NOTIFICATIONS[3]));
    }
  };
};
