import React from "react";
import "./Hosting5.scss";
function Hosting5({ data }) {
  return (
    <div className="hosting-5">
      {data &&
        data.map((d, i) => {
          return (
            <div className="content-div" key={i + 1}>
              {d.extraIcon || d.extraData ? (
                <div className="extra-cont-div">
                  {d.extraIcon ? <img src={d.extraIcon} alt="extraIcon" /> : ""}
                  <span>{d.extraData}</span>
                </div>
              ) : (
                ""
              )}
              <span className="serial-num-span">{i + 1}</span>
              <div className="show-more-div">
                <span>{d.sM}</span>
                {d.sMicon ? <img src={d.sMicon} alt="sMicon" /> : ""}
              </div>
              
              <div className="first-div-of-content-div">
                {d.img ? <img src={d.img} alt="img" /> : ""}
                <span>{d.buildName}</span>
              </div>
              <div className="sec-div-of-content-div">
                <div className="upper-div">
                  <b>{d.contentFirstHead}</b>
                  <p>{d.contentFirstPara}</p>
                </div>
                <div className="middle-div">
                  <b>{d.contentSecHead}</b>
                  {d.contentSecPara ? <p>{d.contentSecPara}</p> : ""}
                  {d.contentSecDiv ? (
                    <div className="content-div-of-middle-div">
                      {d.contentSecDiv.map((d2, i) => {
                        return (
                          <span key={i + 1}>
                            <b className="b1">{d2.rating}</b>
                            <b className="b2">{d2.name}</b>
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="lower-div">
                  <b>{d.whyHead}</b>
                  {d.whyCont ? (
                    <div className="why-cont-div">
                      {d.whyCont?.map((d2, i) => {
                        return (
                          <div key={i + 1}>
                            {d2.icon ? <img src={d2.icon} alt="icon" /> : ""}
                            <span>{d2.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="third-div-of-content-div">
                <div className="rating-div">
                  <span className="rating-num-span">
                    {d.rateNum < 0
                      ? 0
                      : d.rateNum && d.rateNum > 10
                      ? 10
                      : d.rateNum}
                  </span>
                  <span className="rating-status-span">{d.rateStatus}</span>
                  <span className="rating-star-span">
                    {d.rateImg ? <img src={d.rateImg} alt="rateImg" /> : ""}
                  </span>
                </div>
                
              <button className="view-btn">View</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Hosting5;
