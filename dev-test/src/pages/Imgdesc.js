import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import Flickr from "flickr-sdk/flickr-sdk.js";


function Imgdesc() {
    const location = useLocation();
    const [imgInfo, setImgInfo] = useState();

    const flickr = new Flickr("570ab7503f23685cae1491e7e7550e19");

    const photo_id = location.pathname.split("/");

    useEffect(() => {
        flickr.photos.getInfo({ photo_id: photo_id[2] }).then((res) => {
            // console.log(res.body.photo);
            setImgInfo(res.body.photo);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(imgInfo);

    const imgDate = new Date(imgInfo?.dates?.taken);
    const imgDateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

    return (
        <>
        <GlobalStyles />
         <Header />
         <Container>
            
            <img className="card-image-desc"
                src={`https://live.staticflickr.com/${imgInfo?.server}/${imgInfo?.id}_${imgInfo?.secret}_b.jpg`}
                alt=""
                />
                <h3 className="card-title">title - {imgInfo?.title._content}</h3>
                <p className="card-desc">owner - {imgInfo?.owner?.username}</p>
                <p className="card-desc">description - {imgInfo?.description?._content || "Empty"}</p>
                <p className="card-desc">date - {imgDate.toLocaleDateString("en-US", imgDateOptions)}</p>
                <a className="btn" href={imgInfo?.urls?.url[0]._content}>www.flickr.com/photos</a>
                <br />
                <br />
                <br />
                <Link className="btn" to="/">return back</Link>
            </Container>
            <Footer />
        </>
    );
}

export default Imgdesc;
