import React from 'react'

function Progress_bar(props) {
    const Styles={
        width : props.percentage +'%',
        
      }
  return (
    <div >
        {props.title}
      <div className="progress" style={{margin:'10px 0px' ,color:'black'}}>
          <div
            className={`progress-bar progress-bar-striped progress-bar-animated bg-${props.sign}`}
            role="progressbar"
            style={Styles}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          > {props.percentage}</div>
        </div>
    </div>
  )
}

export default Progress_bar
