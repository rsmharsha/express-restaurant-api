import { restaurants } from "../data/restaurants.js";

export const getAllData = (req, res) => {

    let filteredData = restaurants

    const { id, name, cuisine_type, city, veg_only, is_open, offers_delivery } = req.query
    console.log(req.query);

    if (id) {
        filteredData = filteredData.filter(restaurant =>
            restaurant.id === parseInt(id)
        )
    }

    if (name) {
        const search = name.trim().toLowerCase();
        filteredData = filteredData.filter(restaurant =>
            restaurant.name.toLowerCase().includes(search)
        )
    }

    if (cuisine_type) {
        const search = cuisine_type.trim().toLowerCase();
        filteredData = filteredData.filter(restaurant =>
            restaurant.cuisine_type.toLowerCase().includes(search)
        )
    }

    if (city) {
        const search = city.trim().toLowerCase();
        filteredData = filteredData.filter(restaurant =>
            restaurant.city.toLowerCase().includes(search)
        )
    }

    if (veg_only !== undefined) {
        filteredData = filteredData.filter(restaurant =>
            restaurant.veg_only === JSON.parse(veg_only.toLowerCase())
        )
    }

    if (is_open !== undefined) {
        filteredData = filteredData.filter(restaurant =>
            restaurant.is_open === JSON.parse(is_open.toLowerCase())
        )
    }

    if (offers_delivery !== undefined) {
        filteredData = filteredData.filter(restaurant =>
            restaurant.offers_delivery === JSON.parse(offers_delivery.toLowerCase())
        )
    }


    res.json(filteredData)
}