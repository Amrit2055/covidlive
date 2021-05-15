import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid =()=>{
    const [data, setData]=useState([]);
    const getCovidData=async ()=>{
        
        try{
            const res=await fetch('https://disease.sh/v2/countries/nepal');
            const actualData=await res.json();
            setData(actualData);
            console.log(actualData);

        }catch(err) {
            console.log(err);

        }
        

    }
    useEffect(()=>{
        getCovidData();

    }, []);
    return(
        <>
        
        <main>
  <h2 className="title">COVID TRACKER NEPAL</h2>
  <h1 className="blink_me">  🔴  LIVE</h1>
</main>
<div class="cards">
  <article className="cardss">
    <header>
      <h2 className="card_text">OUR COUNTRY </h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">NEPAL</h1>
    </div>
  </article>
  
  
  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL  CASES</h2>
    </header>

    <div class="content">
      <h1 className="card_title">{data.cases}</h1>
    </div>
  </article>
  
  <article className="cardss">
    <header>
      <h2 className="card_text">TODAY'S CASES</h2>
    </header>

    <div class="content">
      <h1 className="card_title">{data.todayCases}</h1>
    </div>
  </article>
  
  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL DEATHS   &nbsp; &nbsp;  CASES</h2>
    </header>

    
    <div class="content">
      
      
      <h1 className="card_title">{data.deaths}</h1>
    </div>
  </article>
  
  <article className="cardss">
    <header>
      <h2 className="card_text">TODAY'S DEATHS CASES</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.todayDeaths}</h1>
    </div>
  </article>
  
  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL RECOVERED CASES</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.recovered}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TODAY'S RECOVERED CASES</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.todayRecovered}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL ACTIVE CASES</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.active}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL CRITICAL CASES</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.critical}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL CASES PER MILLION</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.casesPerOneMillion}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL DEATHS PER MILLION</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.deathsPerOneMillion}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL &nbsp; &nbsp; &nbsp; PCR  &nbsp; &nbsp; &nbsp; &nbsp;  TESTS</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.tests}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL &nbsp; &nbsp;  PCR  &nbsp;  TESTS PER MILLION</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.testsPerOneMillion}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">TOTAL &nbsp; &nbsp;   POPULATION OF NEPAL</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.population}</h1>
    </div>
  </article>

  <article className="cardss">
    <header>
      <h2 className="card_text">CONTINENT</h2>
    </header>

    <div class="content">
      
      
      <h1 className="card_title">{data.continent}</h1>
    </div>
  </article>

</div>

        </>
    )
}

export default Covid;