import joi from "joi";

export const ValidateRestaurantId = (restaurantId) =>{
    const Schema = joi.object({
        city: joi.string().required(),
    });

    return Schema.validateAsync(resId);
};

export const ValidateRestaurantCity = (restaurantObj) =>{
    const Schema = joi.object({
        city: joi.string().required(),
    });

    return Schema.validateAsync(resId);
};

export const ValidateRestaurantSearchString = (restaurantObj) =>{
    const Schema = joi.object({
        searchString: joi.string().required(),
    });

    return Schema.validateAsync(resId);
};