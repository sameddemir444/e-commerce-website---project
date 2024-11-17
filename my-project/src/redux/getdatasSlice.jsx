import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  getData: [],
  detail: {},
  categoriesName: [],
  selectedCategoriesItemss: [],
  basketDrawer: false,
  accDropdown: false,
};

export const getCategoriesName = createAsyncThunk(
  "getcategoryName",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  }
);

export const selectedCategoriesItems = createAsyncThunk(
  "getcategoryItems",
  async (categoryName) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    const data = await response.json();
    return data;
  }
);

export const allDatas = createAsyncThunk("getData", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const detailItem = createAsyncThunk("getoneData", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

export const getdatasSlice = createSlice({
  name: "getdatas",
  initialState,
  reducers: {
    filterItems: (state, action) => {
      const filteredItems = [];
      state.getData.map((item) => {
        if (
          item.title
            .toLowerCase()
            .trim()
            .includes(action.payload.toLowerCase().trim())
        ) {
          filteredItems.push(item);
        }
      });
      state.getData = [...filteredItems];
    },
    clearSelectedCategoryItems: (state) => {
      state.selectedCategoriesItemss = [];
    },
    basketDraverSetting: (state, action) => {
      state.basketDrawer = action.payload;
    },
    accDropdownSetting: (state, action) => {
      state.accDropdown = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(allDatas.fulfilled, (state, action) => {
        state.getData = action.payload;
        state.loading = false;
      })
      .addCase(detailItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailItem.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      })
      .addCase(getCategoriesName.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesName.fulfilled, (state, action) => {
        state.categoriesName = action.payload;
        state.loading = false;
      })
      .addCase(selectedCategoriesItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectedCategoriesItems.fulfilled, (state, action) => {
        state.selectedCategoriesItemss = action.payload;
        state.loading = false;
      });
  },
});
export const {
  filterItems,
  clearSelectedCategoryItems,
  basketDraverSetting,
  accDropdownSetting,
} = getdatasSlice.actions;

export default getdatasSlice.reducer;
