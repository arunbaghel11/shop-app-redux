import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        /**
         * This function is used to remove an item from the cart.
         * It takes in the state and an action and returns a new state
         * which excludes the item with the specified id.
         * @param {array} state - The current state of the cart.
         * @param {object} action - The action to be performed.
         * @property {number} action.payload - The id of the item to be removed.
         * @returns {array} - The new state after removing the item.
         */
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;