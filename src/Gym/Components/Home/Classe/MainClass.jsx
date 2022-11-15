import React from "react";
import "./Main_Class.css";
import ClassData from "./ClassData";

const MainClass = () => {

  // setInterval(()=>{
  //     console.log('hii');
  // },3000)

  return (
    <div className="bigcontainer">
      <div className="main--container">
        {ClassData.map((data, index) => {
          return(
          <article key={index} className="card">
              <img className="cardimg" src={data.img} alt="" />
            <article className="content">
              <h3 className="title">{data.title}</h3>
              <h5 className="sub-title">{data.trenar}</h5>
              <p className="p">{data.ditels}</p>
              <div className="btn">
                <button>Read more</button>
              </div>
            </article>
          </article>
          )
          
        })}
      </div>
    </div>
  );
};

export default MainClass;

// {
//   /* <script>
//       $(".slider").owlCarousel({
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 3000, //2000ms = 2s;
//         autoplayHoverPause: true,
//       });
//     </script> */
// }
