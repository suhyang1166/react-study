import { faL } from "@fortawesome/free-solid-svg-icons";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  product: [],
  selectedItem: null,
  isLoading: false,
  err: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkAPI) => {
    try {
      let url = `https://my-json-server.typicode.com/suhyang1166/react-study/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/fetchDetail",
  async (id, thunkAPI) => {
    try {
      let url = `https://my-json-server.typicode.com/suhyang1166/react-study/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getSingleProduct(state, action) {
    //   state.selectedItem = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder
      // 상품 목록 가져오기 액션의 처리 로직
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
