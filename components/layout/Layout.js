import Footer from "./Footer";
import Header from "./Header"

const Layout = (props) => {
    return <div>
        <Header/>
        <main className="">{props.children}</main>
        <Footer/>
    </div>
}

export default Layout;