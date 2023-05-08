import React from 'react'

function alert(props) {
  const capilta=(word)=>{
    const lower=word.toLowerCase();
 return lower.charAt(0).toUpperCase()+lower.slice(1)
  }
  return (
  
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capilta(props.alert.type)}</strong>:{props.alert.msg}

</div>

  )
}

export default alert
