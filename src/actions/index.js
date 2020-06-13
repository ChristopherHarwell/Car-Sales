import AdditionalFeatures from "../components/AdditionalFeatures";

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (additionalFeature) => {
    return {
        type: ADD_FEATURE, 
        payload: {
            id: additionalFeature.id,
            name: additionalFeature.name,
            price: additionalFeature.price
        }
    };
};

export const removeFeature = (feature) => {
    return {
        type: REMOVE_FEATURE,
        payload: {
            id: feature.id,
            name: feature.name,
            price: feature.price,
        }
    }
}