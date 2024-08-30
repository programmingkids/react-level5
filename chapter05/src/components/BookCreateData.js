export const createData = ({title, author, price}) => ({
    title, author, price,
});

export const createEmptyData = () => createData({
    title: '',
    author: '',
    price: '',
});
