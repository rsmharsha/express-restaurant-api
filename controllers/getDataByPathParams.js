import { restaurants } from "../data/restaurants.js";

const fieldMap = {
    city: restaurant => restaurant.city,
    cuisine_type: restaurant => restaurant.cuisine_type,
    state: restaurant => restaurant.restaurant_address?.state,
}

export const getDataByPathParams = (req, res) => {

    const { field, term } = req.params


    if (!fieldMap[field]) {
        return res.status(400).json({ message: "Search field not allowed. Use 'city', 'cuisine_type', or 'state'" })
    }


    const filteredData = restaurants.filter(restaurant => {
        const value = fieldMap[field](restaurant);

        if (!value) return false;

        return value.toLowerCase().includes(term.toLowerCase())
    });

    if (filteredData.length === 0) {
        return res.status(404).json({ message: `No restaurants found for ${field}: "${term}"` });
    }

    res.json(filteredData)

}