import React, { useState } from "react";

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Закрытые"];

    const onClickCategory = (numOfIndex) => {
        setActiveIndex(numOfIndex);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((categ, index) => {
                    return (
                        <li
                            key={categ}
                            onClick={() => {
                                onClickCategory(index);
                            }}
                            className={index === activeIndex ? "active" : "   "}
                        >
                            {categ}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
