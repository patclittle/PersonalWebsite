import React from 'react'
import { render } from 'react-dom'
import TimelineDate from './timeline-date'

render(<TimelineDate year="2017"/>, document.getElementById('year2017'))
render(<TimelineDate year="2016"/>, document.getElementById('year2016'))
render(<TimelineDate year="2015"/>, document.getElementById('year2015'))
render(<TimelineDate year="2014"/>, document.getElementById('year2014'))
render(<TimelineDate year="2013"/>, document.getElementById('year2013'))