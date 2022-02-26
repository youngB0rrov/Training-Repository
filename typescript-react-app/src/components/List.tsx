// переиспользуемый  компонент
// данный компонент может отрисовывать список любых компонентов, из-за чего получается универсальным
import React, { FunctionComponent } from "react";

// указываем тип интерфейса
// <T> - абсолютно любой тип

interface ListProps<T> {
    // массив элементов любого типа
    items: T[];
    // функция для отрисовки определенного компонента, которая возвращает react-node
    renderItem: (item: T) => React.ReactNode;
}

// для работы с дженериком эспоритирум как обычную, не стрелочную функцию
export default function List<T> (props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}
