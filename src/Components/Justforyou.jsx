import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import Productimages from '../images/product_images/fbea6f87d2d4afbfa8fe2ba4dda27a36.jpg_720x720q80.jpg_.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Justforyou() {
    const articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Mikkael A. Sekeres, MD",
            "title": "Guest column | Cancers caused by infections are more common than you might think - The Washington Post",
            "description": "Some estimates attribute as many as 20 percent of cancer cases to infectious agents, such as Epstein-Barr virus and hepatitis B.",
            "url": "https://www.washingtonpost.com/wellness/2024/10/14/cancers-caused-by-infections/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LVEESTOPX5CD7GEI76KCBAPCYM.jpg&w=1440",
            "publishedAt": "2024-10-14T12:35:55Z",
            "content": "How worried should I be about infections that cause cancer?\r\nCancers caused by infections are quite common. A recent report from the American Association for Cancer Research attributed 13 percent of … [+5764 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sean Conlon",
            "title": "Stocks making the biggest moves premarket: Flutter Entertainment, Boeing, SiriusXM, Caterpillar and more - CNBC",
            "description": "These are the stocks posting the largest moves in premarket trading.",
            "url": "https://www.cnbc.com/2024/10/14/stocks-making-the-biggest-moves-premarket-flut-ba-siri-cat.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108009774-1721659897787-gettyimages-2162402177-AFP_364R2BL.jpeg?v=1728906624&w=1920&h=1080",
            "publishedAt": "2024-10-14T12:13:29Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ben Morse",
            "title": "Cowboys suffer historic home loss, Baltimore QB makes history, Texans spoil No. 3 pick’s 1st start: NFL Week 6 Sunday review - CNN",
            "description": "Week 6 of the 2024 NFL season brought a historic loss for the Dallas Cowboys, a huge performance from Lamar Jackson and the Houston Texans moving to 5-1 on the year.",
            "url": "https://www.cnn.com/2024/10/14/sport/nfl-week-6-sunday-review-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24287764963803.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-14T11:55:00Z",
            "content": "Week 6 of the 2024 NFL season wasnt rife with close endings to games, but there was still plenty of drama to keep fans gripped.\r\nSundays action began with the Chicago Bears continuing their recent re… [+8186 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Chris Lau, Antoinette Radford",
            "title": "Live updates: Hezbollah drone attack kills 4 Israeli soldiers - CNN",
            "description": "More than 60 people were injured in a Hezbollah drone attack in central-northern Israel. Follow for live news updates.",
            "url": "https://www.cnn.com/world/live-news/israel-lebanon-iran-gaza-attack-10-14-24-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2177542039-copy.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-10-14T11:37:00Z",
            "content": "Israeli strikes in Gaza killed at least 41 people, including at least 13 children, on Sunday, according to hospitals.\r\nAt least 22 people were killed in Israeli strikes on Al Mufti school in Gazas Nu… [+1716 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Karen Friar",
            "title": "Stock market today: Dow soars 400 points, to new high S&P 500 notches record close - Yahoo Finance",
            "description": "The next batch of big bank earnings will test the rally and the chances of an economic \"soft landing\".",
            "url": "https://finance.yahoo.com/news/live/stock-market-today-sp-500-futures-hold-near-record-dow-slips-with-big-bank-earnings-in-focus-111226860.html",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-10-14T11:33:13Z",
            "content": "US stock futures traded mixed on Monday but held near record highs as investors prepared for the next batch of big bank earnings to test that rally and the chances of an economic \"soft landing.\"\r\nS&a… [+1726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Nicole Kidman and Salma Hayek Exchange Words on Video at Balenciaga Show - TMZ",
            "description": "Nicole Kidman and Salma Hayek exchanged words and put hands on each other at the Balenciaga show in France last month, according to a new video.",
            "url": "https://www.tmz.com/2024/10/14/nicole-kidman-salma-hayek-balenciaga-paris-kate-perry/",
            "urlToImage": "https://imagez.tmz.com/image/9a/16by9/2024/10/14/9a2fa7cd6e3b445e89ccc53b93113625_xl.jpg",
            "publishedAt": "2024-10-14T11:30:52Z",
            "content": "Nicole Kidman and Salma Hayek exchanged words and put hands on each other at the Balenciaga show in France last month, according to a new video.\r\nThe actresses were attending the September 30 event a… [+1098 chars]"
        }
    ]

    const state = {
        articles: articles
    }

    return (
        <>
            <Container>
                <h6 className='mb-0 mt-5'>Just for you</h6>
                <hr />
                <Row>
                    {state.articles.map(Element => {
                        return <div className='col-6 col-lg-3 col-mb-3 pb-4' key={Element.url}>
                            <a href={Element.url} className='text-decoration-none'>
                                <Card className='product z-1'>
                                    <Card.Img variant="top" src={Element.urlToImage} className='w-100 productimageheight' />
                                    <Card.Body>
                                        <Card.Title>{Element.author}</Card.Title>
                                        <Card.Text>
                                            <p className='text-danger mb-2 fw-semibold'>Rs. {Element.publishedAt}</p>
                                            <div className='d-flex gap-1 text-warning'>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    })}
                </Row>
                <hr />
                <br />
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-transparent border border-3 border-danger text-danger rounded-0 fw-semibold'>LOAD MORE</button>
                </div>
            </Container>
        </>
    )
}
