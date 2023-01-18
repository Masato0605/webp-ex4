import {useState, useEffect} from "react";
import { fetchImages } from "./api";
import Introduction from "./introduction";

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Yes or No</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="answer" width='300%' height='300%' />
        </figure>
      </div>
    </div>
  );
}
function Loading() {
  return <p>Loading...</p>;
}

  
function Gallery(props) {
 const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
   return (
    <div className="columns is-vcentered is-multiline">
          <div key={urls} className="column is-3">
            <Image src={urls} />
          </div>
     </div>
   );
}
  
 function Main() {
  const [urls,setUrls]=useState(null);
  useEffect(() => {
    fetchImages().then((urls) =>{
      setUrls(urls);
    })
  },[]);
   return (
     <main>
       <section className="section">
         <div className="container">
         <Gallery urls={urls} />
         </div>
         
       </section>
     </main>
   );
 }

 function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Answer images are retrieved from Yes Or No</p>
        <p>
          <a href="https://yesno.wtf/#">Donate to Yes Or No</a>
        </p>
        <p>日本大学文理学部情報科学科 Webプログラミング課題</p>
        <p>5421027 佐野雅仁</p>
      </div>
    </footer>
  );
}
  
function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Main />
      <Footer />
    </div>
  );
}
  
  export default App;