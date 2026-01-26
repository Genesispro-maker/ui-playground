export interface TextDataType{
    id: number,
    text: string,
    icon: string,
    color: string,
}

export const TextData : Array<TextDataType>= [
    {
        id: 0,
        text: "lab",
        icon: "/icons/3dicons-lab-front-color.avif",
        color: "blue",
    },

    {
        id: 1,
        text: "Nuclear-TestSite",
        icon: "/icons/3dicons-fire-front-color.avif",
        color: "orange",
    },

    {
        id: 2,
        text: "turf",
        icon: "/icons/3dicons-gravestone-front-color.avif",
        color: "lightgreen",
    }, 

    {
        id: 3,
        text: "Den",
        icon: "/icons/3dicons-cauldron-front-color.avif",
        color: "pink",
    }
]