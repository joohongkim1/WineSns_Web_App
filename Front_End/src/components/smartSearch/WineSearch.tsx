import React from 'react';
import './css/common.css';
import './css/contents.css';
import './css/jquery.jscrollpane.css';
import './css/reset.css';
import './css/font.css';

export default function WineSearch(){

        function handleClick(e : any) {
            e.preventDefault();
            console.log('The link was clicked.');
        }
        
        return (
            <div id="wrap" className="main">
                <div id="header"
                    style={{ position: "relative", top: "0px", left: "0px" }}>
                    <section id="bx_smart_search" className="open" style={{ top: "0px", opacity: "1" }}>
                        <div className="smart_inner">
                            <div className="smart_cont_wrap">
                                <div id="expert" className="bx_cont" style={{ display: "block" }}>
                                    <div className="smart_tit">
                                        <h2>WINE EXPERT</h2> <span>와인 애호가</span>
                                    </div>
                                    <div className="smart_cont">
                                        <form action="/wine/mine" method="post">
                                            <input type="hidden" name="level" value="expert" />
                                            <div className="ss_search clfix">
                                                <div className="ss_search_form">
                                                    <span className="ip_txt">
                                                        <input type="text" name="name-apply" id="expert-name-apply" title="와인명을 입력" placeholder="와인명을 입력하세요." data-required="와인명을 입력하세요." />
                                                    </span> </div> <a href="#" onClick={handleClick} className="btns btn_wine_search"
                                                        id="expert-by-name"> <span className="ico glass"></span>와인명 검색 </a>
                                                <p>* 하단 와인 속성 항목과 무관하게 와인명만 검색 가능합니다.</p>
                                            </div>
                                        </form>
                                        <div className="expert_wrap">
                                            <div className="step pdt0">
                                                <h3>Price <span role="text">* 판매처에 따라 와인 가격이 상이할 수 있습니다. 참고 바랍니다.</span> </h3>
                                                <div className="price_radio_wrap">
                                                    <div className="step_bar step01 _default-option"></div>
                                                    <div className="step_radio">
                                                        <input type="radio" id="pr01" name="e_price"
                                                            className="pointer01 _default-option" value="1" defaultChecked />
                                                        <label htmlFor="pr01" className="on">1만원대 (0~2만원)</label>
                                                        <input type="radio" id="pr02" name="e_price" className="pointer02 " value="3" />
                                                        <label htmlFor="pr02"
                                                            className="">3만원대 (2~4만원)</label> <input type="radio" id="pr03" name="e_price" className="pointer03 "
                                                                value="5" /> <label htmlFor="pr03" className="">5만원대 (4~9만원)</label> <input type="radio" id="pr04"
                                                                    name="e_price" className="pointer04 " value="10" /><label htmlFor="pr04" className="">10만원대
                          (9~15만원)</label> <input type="radio" id="pr05" name="e_price" className="pointer05 " value="15" />
                                                        <label htmlFor="pr05" className="">15만원 이상</label> </div>
                                                </div>
                                            </div>
                                            <div className="step clfix pdb15">
                                                <div className="country_radio_wrap">
                                                    <h3>Country</h3>
                                                    <div className="country_radio"> <span className="input_radio ui_complete"> <input type="radio" id="ct00"
                                                        name="e_country" defaultChecked className="_default-option " value="" data-hash="전체 국가" />
                                                        <label htmlFor="ct00" className="ct01"> <span className="radio_checked"></span> <em>전체</em> </label>
                                                    </span> <span className="input_radio ui_complete"> <input type="radio" id="ct01" name="e_country"
                                                        className=" " value="france" />
                                                            <label htmlFor="ct01" className="ct02"> <span className="radio_basic"></span>
                                                                <em>프랑스</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                    id="ct02" name="e_country" className=" " value="italy" /> <label htmlFor="ct02" className="ct03"> <span
                                                                        className="radio_basic"></span> <em>이탈리아</em> </label> </span> <span
                                                                            className="input_radio ui_complete"> <input type="radio" id="ct03" name="e_country" className=" "
                                                                                value="spain" /><label htmlFor="ct03" className="ct04"> <span className="radio_basic"></span>
                                                                <em>스페인</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                    id="ct04" name="e_country" className=" " value="germany" /><label htmlFor="ct04" className="ct05"> <span
                                                                        className="radio_basic"></span> <em>독일</em> </label> </span> <span
                                                                            className="input_radio ui_complete"> <input type="radio" id="ct05" name="e_country" className=" "
                                                                                value="usa" /><label htmlFor="ct05" className="ct06"> <span className="radio_basic"></span> <em>미국</em>
                                                            </label> </span> <span className="input_radio ui_complete"> <input type="radio" id="ct06"
                                                                name="e_country" className=" " value="chile" /><label htmlFor="ct06" className="ct07"> <span
                                                                    className="radio_basic"></span> <em>칠레</em> </label> </span> <span
                                                                        className="input_radio ui_complete"> <input type="radio" id="ct07" name="e_country" className=" "
                                                                            value="australia" /><label htmlFor="ct07" className="ct08"> <span className="radio_basic"></span>
                                                                <em>호주</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                    id="ct08" name="e_country" className=" " value="canada" /><label htmlFor="ct08" className="ct09"> <span
                                                                        className="radio_basic"></span> <em>캐나다</em> </label> </span> <span
                                                                            className="input_radio ui_complete"> <input type="radio" id="ct09" name="e_country" className=" "
                                                                                value="new_zealand" /><label htmlFor="ct09" className="ct10"> <span className="radio_basic"></span>
                                                                <em>뉴질랜드</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                    id="ct10" name="e_country" className=" " value="argentina" /> <label htmlFor="ct10" className="ct11">
                                                                <span className="radio_basic"></span> <em>아르헨티나</em> </label> </span> <span
                                                                    className="input_radio ui_complete"> <input type="radio" id="ct11" name="e_country" className=" "
                                                                        value="south_africa" /> <label htmlFor="ct11" className="ct12"> <span className="radio_basic"></span>
                                                                <em>남아공</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                    id="ct12" name="e_country" className=" " value="korea" /> <label htmlFor="ct12" className="ct13"> <span
                                                                        className="radio_basic"></span> <em>한국</em> </label> </span> </div>
                                                </div>
                                                <div className="winery_radio_wrap">
                                                    <h3>Winery</h3>
                                                    <div className="winery_radio bx_radio scroll-pane jspScrollable"
                                                        style={{ overflow: "hidden", padding: "0px", width: "450px" }}>
                                                        <div className="jspContainer" style={{ width: "450px", height: "155px" }}>
                                                            <div className="jspPane" style={{ padding: "17px 20px", top: "-298.4px", left: "0px", width: "400px" }}>
                                                                <ul className="clfix _winery-wrap">
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi01_d" name="winery" defaultChecked
                                                                                className="_default-option" data-hash="전체 와이너리" />
                                                                            <label htmlFor="wi01_d">
                                                                                <span className="radio_basic"></span>
                                                                                <em>전체</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi00" name="winery" value="WN064" />
                                                                            <label htmlFor="wi00">
                                                                                <span className="radio_basic"></span>
                                                                                <em>미국 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi01" name="winery" value="WN001" />
                                                                            <label htmlFor="wi01">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Beringer</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi02" name="winery" value="WN002" />
                                                                            <label htmlFor="wi02">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Carlo Rossi</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi03" name="winery" value="WN003" />
                                                                            <label htmlFor="wi03">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Apothic</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi04" name="winery" value="WN004" />
                                                                            <label htmlFor="wi04">
                                                                                <span className="radio_basic"></span>
                                                                                <em>CARNIVOR</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi05" name="winery" value="WN005" />
                                                                            <label htmlFor="wi05">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Louis M. Martini</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi06" name="winery" value="WN075" />
                                                                            <label htmlFor="wi06">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Dark Horse</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi07" name="winery" value="WN077" />
                                                                            <label htmlFor="wi07">
                                                                                <span className="radio_basic"></span>
                                                                                <em>베어풋</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi08" name="winery" value="WN065" />
                                                                            <label htmlFor="wi08">
                                                                                <span className="radio_basic"></span>
                                                                                <em>아르헨티나 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi09" name="winery" value="WN006" />
                                                                            <label htmlFor="wi09">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Dona Paula</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi10" name="winery" value="WN007" />
                                                                            <label htmlFor="wi10">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Los Cardos</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi11" name="winery" value="WN078" />
                                                                            <label htmlFor="wi11">
                                                                                <span className="radio_basic"></span>
                                                                                <em>트리벤토</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi12" name="winery" value="WN066" />
                                                                            <label htmlFor="wi12">
                                                                                <span className="radio_basic"></span>
                                                                                <em>호주 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi13" name="winery" value="WN008" />
                                                                            <label htmlFor="wi13">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Burge</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi14" name="winery" value="WN009" />
                                                                            <label htmlFor="wi14">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Eye Spy</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi15" name="winery" value="WN010" />
                                                                            <label htmlFor="wi15">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Greenock</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi16" name="winery" value="WN011" />
                                                                            <label htmlFor="wi16">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Kilikanoon</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi17" name="winery" value="WN012" />
                                                                            <label htmlFor="wi17">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Massena</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi18" name="winery" value="WN013" />
                                                                            <label htmlFor="wi18">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Penfolds</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi19" name="winery" value="WN014" />
                                                                            <label htmlFor="wi19">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Peter Lehmann</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi20" name="winery" value="WN015" />
                                                                            <label htmlFor="wi20">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Three Pillars</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi21" name="winery" value="WN016" />
                                                                            <label htmlFor="wi21">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Turkey Flat</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi22" name="winery" value="WN017" />
                                                                            <label htmlFor="wi22">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Wolf Blass</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi23" name="winery" value="WN018" />
                                                                            <label htmlFor="wi23">
                                                                                <span className="radio_basic"></span>
                                                                                <em>yellow tail</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi24" name="winery" value="WN067" />
                                                                            <label htmlFor="wi24">
                                                                                <span className="radio_basic"></span>
                                                                                <em>캐나다 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi25" name="winery" value="WN019" />
                                                                            <label htmlFor="wi25">
                                                                                <span className="radio_basic"></span>
                                                                                <em>King's Court</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi26" name="winery" value="WN068" />
                                                                            <label htmlFor="wi26">
                                                                                <span className="radio_checked"></span>
                                                                                <em>칠레 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi27" name="winery" value="WN020" />
                                                                            <label htmlFor="wi27">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Balduzzi</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi28" name="winery" value="WN021" />
                                                                            <label htmlFor="wi28">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Carmen</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi29" name="winery" value="WN022" />
                                                                            <label htmlFor="wi29">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Casa Silva</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi30" name="winery" value="WN023" />
                                                                            <label htmlFor="wi30">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Casablanca</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi31" name="winery" value="WN024" />
                                                                            <label htmlFor="wi31">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Santa Carolina</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi32" name="winery" value="WN025" />
                                                                            <label htmlFor="wi32">
                                                                                <span className="radio_basic"></span>
                                                                                <em>santa rita</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi33" name="winery" value="WN026" />
                                                                            <label htmlFor="wi33">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Sur Andino</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi34" name="winery" value="WN069" />
                                                                            <label htmlFor="wi34">
                                                                                <span className="radio_basic"></span>
                                                                                <em>프랑스 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi35" name="winery" value="WN027" />
                                                                            <label htmlFor="wi35">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Barton &amp; Guestier</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi36" name="winery" value="WN028" />
                                                                            <label htmlFor="wi36">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Castel</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi37" name="winery" value="WN029" />
                                                                            <label htmlFor="wi37">
                                                                                <span className="radio_basic"></span>
                                                                                <em>CFGV</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi38" name="winery" value="WN030" />
                                                                            <label htmlFor="wi38">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Dulong</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi39" name="winery" value="WN031" />
                                                                            <label htmlFor="wi39">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Europvin</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi40" name="winery" value="WN032" />
                                                                            <label htmlFor="wi40">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Francois Janoueix</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi41" name="winery" value="WN033" />
                                                                            <label htmlFor="wi41">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Georges Duboeuf</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi42" name="winery" value="WN034" />
                                                                            <label htmlFor="wi42">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Grand Cru</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi43" name="winery" value="WN035" />
                                                                            <label htmlFor="wi43">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Groffier</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi44" name="winery" value="WN036" />
                                                                            <label htmlFor="wi44">
                                                                                <span className="radio_basic"></span>
                                                                                <em>HOBNOB</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi45" name="winery" value="WN037" />
                                                                            <label htmlFor="wi45">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Joseph Drouhin</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi46" name="winery" value="WN038" />
                                                                            <label htmlFor="wi46">
                                                                                <span className="radio_basic"></span>
                                                                                <em>La Passion</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi47" name="winery" value="WN039" />
                                                                            <label htmlFor="wi47">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Lambrays</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi48" name="winery" value="WN040" />
                                                                            <label htmlFor="wi48">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Lanson</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi49" name="winery" value="WN041" />
                                                                            <label htmlFor="wi49">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Lou Dumont</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi50" name="winery" value="WN042" />
                                                                            <label htmlFor="wi50">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Marc Hebrart</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi51" name="winery" value="WN043" />
                                                                            <label htmlFor="wi51">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Pierre Amadieu</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi52" name="winery" value="WN044" />
                                                                            <label htmlFor="wi52">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Sichel</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi53" name="winery" value="WN046" />
                                                                            <label htmlFor="wi53">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Veuve Ambal</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi54" name="winery" value="WN047" />
                                                                            <label htmlFor="wi54">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Veyret Latour</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi55" name="winery" value="WN076" />
                                                                            <label htmlFor="wi55">
                                                                                <span className="radio_basic"></span>
                                                                                <em>울프베르제</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi56" name="winery" value="WN079" />
                                                                            <label htmlFor="wi56">
                                                                                <span className="radio_basic"></span>
                                                                                <em>뽀므리</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi57" name="winery" value="WN070" />
                                                                            <label htmlFor="wi57">
                                                                                <span className="radio_basic"></span>
                                                                                <em>독일 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi58" name="winery" value="WN048" />
                                                                            <label htmlFor="wi58">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Moselland</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi59" name="winery" value="WN074" />
                                                                            <label htmlFor="wi59">
                                                                                <span className="radio_basic"></span>
                                                                                <em>PeterMertes</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi60" name="winery" value="WN049" />
                                                                            <label htmlFor="wi60">
                                                                                <span className="radio_basic"></span>
                                                                                <em>이태리 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi61" name="winery" value="WN050" />
                                                                            <label htmlFor="wi61">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Banfi</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi62" name="winery" value="WN051" />
                                                                            <label htmlFor="wi62">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Biondi Santi</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi63" name="winery" value="WN052" />
                                                                            <label htmlFor="wi63">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Fontanafredda</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi64" name="winery" value="WN053" />
                                                                            <label htmlFor="wi64">
                                                                                <span className="radio_basic"></span>
                                                                                <em>San Felice</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi65" name="winery" value="WN054" />
                                                                            <label htmlFor="wi65">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Tasca d'Almerita</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi66" name="winery" value="WN055" />
                                                                            <label htmlFor="wi66">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Zonin</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi67" name="winery" value="WN071" />
                                                                            <label htmlFor="wi67">
                                                                                <span className="radio_basic"></span>
                                                                                <em>한국 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi68" name="winery" value="WN056" />
                                                                            <label htmlFor="wi68">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Majuang</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi69" name="winery" value="WN072" />
                                                                            <label htmlFor="wi69">
                                                                                <span className="radio_basic"></span>
                                                                                <em>뉴질랜드 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi70" name="winery" value="WN057" />
                                                                            <label htmlFor="wi70">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Babich</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi71" name="winery" value="WN073" />
                                                                            <label htmlFor="wi71">
                                                                                <span className="radio_basic"></span>
                                                                                <em>남아공 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi72" name="winery" value="WN058" />
                                                                            <label htmlFor="wi72">
                                                                                <span className="radio_basic"></span>
                                                                                <em>KWV</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi73" name="winery" value="WN059" />
                                                                            <label htmlFor="wi73">
                                                                                <span className="radio_basic"></span>
                                                                                <em>스페인 기타</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi74" name="winery" value="WN060" />
                                                                            <label htmlFor="wi74">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Borsao</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi75" name="winery" value="WN061" />
                                                                            <label htmlFor="wi75">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Felix Solis</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi76" name="winery" value="WN062" />
                                                                            <label htmlFor="wi76">
                                                                                <span className="radio_basic"></span>
                                                                                <em>LAN</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="input_radio ui_complete">
                                                                            <input type="radio" id="wi77" name="winery" value="WN063" />
                                                                            <label htmlFor="wi77">
                                                                                <span className="radio_basic"></span>
                                                                                <em>Roqueta</em>
                                                                            </label>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="jspVerticalBar">
                                                                <div className="jspCap jspCapTop"></div>
                                                                <div className="jspTrack" style={{ height: "155px" }}>
                                                                    <div className="jspDrag" style={{ height: "19px", top: "35.2584px" }}>
                                                                        <div className="jspDragTop"></div>
                                                                        <div className="jspDragBottom"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="jspCap jspCapBottom"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="step clfix">
                                                <h3>Wine Type</h3>
                                                <div className="wine_radio_wrap wrap01">
                                                    <h4>와인 종류</h4>
                                                    <div> <span className="input_radio ui_complete"> <input type="radio" id="wt00" name="e_color"
                                                        className=" " value="red" /><label htmlFor="wt00" className="ty01"> <span className="radio_basic"></span>
                                                            <em>Red</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                id="wt01" name="e_color" className=" " value="rose" /> <label htmlFor="wt01" className="ty02"> <span
                                                                    className="radio_checked"></span> <em>Rose</em> </label> </span> <span
                                                                        className="input_radio ui_complete"> <input type="radio" id="wt02" name="e_color" className=" "
                                                                            value="white" /> <label htmlFor="wt02" className="ty03"> <span className="radio_basic"></span>
                                                                <em>White</em> </label> </span> </div>
                                                </div>
                                                <div className="wine_radio_wrap wrap02">
                                                    <h4>탄산 종류</h4>
                                                    <div> <span className="input_radio ui_complete"> <input type="radio" id="sp00" name="e_sparkling"
                                                        className=" " value="still" /> <label htmlFor="sp00" className="sp01"> <span className="radio_basic"></span>
                                                            <em>Still</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                id="sp01" name="e_sparkling" className=" " value="sparkling" /> <label htmlFor="sp01" className="sp02">
                                                                <span className="radio_checked"></span> <em>Sparkling</em> </label> </span> </div>
                                                </div>
                                                <div className="wine_radio_wrap wrap03">
                                                    <h4>당도 종류</h4>
                                                    <div> <span className="input_radio ui_complete"> <input type="radio" id="sw00" name="e_sweet"
                                                        className=" " value="sweet" /> <label htmlFor="sw00" className="sw01"> <span className="radio_basic"></span>
                                                            <em>Sweet</em> </label> </span> <span className="input_radio ui_complete"> <input type="radio"
                                                                id="sw01" name="e_sweet" className=" " value="normal" /><label htmlFor="sw01" className="sw02"> <span
                                                                    className="radio_basic"></span> <em>Normal</em> </label> </span> <span
                                                                        className="input_radio ui_complete"> <input type="radio" id="sw02" name="e_sweet" className=" "
                                                                            value="dry" /><label htmlFor="sw02" className="sw03"> <span className="radio_checked"></span>
                                                                <em>Dry</em> </label> </span> </div>
                                                </div>
                                            </div>
                                            <div className="step clfix bdb0">
                                                <h3>Detail</h3>
                                                <div className="detail_radio_wrap01">
                                                    <h4>알코올 도수</h4>
                                                    <div className="detail_radio">
                                                        <div className="step_bar step02"></div>
                                                        <div className="step_radio"> <input type="radio" id="al00" name="e_alcohol" className="pointer01 "
                                                            value="0" /> <label htmlFor="al00" className="">0%</label> <input type="radio" id="al01"
                                                                name="e_alcohol" className="pointer02 " value="5" data-hash="~5%" /><label htmlFor="al01"
                                                                    className="on">5%</label> <input type="radio" id="al02" name="e_alcohol" className="pointer03 "
                                                                        value="10" data-hash="~10%" /> <label htmlFor="al02" className="">10%</label> <input type="radio"
                                                                            id="al03" name="e_alcohol" className="pointer04 " value="15" data-hash="~15%" /> <label htmlFor="al03"
                                                                                className="">15%</label> <input type="radio" id="al04" name="e_alcohol" defaultChecked
                                                                                    className="pointer05 _default-option" value="20" data-hash="~20%" /> <label htmlFor="al04"
                                                                                        className="">20%</label> </div>
                                                    </div>
                                                </div>
                                                <div className="detail_radio_wrap02">
                                                    <h4>용량</h4>
                                                    <div className="detail_radio bx_radio">
                                                        <ul className="clfix">
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol00" name="e_volume"
                                                                defaultChecked className="_default-option " value="750" /><label htmlFor="vol00"> <span
                                                                    className="radio_checked"></span> <em>750ml</em> </label> </span> </li>
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol01" name="e_volume"
                                                                className=" " value="500" /> <label htmlFor="vol01"> <span className="radio_basic"></span>
                                                                    <em>500ml</em> </label> </span> </li>
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol02" name="e_volume"
                                                                className=" " value="375" /> <label htmlFor="vol02"> <span className="radio_basic"></span>
                                                                    <em>375ml</em> </label> </span> </li>
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol03" name="e_volume"
                                                                className=" " value="275" /> <label htmlFor="vol03"> <span className="radio_basic"></span>
                                                                    <em>275ml</em> </label> </span> </li>
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol04" name="e_volume"
                                                                className=" " value="187" /> <label htmlFor="vol04"> <span className="radio_basic"></span>
                                                                    <em>187ml</em> </label> </span> </li>
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol05" name="e_volume"
                                                                className=" " value="70" /> <label htmlFor="vol05"> <span className="radio_basic"></span>
                                                                    <em>70ml</em> </label> </span> </li>
                                                            <li> <span className="input_radio ui_complete"> <input type="radio" id="vol06" name="e_volume"
                                                                className=" " value="over750" /><label htmlFor="vol06"> <span className="radio_basic"></span>
                                                                    <em>750ml 이상</em> </label> </span> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="detail_radio_wrap03">
                                                    <h4>포도 품종 <span role="text">* 다중 선택 가능합니다.</span> </h4>
                                                    <div className="detail_radio"> <span className="input_checkbox ui_complete"> <input type="checkbox"
                                                        id="va00" name="e_variety" defaultChecked className="_default-option _all-option" value=""
                                                        data-hash="전체 포도 품종" /> <label htmlFor="va00"> <span
                                                            className="radio_checked checkbox_checked"></span> <em>전체</em> </label> </span> <span
                                                                className="input_checkbox ui_complete"> <input type="checkbox" id="va01" name="e_variety"
                                                                    className=" " value="cabernet-sauvignon" /> <label htmlFor="va01"> <span
                                                                        className="checkbox_basic"></span> <em>까버네쇼비뇽</em> </label> </span> <span
                                                                            className="input_checkbox ui_complete"> <input type="checkbox" id="va02" name="e_variety"
                                                                                className=" " value="merlot" /> <label htmlFor="va02"> <span className="checkbox_basic"></span>
                                                                <em>멜롯</em> </label> </span> <span className="input_checkbox ui_complete"> <input
                                                                    type="checkbox" id="va03" name="e_variety" className=" " value="syrah" /> <label htmlFor="va03"> <span
                                                                        className="checkbox_basic"></span> <em>쉬라즈</em> </label> </span> <span
                                                                            className="input_checkbox ui_complete"> <input type="checkbox" id="va04" name="e_variety"
                                                                                className=" " value="pinot-noir" /> <label htmlFor="va04"> <span className="checkbox_basic"></span>
                                                                <em>피노누아</em> </label> </span> <span className="input_checkbox ui_complete"> <input
                                                                    type="checkbox" id="va05" name="e_variety" className=" " value="chardonnay" /> <label htmlFor="va05">
                                                                <span className="checkbox_basic"></span> <em>샤도네이</em> </label> </span> <span
                                                                    className="input_checkbox ui_complete"> <input type="checkbox" id="va06" name="e_variety"
                                                                        className=" " value="sauvignon-blanc" /><label htmlFor="va06"> <span className="checkbox_basic"></span>
                                                                <em>쇼비뇽블랑</em> </label> </span> <span className="input_checkbox ui_complete"> <input
                                                                    type="checkbox" id="va07" name="e_variety" className=" " value="muscat" /> <label htmlFor="va07">
                                                                <span className="checkbox_basic"></span> <em>모스가토</em> </label> </span> <span
                                                                    className="input_checkbox ui_complete"> <input type="checkbox" id="va08" name="e_variety"
                                                                        className=" " value="other" data-hash="기타 포도 품종" /> <label htmlFor="va08"> <span
                                                                            className="checkbox_basic"></span> <em>기타</em> </label> </span> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

