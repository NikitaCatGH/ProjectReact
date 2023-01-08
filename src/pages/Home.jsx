import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlockFolder/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockFolder/Skeleton";
import Pagination from "../components/Pagination/Pagination";

export default function Home({ searchValue }) {
    console.log("home", searchValue);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: "популярности",
        sort: "rating",
    });
    const [valueOfDesc, setValueOfDesc] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);

    /// рассчет страниц
    const pageLimit = 4;
    const pageCountN = 3; // Но если бы мы получали количество страниц или всех айтамов, то могли бы посчитать
    // /// рассчет страниц
    // const pageCountN = Math.ceil(items.length / pageLimit);

    // console.log("items", items);
    // console.log("кол-во страниц", pageCountN);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6396f0a886d04c7633854313.mockapi.io/items?page=${currentPage}&limit=${pageLimit}&${
                categoryId > 0 ? `category=${categoryId}` : ""
            }&sortBy=${sortType.sort}&order=${
                valueOfDesc === true ? "desc" : "asc"
            }`
        )
            .then((response) => {
                console.log("response", response);
                return response.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, valueOfDesc, currentPage]); //пустой массив значит вызвать при перерисовкие старинцы

    const pizzas = items
        .filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                console.log(searchValue);
                return true;
            }

            return false;
        })
        .map((obj) => <PizzaBlock {...obj} key={obj.id + obj.imageUrl} />);

    const skeletons = [...new Array(12)].map((_, index) => (
        <PizzaSkeleton key={index} />
    ));

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories
                        value={categoryId}
                        onClickCategory={(i) => setCategoryId(i)}
                    />
                    <Sort
                        type={sortType}
                        onClickSort={(id) => setSortType(id)}
                        onClickArrow={() => setValueOfDesc(!valueOfDesc)}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeletons : pizzas}
                </div>
                <Pagination
                    pageLimit={pageLimit}
                    pageCountN={pageCountN}
                    setCurrentPage={(number) => setCurrentPage(number)}
                />
            </div>
        </>
    );
}
