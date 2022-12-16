import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlockFolder/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlockFolder/Skeleton";

export default function Home() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetch("https://6396f0a886d04c7633854313.mockapi.io/items")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
    }, []); //пустой массив значит вызвать при перерисовкие старинцы

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(12)].map((_, index) => (
                          <PizzaSkeleton key={index} />
                      ))
                    : items.map((pizza) => (
                          <PizzaBlock
                              {...pizza}
                              key={pizza.id + pizza.imageUrl}
                          />
                      ))}
            </div>
        </>
    );
}
