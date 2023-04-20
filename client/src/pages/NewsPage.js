import React, { useState, useEffect } from "react";
import { Row, Col, Input, Card, Pagination } from "antd";
import axios from "axios";

const { Meta } = Card;

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=medical&apiKey=<your-api-key>&pageSize=50`
      );
      setNewsData(response.data.articles);
    };
    fetchNews();
  }, []);

  const filteredNewsData = newsData.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastNews = currentPage * pageSize;
  const indexOfFirstNews = indexOfLastNews - pageSize;
  const currentNewsData = filteredNewsData.slice(
    indexOfFirstNews,
    indexOfLastNews
  );

  return (
    <div className="news-page">
      <h1>Medical News</h1>
      <Input.Search
        placeholder="Search news"
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "50%", margin: "2rem 0" }}
      />
      <Row gutter={[16, 16]}>
        {currentNewsData.map((news) => (
          <Col key={news.url} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt="news" src={news.urlToImage} />}
              onClick={() => window.open(news.url, "_blank")}
            >
              <Meta title={news.title} description={news.description} />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredNewsData.length}
        onChange={handlePageChange}
        style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default NewsPage;
