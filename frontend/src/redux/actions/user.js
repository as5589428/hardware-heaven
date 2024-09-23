import axios from "axios";
import { server } from "../../server";

// load user
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });
//     const { data } = await axios.get(`${server}/user/getuser`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "LoadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadUserFail",
//       payload: error.response.data.message,
//     });
//   }
// };
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    let errorMessage;

    if (error.response) {
      // Server responded with a status other than 2xx
      errorMessage = error.response.data.message || 'Server error occurred.';
    } else if (error.request) {
      // Request was made but no response was received
      errorMessage = 'No response received from server. Please check your network connection.';
    } else {
      // Something happened in setting up the request
      errorMessage = error.message || 'An unknown error occurred.';
    }

    // Log the error for debugging
    console.error('Error loading user:', error);

    dispatch({
      type: "LoadUserFail",
      payload: errorMessage,
    });
  }
};
// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadSellerRequest" });

    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });

    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    let errorMessage;

    if (error.response) {
      // Server responded with a status other than 2xx
      errorMessage = error.response.data.message || 'Something went wrong!';
    } else if (error.request) {
      // Request was made but no response was received
      errorMessage = 'No response received from server. Please check your network.';
    } else {
      // Something happened in setting up the request
      errorMessage = error.message || 'An error occurred while making the request.';
    }

    dispatch({
      type: "LoadSellerFail",
      payload: errorMessage,
    });
  }
};

// user update information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };

// update user address
export const updatUserAddress =
  (country, city, address1, address2, zipCode, addressType) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateUserAddressRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUserAddressSuccess",
        payload: {
          successMessage: "User address updated succesfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUserAddressFailed",
        payload: error.response.data.message,
      });
    }
  };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
      payload: error.response.data.message,
    });
  }
};
