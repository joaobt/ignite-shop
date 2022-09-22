import {styled} from '..';


export const ProductContainer = styled('main', {

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: '1180',
    margin: '0 auto',
})


export const ImageContainer = styled('main', {

    width: '100%',
    maxWidth: 576,
    height: 656,
    backgroundColor: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%',
    borderRadius: 8,
    padding: '0.25rem',

    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }


})

export const ProductDetails= styled('main', {

    display: 'flex',
    flexDirection: 'colmn',

    h1: {
        fontSize: '$2xl',
        color:'$gray380',

    },
    span: {
     margintop: '1rem',
     display: 'block',
     fontSize: '$2xl',
     color: '$green300',
    },

    p: {
        marginTop: '2rem',
        fontSize: '$md',
        lineHeight: '1.6',
        color: '$gray380',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:hover': {
            backgroundColor: '$green300',
        }

    },
})