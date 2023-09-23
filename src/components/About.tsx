import "../components/about.css";
function About() {
  return (<div>
    <div className="about-container1">
      <img
        src="./src/assets/Images/blacksmith-2371002_1280.jpg"
        alt="About-pic"
      />
      <div>
        <p className="smide">
          Smide har alltid fascinerat människor och har länge varit omslutet av
          mystik. Yrkeshemligheter har varit guld värda. I smedjan värms järnet
          i ässjan, för att sedan smidas och formas på städet. Vi har tagit
          fasta på det traditionella formspråket, men vi experimenterar även med
          nya former och arbetsätt.
          </p>

          </div>
    

    </div>
    <div className="about-container2">
    <p className="smedjan">Gärdsjö Smedja är inhyst i en gammal gård i Nedre Gärdsjö, 8 km norr om Rättvik, utmed väg 301 mot Furudal. Det är skyltat från riksvägen.
Produktionen är i första hand inriktad på traditionellt hantverkssmide, men vi gör även verktyg, specialbeställningar och byggnadssmide. 
          
          Produkterna säljs också hos <a href="https://handslaget.nu/project/lars-eggemark-och-anders-almlof/" target="_blank">Handslaget</a> i Rättvik, Jobs Boden i Västanvik, Leksand samt Mora hemslöjd . En del av produktionen finns också i Vikingahuset Stornäset vid sjön Ljugaren norr om Rättvik. Gärdsjö Smedja är medlemmar i Sveriges konstsmidesförening och Siljan Turism AB. 
          </p>
    <img
        src="./src/assets/Images/anders_lars_handslaget.jpg"
        alt="About-pic"
        className="handslaget"/>
    </div>
    </div>
  );
}

export default About;
