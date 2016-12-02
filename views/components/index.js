import React from 'react'
import { render } from 'react-dom'
import Timeline from './timeline'

/**
import TimelineDate from './timeline-date'
import SpacerCard from './spacer-card.js'


var space85 = {
    height: "8.5em"
}

var space35 = {
    height: "3.5em"
}

var space6 = {
    height: "6em"
}

var space8 = {
    height: "8em"
}

var space12 = {
    height: "12em"
}

render(<SpacerCard space={space85}/>, document.getElementById('spacer8.5'))
render(<TimelineDate year="2017"/>, document.getElementById('year2017'))
render(<SpacerCard space={space35}/>, document.getElementById('spacer3.5'))
render(<TimelineDate year="2016"/>, document.getElementById('year2016'))
render(<SpacerCard space={space6}/>, document.getElementById('spacer6'))
render(<TimelineDate year="2015"/>, document.getElementById('year2015'))
render(<SpacerCard space={space8}/>, document.getElementById('spacer8'))
render(<TimelineDate year="2014"/>, document.getElementById('year2014'))
render(<SpacerCard space={space12}/>, document.getElementById('spacer12'))
render(<TimelineDate year="2013"/>, document.getElementById('year2013'))
*/
render(<Timeline />, document.getElementById('theTimeline'))