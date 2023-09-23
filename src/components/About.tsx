import "../components/about.css";
function About(props) {


  const [info1, info2] = props.text[0].info || ["", ""];
  const [img1, img2] = props.text[0].img || ["loading.gif", "loading.gif"];
 
  const image1 = "./src/assets/Images/" + img1;
  const image2 = "./src/assets/Images/" + img2;

  return (<div>
    <div className="about-container1">
      <img
        src={image1}
        alt="About-pic"
      />
      <div>
        <p className="info1">
         {info1}
          </p>

          </div>
    

    </div>
    <div className="about-container2">
    <p className="info2" dangerouslySetInnerHTML={{ __html: info2 }} ></p>
    <img
        src={image2}
        alt="About-pic"
        className="handslaget"/>
    </div>
    </div>
  );
}

export default About;
