import React, { Component } from "react"
import Img from "gatsby-image"
import { Carousel } from "react-responsive-carousel"
import Lightbox from "react-image-lightbox"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-image-lightbox/style.css"

const statusFormatter = (current, total) =>
  total > 1 && (
    <span>
      {current} de {total}
    </span>
  )

export default class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <div key={this.index}>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={this.props.images.length < 2 ? false : true}
          statusFormatter={statusFormatter}
          dynamicHeight={true}
        >
          {this.props.images.map((node, index) => (
            <button
              key={node.id}
              id={"gallery_" + node.id}
              className="openGallery"
              aria-label="Abrir Imagem"
              onClick={() => this.setState({ photoIndex: index, isOpen: true })}
            >
              <Img
                fixed={node.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={node.childImageSharp.fixed.originalName}
                className="card-img-top"
                itemprop="image"
              />
            </button>
          ))}
        </Carousel>

        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex].childImageSharp.fluid.src}
            nextSrc={
              this.props.images.length < 2
                ? null
                : this.props.images[(photoIndex + 1) % this.props.images.length]
                    .childImageSharp.fluid.src
            }
            prevSrc={
              this.props.images.length < 2
                ? null
                : this.props.images[
                    (photoIndex + this.props.images.length - 1) %
                      this.props.images.length
                  ].childImageSharp.fluid.src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.props.images.length - 1) %
                  this.props.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}
