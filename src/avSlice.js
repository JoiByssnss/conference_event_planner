import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    	{
		img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
		name: "Projectors",
		cost: 200,
		quantity: 0,
	},
    {
		img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
		name: "Speaker",
		cost: 35,
		quantity: 0,
    },
    {
		img: "https://cdn.pixabay.com/photo/2015/02/06/22/08/microphone-626618_1280.jpg",
		name: "Microphones",
		cost: 45,
		quantity: 0,
    },
    {
		img: "https://cdn.pixabay.com/photo/2021/06/03/17/34/whiteboard-6307590_1280.jpg",
		name: "Whiteboards",
		cost: 80,
		quantity: 0,
    },

    {
		img: "https://cdn.pixabay.com/photo/2016/03/05/22/34/abstract-1239321_1280.jpg",
		name: "Signage",
		cost: 80,
		quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
	    if (item) {
		      item.quantity++;
	   }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
	     if (item && item.quantity > 0) {
		     item.quantity--;
	  }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
