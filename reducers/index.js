export const initialState = {
    "weather": { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" },
    "main": { "temp": 5.58, "feels_like": 0.28, "temp_min": 2.97, "temp_max": 7.96, "pressure": 1018, "humidity": 33 },
    "wind": { "speed": 10.29, "deg": 310, "gust": 13.38 },
};

const type = {
    WEATHER: 'WEATHER',
    WIND: "WIND",
    MAIN: "MAIN"
}

export const WheatherReducer = (state, action) => {
    switch (action.type) {
        case type.WEATHER:
            return { ...state, weather: action.payload }
        case type.MAIN:
            return { ...state, main: action.payload }
        case type.WIND:
            return { ...state, wind: action.payload }
        default:
            return state;
    }
};