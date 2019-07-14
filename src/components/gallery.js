import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app

const statusFormatter = (current, total) => (
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
          statusFormatter={statusFormatter}
        >
          {this.props.images.map((node, index) => (
            <button
              key={node.id}
              onClick={() => this.setState({ photoIndex: index, isOpen: true })}
            >
              <Img
                fixed={node.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={node.childImageSharp.fixed.originalName}
                className="card-img-top"
              />
            </button>
          ))}
        </Carousel>

        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex].url}
            nextSrc={
              this.props.images[(photoIndex + 1) % this.props.images.length].url
            }
            prevSrc={
              this.props.images[
                (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              ].url
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
