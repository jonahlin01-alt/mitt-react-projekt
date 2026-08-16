function InformationPage() {
  return (
    <div className="container">
      <h1>Information</h1>
      <p>Här hittar du aktuell klimatdata och utvecklingsinformation.</p>
      <ul>
        <li>Temperaturutveckling</li>
        <li>Utsläppstrender</li>
        <li>Åtgärdsförslag</li>
      </ul>
      <a className="text-center fs-2 text-decoration-underline text-dark" href="LoginPage" onClick={() => setIsLoggedIn(false)}>
          Logga ut
        </a>
    </div>
    
  );
}

export default InformationPage;
