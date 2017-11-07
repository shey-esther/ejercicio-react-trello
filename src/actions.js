import store from "./store";

export const selectMenu = (index) => {
    console.log(index);
    const selectMenu = index;
    store.setState({
        selectedItem:selectMenu
    })
};