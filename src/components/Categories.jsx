import React, { useState } from "react";

export default function Categories({ value, onClickCategory }) {
    console.log(value);

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Закрытые"];

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
                            className={index === value ? "active" : "   "}
                        >
                            {categ}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
