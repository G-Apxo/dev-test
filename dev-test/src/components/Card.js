import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flickr from "flickr-sdk/flickr-sdk.js";
import { CardStyled, Button, ContentBlock, Input, Form, Lable } from "./styles/Card.styled";

function Card() {
    const flickr = new Flickr("570ab7503f23685cae1491e7e7550e19");
    const [images, setImages] = useState([]);
    const [curImages, setCurImages] = useState([]);
    const [search, setSearch] = useState("sky");

    useEffect(() => {}, [curImages]);

    useEffect(() => {
        flickr.photos
            .search({
                text: "sky",
            })
            .then(function (res) {
                console.log(res.body);
                setImages([...res.body.photos.photo]);
                setCurImages(res.body.photos.photo.slice(0, 10));
            })
            .catch(function (err) {
                console.error("bonk", err);
            });
    }, []);

    function searchImages(e) {
        setCurImages([]);
        e.preventDefault();
        flickr.photos
            .search({
                text: search,
            })
            .then(function (res) {
                console.log(res.body);
                setImages([...res.body.photos.photo]);
                setCurImages(res.body.photos.photo.slice(0, 10));
            })
            .catch(function (err) {
                console.error("bonk", err);
            });
    }

    function handleScroll(e) {
        if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
            let length = curImages.length;
            setCurImages(images.slice(0, length + 10));
        }
    }
    return (
        <div>
            <Form onSubmit={searchImages}>
                <Lable htmlFor="search">Search</Lable>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    id="search"
                />
            </Form>
            <CardStyled onScroll={handleScroll}>
                {curImages.map((img, index) => {
                    return (
                        <ContentBlock key={index}>
                            <img
                                className="card-image"
                                src={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`}
                                alt=""
                            />
                            <h2 className="card-title">{img.title}</h2>
                            <p className="card-desc">{img.owner}</p>
                            <Button
                                as={Link}
                                to={`/imgdesc/${img.id}`}
                            >
                                Explore ➔
                            </Button>
                        </ContentBlock>
                    );
                })}
            </CardStyled>
        </div>
    );
}

export default Card;
