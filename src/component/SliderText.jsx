import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import '../SliderText.css'
import arrowIcon from '../assets/icons/arrowIcon.png'

function SliderText({ news, getCategoryColor }) {
  const [visibleNews, setVisibleNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [animationDuration, setAnimationDuration] = useState('20s')

  const sliderContentRef = useRef(null)
  const sliderContainerRef = useRef(null)

  useEffect(() => {
    let interval

    const updateVisibleNews = () => {
      if (news.length > 0) {
        const shuffledNews = [...news].sort(() => 0.5 - Math.random())
        setVisibleNews(shuffledNews)
        setIsLoading(false)
      }
    }

    updateVisibleNews()

    interval = setInterval(() => {
      updateVisibleNews()
    }, 120000)

    return () => clearInterval(interval)
  }, [news])

  useEffect(() => {
    if (sliderContentRef.current && sliderContainerRef.current) {
      const contentWidth = sliderContentRef.current.offsetWidth
      const containerWidth = sliderContainerRef.current.offsetWidth
      const duration = (contentWidth / containerWidth) * 20

      setAnimationDuration(`${duration}s`)
    }
  }, [visibleNews])

  return (
    <div className="slider-text-container" ref={sliderContainerRef}>
      <div className="slider-text-header">
        <span>Breaking News</span>
      </div>

      <div className="slider">
        {isLoading ? (
          <div className="news-loading">
            <PulseLoader color="#fefdfb" loading={isLoading} size={15} />
          </div>
        ) : (
          <div
            className="slider-text-content"
            ref={sliderContentRef}
            style={{ '--animation-duration': animationDuration }}
          >
            {visibleNews.map((newsItem, index) => {
              const categoryColor = getCategoryColor(newsItem.categories)

              return (
                <Link
                  onClick={() => handleCategoryClick(newsItem.categories)}
                  key={index}
                  to={`/details/${newsItem.id}`}
                  className="slider-text-link"
                >
                  <img
                    className="arrow-icon"
                    src={arrowIcon}
                    alt="Arrow Icon"
                  />
                  <p style={{ color: categoryColor }} className="slider-title">
                    {newsItem.title}
                  </p>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SliderText
