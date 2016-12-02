import React from 'react'
import TimelineDate from './timeline-date'
import SpacerCard from './spacer-card.js'

export default class Timeline extends React.Component {
  render () {
    var space95 = {
        height: "9.5em"
    }

    var space4 = {
        height: "4em"
    }

    var space75 = {
        height: "7.5em"
    }

    var space8 = {
        height: "8em"
    }

    var space13 = {
        height: "13em"
    }
    return (
        <div>
            <SpacerCard space={space95}/>
            <TimelineDate year="2017"/>
            <SpacerCard space={space4}/>
            <TimelineDate year="2016"/>
            <SpacerCard space={space75}/>
            <TimelineDate year="2015"/>
            <SpacerCard space={space8}/>
            <TimelineDate year="2014"/>
            <SpacerCard space={space13}/>
            <TimelineDate year="2013"/>
        </div>
    )
  }
}