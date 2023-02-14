import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        items : [],
    },
    reducers:{
        addItem : (state,action)=>{
            // it should add Item but taking care of the quantity of for that id
            //{ action.payload has iteam obj , so before pushing it we should check   
            /*for the id of that item in items array if present inc quantity if not at with 1 quantity
             */
            let isPresent = false;
        
            state.items.map((obj)=>{
                if(obj.item.id===action.payload.id){
                    obj.quantity++;
                    isPresent = true;
                    console.log('incremented qunatity')
                }
            })
            if(isPresent==false){
                const obj = {
                    item : action.payload,
                    quantity : 1
                }
                state.items.push(obj);
            }
            // state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            // state.items.pop();
            //among all the objs , item with id , qunat dec
            let isQuantityOne = true;
            state.items.map((obj)=>{
                if(obj.item.id===action.payload.id){
                    if(obj.quantity!==1){
                        obj.quantity--;
                        isQuantityOne = false;
                    }
                }
            })
            if(isQuantityOne){
                state.items = state.items.filter((obj)=>{
                    return obj.item.id!==action.payload.id;
                })
            }
        },
        clearCart: (state)=>{
            state.items = [];
        },
    }
});
export const { addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;