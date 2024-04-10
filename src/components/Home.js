import "./Home.css"
import LinkGroup from '../Link/LinkGroup';
import Navbar from "./Navbar";
import ProductGallery from './ProductGallery';

function Home(){
    return (
        <>
            <div className="home">
                <Navbar />
                <ProductGallery />
            </div>
            <LinkGroup />
        </>
    );
}

export default Home;