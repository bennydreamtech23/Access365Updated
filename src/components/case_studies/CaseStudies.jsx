import {Link} from "react-router-dom"

const CaseStudies = () =>{
  return(
    <>
 <section className="container-fluild container8 p-5">
    <div class="row">
      <div class="col-md">
    <h1>Explore Our Case Studies & Latest Success Stories.</h1>
   </div>
   
   <div class="col-md">
  <p>For the Security and IT directors ensuring our places of work and leisure are safe. For the Chief Technology Officers shaping the smart businesses lf tomorrow. We delivers powerful and insight ful security solutions that enable protectors to drive forward.</p>
  
  <p>
    We understand that in a complex wprld, it is not enough to solve the challenges of today, we need to be ready for the opportunities of tomorrow.
  </p>
  </div>
  </div>
  
 <div class="row"
 id="gallery-work">
      <div class="col-md">
     <div class="bg-1">
       <button id="bg-1-button">Detection, Fire Alarm</button>
       </div>
       
       <div class="small">
         <h2>Getting The Right Fire Alarm Detection System Online</h2>
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems are more expensive than hard wired standard versions.
        </p>
        <Link to="/casestudies" id="overlay-btn2"> &larr; Explore More</Link>
       </div>
     </div>
     
        <div class="col-md">
     <div class="bg-2">
       <button id="bg-1-button">Security, Cctv</button>
       </div>
       
       <div class="small">
         <h2>Helping Manufacturers With Workplace Essential Safety</h2>
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems are more expensive than hard wired standard versions.
        </p>
        <Link to="/casestudies" id="overlay-btn2"> &larr; Explore More</Link>
       </div>
     </div>
     </div>
     
     <div class="row"
     id="gallery-work">
        <div class="col-md">
     <div class="bg-3">
       <button id="bg-1-button">Resources, Security</button>
       </div>
       
       <div class="small">
         <h2>Vendors With Resources Safety & Security</h2>
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems ate more expensive than hard wired standard versions.
        </p>
        <Link to="/casestudies" id="overlay-btn2"> &larr; Explore More</Link>
       </div>
     </div>
     
        <div class="col-md">
     <div class="bg-4">
       <button id="bg-1-button">Detection, Fire Alarm</button>
       </div>
       
       <div class="small">
         <h2>Home Security For The Front And Back Of Your House</h2>
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems ate more expensive than hard wired standard versions.
        </p>
        <Link to="/casestudies" id="overlay-btn2"> &larr; Explore More</Link>
       </div>
     </div>
     
        <div class="col-md">
     <div class="bg-5">
       <button id="bg-1-button">CCTV Security Camera</button>
       </div>
       
       <div class="small">
         <h2>Expert's Guild To Security For Rental Properties </h2>
         <p>The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems ate more expensive than hard wired standard versions.
        </p>
        <Link to="/casestudies" id="overlay-btn2"> &larr; Explore More</Link>
       </div>
     </div>
 </div>

<div class="row">
  <div class="col-md">
    <h3>Provide better security and control for residential and business customers.</h3>
    <a href="/Access365/Home Product.html">Compare Security Options!</a>
  </div>
  
 <div class="col-md">
       <div class="scrolling">
     <div 
    id="col"
    style={{whiteSpace: "nowrap"}}>
      <div class="scrolling-col-techbrand">
         <p>TECHBRAND</p>
      </div>
      
      <div class="scrolling-col-Sauter">
          <p>Sauter</p>
      </div>
      
      <div class="scrolling-col-evolved">
      <p>Evolved</p>
      </div>
      
      <div class="scrolling-col-sMatrics">
       <p>SMatrics</p>
      </div>
      
      <div class="scrolling-col-techbrand">
         <p>TECHBRAND</p>
      </div>
      
      <div class="scrolling-col-Sauter">
          <p>Sauter</p>
      </div>
      
      <div class="scrolling-col-evolved">
      <p>Evolved</p>
      </div>
      
      <div class="scrolling-col-sMatrics">
       <p>SMatrics</p>
      </div>
      
      </div>
    </div>
  </div>
  
  </div>
</section>
    
   </>
    )
}

export default CaseStudies