const addFeature = 'ADD_FEATURE';

export const addFeatures = (additionalFeature) => {
    return {
        type: addFeature, 
        payload: {
            id: additionalFeature.id,
            name: additionalFeature.name,
            price: additionalFeature.price
        }
    }
}