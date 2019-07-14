import React, { Component } from "react"
import PropTypes from "prop-types"
import Truncate from "react-truncate"

class ReadMore extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      expanded: false,
      truncated: false,
    }

    this.handleTruncate = this.handleTruncate.bind(this)
    this.toggleLines = this.toggleLines.bind(this)
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated,
      })
    }
  }

  toggleLines(event) {
    event.preventDefault()

    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const { children, more, less, lines } = this.props

    const { expanded, truncated } = this.state

    return (
      <div className="readmore">
        <Truncate
          lines={!expanded && lines}
          ellipsis={
            <div>
              ...{" "}
              <button href="#" onClick={this.toggleLines}>
                {more}
              </button>
            </div>
          }
          onTruncate={this.handleTruncate}
        >
          {children}
        </Truncate>
        {!truncated && expanded && (
          <div>
            {" "}
            <button onClick={this.toggleLines}>
              {less}
            </button>
          </div>
        )}
      </div>
    )
  }
}

ReadMore.defaultProps = {
  lines: 3,
  more: "Mais detalhes [+]",
  less: "Fechar detalhes [-]",
}

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string,
}

export default ReadMore
