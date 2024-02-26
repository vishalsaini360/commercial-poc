import Header from './Header'
import Footer from './Footer'

export default function Index({children }) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    )
}