import React ,{useState} from 'react'

export default function Textul(props) {
    const handelUPclik =()=>{
      document.getElementById("exampleFormControlTextarea1").style.font="bolder";
        console.log("upper case is clicked "+text)
        let neText=text.toUpperCase()
        props.showAlert("Converted to upper case successfull","success")
        setText(neText)
    }
    const handlelowerCa =()=>{
         document.getElementById("exampleFormControlTextarea1").style.font="bolder";
        console.log("lower  case is clicked "+text)
        let neText=text.toLowerCase()
        props.showAlert("Converted to lower case successfull","success")
        setText(neText)
    }
    const handlecle =()=>{
         document.getElementById("exampleFormControlTextarea1").style.font="bolder";
        console.log("lower  case is clicked "+text)
        let neText=""
        props.showAlert("Text is cleared","success")
        setText(neText)
    }
    const download =()=>{
      
        //console.log('print');  
        let printContents = document.getElementById("data").innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
       document.body.innerHTML = originalContents; 
       props.showAlert(" Data downloading start ","success")

    }
    
    const handleonChange =(event)=>{
      console.log("On change   ")
      setText(event.target.value)
    }
    const textotspeech=()=>{
      var msg = new SpeechSynthesisUtterance();
msg.text = text;
window.speechSynthesis.speak(msg);
props.showAlert("Text to speech function start","success")
    } 
  
    const fontchage=()=>{
      let neText=text;
    document.getElementById("exampleFormControlTextarea1").style.fontFamily="Impact,Charcoal,sans-serif"
      setText(neText)
      props.showAlert("Font has been changed ","success")
    }
    const areachage=()=>{
      let neText=text
      document.getElementById("exampleFormControlTextarea1").style.background="black"
      document.getElementById("exampleFormControlTextarea1").style.color="blue"
      setText(neText)
      props.showAlert("Background color of text area is chnaged","success")
    }
    // const
    const [text,setText]=useState("")
    // text ="new text"//  wrong way to change the txt
    // correct Way
    // setText("this is settted text")
  return (
    <>
    
  <div className=" container">
 <h1>{props.head}</h1>   

    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonChange}></textarea>
    <button type="button"className="btn btn-success my-3 mx-3" onClick={handelUPclik}>CONVERT TO UPPER CASE</button>
  <button type="button" onClick={handlelowerCa} className="btn btn-info my-3 mx-3">convert to lower case</button>
  <button type="button" onClick={handlecle} className="btn btn-danger my-3 mx-3">clear the box</button>
  <button type="button" onClick={fontchage} className="btn btn-info my-3 mx-3">change the font</button>
  <button type="button" onClick={areachage} className="btn btn-danger my-3 mx-3">change the color of text and text area</button>
  <button type="button" onClick={textotspeech} className="btn btn-danger my-3 mx-3">to use speake loud</button>
  </div>
<div className="container my-4" id="data">
  <h1>Your text summery</h1>
  <p>There is only <b>{
 text.split("").length}</b> words and <b>{text.length}</b>  charecters</p>
  <p><b>{0.08*text.split(" ").length}</b> Minutes take to read</p>
  <h2>Preview</h2>
 <h5>{text.length>0?text:"Enter the text to preview it "}</h5>
   
<h4 className=' my-4'>Download the above data</h4>

<button type="button" class="btn btn-warning" onClick={download}>click here</button>


</div>

    </>
  )
}
