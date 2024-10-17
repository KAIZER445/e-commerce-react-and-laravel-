import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import dummyimage from '../images/product_images/dummy_product_image.png';

export default function JustForYou() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchArticles(page) {
            const apiurl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ebf39df021d342abb49917e9ae5a1f52&pageSize=12&page=${page}`;
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(apiurl);
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const parsedData = await response.json();

                if (parsedData.articles && parsedData.articles.length > 0) {
                    setArticles(prevArticles => {
                        const newArticles = parsedData.articles.filter(article => 
                            !prevArticles.some(prevArticle => prevArticle.url === article.url)
                        );
                        return [...prevArticles, ...newArticles];
                    });
                } else {
                    console.warn('No more articles available.');
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchArticles(currentPage);
    }, [currentPage]);

    const loadMoreArticles = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    function truncateText(text, maxLength) {
        return text && text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    return (
        <Container>
            <h6 className='mb-0 mt-5'>Just for you</h6>
            <hr />
            <Row>
                {articles.map((article, index) => (
                    <div className='col-6 col-md-4 col-lg-3 pb-4' key={index}>
                        <a href={article.url} className='text-decoration-none' target="_blank" rel="noopener noreferrer">
                            <Card className='product z-1'>
                                <Card.Img
                                    variant="top"
                                    src={article.urlToImage || dummyimage}
                                    className='w-100 productimageheight bg-light'
                                />
                                <Card.Body>
                                    <Card.Title>{truncateText(article.author, 26)}</Card.Title>
                                    <Card.Text>
                                        <p className='text-danger mb-2 fw-semibold'>Rs. {article.publishedAt?.slice(0, 10)}</p>
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
                ))}
            </Row>
            <hr />
            <br />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {error && <p className='text-danger'>{error}</p>}
                    {articles.length > 0 && (
                        <div className='d-flex justify-content-center'>
                            <button
                                className='btn btn-transparent border border-3 border-danger text-danger rounded-0 fw-semibold'
                                onClick={loadMoreArticles}
                                disabled={loading}
                            >
                                LOAD MORE
                            </button>
                        </div>
                    )}
                </>
            )}
        </Container>
    );
}
