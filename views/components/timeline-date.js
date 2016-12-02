import React from 'react'

export default class TimelineDate extends React.Component {
  render () {
    return (
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-card mdl-shadow--4dp timeline-card">
            <div className="mdl-card__title center-this">
                <h3 className="mdl-card__title-text">{this.props.year}</h3>
            </div>
        </div>
    )
  }
}