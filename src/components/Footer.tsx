import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="open-hour">
          <p>Vi tillverkar allt från krokar till bilyxor och ljuskronor.</p>
          <p>
            <strong>Öppettider: vardagar 9-17, lunchstängt 13 - 14.</strong>
          </p>
        </div>
        <div className="company-info">
          <h4>Gärdsjö Smedja HB</h4>
          <p>
            <strong>Adress:</strong> Skrikbäcksvägen 14 Nedre Gärdsjö 795 92
            Rättvik
          </p>
          <p>
            <strong>Telefon:</strong> 070-317 77 90 (Lars) | 070-68 96 545
            (Anders)
          </p>

          <p>
            <strong>Organisationsnummer</strong> 969660-6707 
          </p>
          <br />
          <p>
            <strong>Momsreg.nr</strong> VAT-nr.SE 969660670701{" "}
          </p>
          <br />
          <p>
            <strong>Postgiro</strong> 27 18 11-2 <strong>Bankgiro</strong>
            5269-1433
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
