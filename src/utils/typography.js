import Typography from 'typography'

const typography = new Typography({
    googleFonts: [
        {
            name: "Vollkorn",
            styles: [
                '400',
                '400i',
                '700',
                '900'
            ]
        },
        {
            name: "Lato",
            styles: [
                '400',
                '400i',
                '700'
            ]
        }
    ]
})

export const { scale, rhythm, options } = typography
export default typography