import React from "react";
import "./temp.css";

export default function Temp() {
  return (
    <div className="wine_list">
      <ul className="clfix ui_best_over">
        <li>
          <div className="tags">
            <em className="tag type white">White</em>
          </div>
          <div className="img">
            <img
              src="http://i02a303.p.ssafy.io:8090/WineProject/Wine/Castello%20Banfi,%20La%20Rosa.gif"
              alt="안나 드 코도르뉴 블랑 드 블랑"
            />
          </div>
          <strong
            className="tit _dotdotdot"
            data-ellipse-height="70"
            style={{ overflowWrap: "break-word", width: 215 }}
          >
            Anna de Codorniu
          </strong>
          <span className="tit">"안나 드 코도르뉴 블랑 드 블랑" </span>
          <div className="hashtag">#유럽와인 #스페인 # White #Medium Dry</div>
          <div className="bx_over" style={{ opacity: 0 }}>
            <h5 className="hide_txt">와인정보</h5>
            <span className="tit">"안나 드 코도르뉴 블랑 드 블랑"</span>
            <div className="info">
              <p>품종 : 샤도네이</p>
              <p>제조사 : 코도르뉴</p>
              <p>원산지 : 스페인, 페네데스</p>
              <p>Color : 밝은 볕짚색</p>
            </div>
            <div className="btn_area">
              <a
                href="/wine/715"
                // onclick="goWineDetail(715); return false;"
                className="btn_line_type wh"
              >
                view more <span className="ico"></span>{" "}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
