import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import style from "../About project/About.module.css";
import Programmning from "../About project/Img box/undraw_Programming_re_kg9v.png";
import Fon from "../About project/Img box/Orqafon.png"
import Person1 from "../About project/Img box/person1.png"
import Person2 from "../About project/Img box/person2.png"
import Person3 from "../About project/Img box/person3.png"
import Person4 from "../About project/Img box/person4.png"

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { FaEllipsisV } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Card } from "react-bootstrap";
import Users from "./Users/Users";


export default function About() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const url = "https://reqres.in/api/register";

  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

  const mutateAdd = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password1 }),
    }).then((res) => res.json());
  });

  const handleSignIN = () => {
    console.log(email, password1);
    setEmail("");
    setPassword("");
    mutateAdd.mutate(
      {},
      {
        onSuccess: (res) => {
          console.log(res);
          if(res?.token){
            localStorage.setItem("token", res.token)
            navigate("/profile")
          }
          
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const x = "#";
  return (
    <div className={style.Container}>
      <div className={style.Context}>
        {/* ---------------------------Page1---------------------------------------------- */}
        <div className={style.Text}>
          <h2>Agar bajarishdan qo'rqsangiz</h2>
          <h2>buni albatta bajarib ko'ring</h2>
          <div className={style.Container}>
            <div className={style.inputs}>
              <div className={style.email}>
                <label htmlFor="email1">Email</label>
                <br />
                <input
                  type={"email"}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>

              <div className={style.paswword}>
                <label htmlFor="paswword1">Parol</label>
                <br />
                <input
                  type={"password"}
                  name="password"
                  value={password1}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="****************"
                />
              </div>

              <br />
            </div>
            <div className={style.buttoninputs}>
              <button onClick={handleSignIN}>Kirish</button>
            </div>
          </div>
        </div>
        <div className={style.Img}>
          <img src={Programmning} />
        </div>
      </div>

      <div className={style.Context1}>
        {/*--------------------------------------Page2-----------------------------------  */}
        <div className={style.Textimg}>
          <h2>Dasturlashni amaliy</h2>
          <h2>tarzda CodeBox bilan o'rganing</h2>
          <div className={style.Card1}>
            <p>JAVA</p>
          </div>
          <div className={style.TextimgCard}>
            <div className={style.cardtext}>
            <p>JAVA</p>
            <hr></hr>
            <hr></hr>
            </div>

            <div className={style.TextimgCard1}>
            <hr></hr>
            <hr></hr>
            </div>
            <div className={style.cardhr}>
              <hr></hr>
              <hr></hr>
              <hr></hr>
            </div>
          </div>
          <div className={style.Card2}>
            <p>PYTHON</p>
          </div>
          <div className={style.Card3}>
            <p>GO</p>
          </div>
        </div>
        <div className={style.TextDasturlash}>
          <h3>01. Dasturlash tilini tanlang.</h3> <br/>
          <h5>Hozirgi kunda eng ommabop dasturlash</h5>
          <h5>tillarini CodeBoxga kiritdik va buni doimiy tarzda</h5>
          <h5>yangilab boramiz.</h5>
        </div>
      </div>

      <div className={style.Context2}>
        {/* --------------------Page3---------------------------------- */}
        <div className={style.text}>
          <p>02. Topshiriqlarni bajarish</p>
          <p>orqali o'rganing.</p> <br/>
          <p>Dasturlash algoritmlari, suhbat uchun</p>
          <p>topshiriqlari va murakkab topshiriqlarni bajaring.</p>
        </div>
        <div className={style.card}>
          <img src={Fon} />
          <div className={style.buttoncard}>
            <h5><VscWorkspaceTrusted/></h5>
            <p>String</p>
            <h5><FaEllipsisV/></h5>
          </div>
          <div className={style.buttoncard1}>
            <h5><VscWorkspaceUntrusted/></h5>
            <p>Array</p>
            <h5><FaEllipsisV/></h5>
          </div>
          <div className={style.buttoncard2}>
          <h5><VscWorkspaceTrusted/></h5>
          <p>Logic</p>
          <h5><FaEllipsisV/></h5>
          </div>
        </div>
      </div>

      <div className={style.Context3}>
        <div className={style.Card01}>
          <img src={Fon}/>
          <div className={style.cardcontext}>
            <p>JAVA</p>
            <p><FaEllipsisV/></p> <br/>
            <hr></hr>
            <hr></hr>
            <hr></hr>
          </div>
        </div>
        <div className={style.Text1}>
          <p>03. Yakunlangan dasturlash</p>
          <p>tiliga tegishli oid fraymvork</p>
          <p>o'rganing.</p> <br/>
          <p>Web, Mobile, Desktop va boshqa yo'nalishlarda</p>
          <p>dasturlash tili imkoniyatlaridan kelib chiqib</p>
          <p>fraymvork o'rganing.</p>
        </div>
      </div>

      <div className={style.Context4}>
          <div className={style.Text2}>
            <p>04. Ishga ega bo'ling yoki katta</p>
            <p>loyihalar yarating.</p> <br/>
            <p>Dasturlashda jamoa bo'lib ishlash juda muhim.</p>
            <p>Shuning uchun biror jamoaga borib qo'shiling</p>
            <p>yoki o'z jamoangizni tuzing.</p>
          </div>
        <div className={style.cardcontext1}>
          <img src={Fon}/>
        
          <div className={style.Card00}></div>
          <div className={style.card01}>
            <img src={Person1}/>
          </div>
          <div className={style.card02}>
            <img src={Person2}/>
          </div>
          <div className={style.card03}>
          <img src={Person3}/>
          </div>
          <div className={style.card04}>
          <img src={Person4}/>
          </div>
          <div className={style.cardtrue}>
            <p><VscWorkspaceTrusted/></p>
          </div>
          <div className={style.cardtrue1}>
            <p><VscWorkspaceTrusted/></p>
          </div>
          <div className={style.html}>
            <p>{"</>"}</p>
          </div>
        </div>
      </div>

      <div className={style.Context5}>
        <div className={style.TextCont5}>
          <p>O'zingiz uchun dunyoda mashxur</p> 
          <p>dasturlash tillaridan birini</p>
          <p>tanlang</p>
        </div>
        <div className={style.CardCont5}>
          <div className={style.Cardcont51}>
            <div className={style.Cardcont5text}>
            <p>JAVA</p>
            <p>128 ta</p> <p>topshiriq</p>  <p>|  38 ta</p> <p>bo'lim</p>
            <hr></hr>
            <p>Java - silno tipirovannyy obyektno orientirovann</p>
            <p>yysag yazyk programmirovaniya, razrabotannyy</p>
            <p>kompaniey Sun Microsystems. V nastoyashchee</p>
            <p>vremya proekt matlenejit OpenSource i rasprof</p>
            <p>ranya yaetsya po litsenzii GPL. V OpenJDK</p>
            <p>vnosyat vklad krupnye kompanii, sochi kak -</p>
            <p>Oracle, RedHat, IBM, Google</p>
            </div>

            <div className={style.Cardcont5button}>
              <button>Kursni boshlash <br/> <BsArrowRight/></button>
            </div>
          </div>
          <div className={style.Cardcont52}>
          <div className={style.Cardcont5text1}>
            <p>PYTHON</p>
            <p>122 ta</p> <p>topshiriq</p>  <p>|  13 ta</p> <p>bo'lim</p>
            <hr></hr>
            <p>Python - vysokourovnevyy yazyk programirova</p>
            <p>niya obshchego naznacheniya, orientirovannyy</p>
            <p>na povyshenie proizvoditelnosti razrabotchika i</p>
            <p>chitaemosti koda. Syntaxxd Python minimalis</p>
            <p>tichen. V toni vremya standartnaya biblioteka</p>
            <p>vklyuchaet bolshoy ob'yom poleznyx fonksiyont</p>
            </div>

            <div className={style.Cardcont5button1}>
              <button>Kursni boshlash <br/> <BsArrowRight/></button>
            </div>
          </div>
          <div className={style.Cardcont53}>
          <div className={style.Cardcont5text2}>
            <p>GO</p>
            <p>122 ta</p> <p>topshiriq</p>  <p>|  13 ta</p> <p>bo'lim</p>
            <hr></hr>
            <p>Go - kompilyumemyy multilogo yazyk program</p>
            <p>movaniya, razrabotannyy vnutri kompanii Google.</p>
            <p>Razrabotka Go nachalas v sentabr 2007 goda,</p>
            <p>ego neposredstvennym projektirovaniem zanima</p>
            <p>lis Robert Grizmer, Rob Pikk i Ken Thompson,</p>
            <p>zanimavshiesya do etogo proektom razrabotki </p>
            </div>

            <div className={style.Cardcont5button2}>
              <button>Kursni boshlash <br/> <BsArrowRight/></button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.User}>
      <Users/>
      </div>

      <div className={style.Context7}>
        <div className={style.Context7Text}>
          <p>O'z rejangizni</p>
          <p>tanlang</p>
        </div>
        <div className={style.Context7Card}>
          <div className={style.CardContext71}>
            <div className={style.Text71}>
              <p>Simple</p>
              <p>99.000 UZS</p>
              <p>Har 1 oyda to'lov</p> <br/>
              
              <p>Bu ta'rif to'plamini aktivlashtirish orqali</p>
              <p>siz tizimdan 1 oy muddatda to'liq.</p>
              <p>foydalanishingiz mumkin.  Qayta</p>
              <p>aktivlashtirish har 1 oy muddatda</p>
              <p>amalga oshiriladi.</p>
            </div>
            <div className={style.Button71}>
              <button>Obuna bo'lish</button>
            </div>
          </div>
          <div className={style.CardContext72}>
            <div className={style.Text72}>
              <p>Middle</p>
              <p>269.000 UZS</p>
              <p>Har 3 oyda to'lov</p> <br/>

              <p>Bu ta'rif to'plamini aktivlashtirish orqali</p>
              <p>siz tizimdan 1 oy muddatda to'liq.</p>
              <p>foydalanishingiz mumkin.  Qayta</p>
              <p>aktivlashtirish har 1 oy muddatda</p>
              <p>amalga oshiriladi.</p>

            </div>
            <div className={style.Button72}>
              <button>Obuna bo'lish</button>
            </div>
          </div>
          <div className={style.CardContext73}>
            <div className={style.Text73}>
              <p>Edvanced</p>
              <p>499.000 UZS</p>
              <p>Har 6 oyda to'lov</p> <br/>

              <p>Bu ta'rif to'plamini aktivlashtirish orqali</p>
              <p>siz tizimdan 1 oy muddatda to'liq.</p>
              <p>foydalanishingiz mumkin.  Qayta</p>
              <p>aktivlashtirish har 1 oy muddatda</p>
              <p>amalga oshiriladi.</p>
            </div>
            <div className={style.Button73}>
            <button>Obuna bo'lish</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.Context8}>
        <div className={style.TextCont8}>
          <h1>Biz haqimizda </h1>
          <h1>boshqalar fikri</h1>
        </div>
        <div className={style.CarouselCont8}>
              <Carousel
                className={style.CarouselMenu}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={5000}
                responsive={responsive1}
              >
                <div className={style.news_item}>
                  <Card className={style.Card}>
                    <Card.Img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU"} className="img-fluid" />

                    <div className={style.overlay}>
                      <div className={style.textover}>
                        <b style={{ fontSize: "18px" }}>Muhiddin Jumayev</b>
                        <p>Coder</p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor{" "}
                        </p>
                        <p>
                          incididunt ut labore et dolore magna aliqua. Volutpat
                          commodo sed egestas egestas.
                        </p>
                        <p>
                          Feugiat in ante metus dictum at tempor commodo
                          ullamcorper a. Vitae auctor eu augue
                        </p>
                        <p>
                          ut lectus. Curabitur vitae nunc sed velit dignissim
                          sodales ut eu sem.{" "}
                        </p>
                      </div>
                    </div>
                    <div className={style.social_icons_Item}>
                      <ul
                        style={{
                          listStyleType: "none",
                          textDecoration: "none",
                          paddingLeft: "20px"
                        }}
                        className={style.social_icons}
                      >
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-facebook-f"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-instagram"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="far fa-envelope"></i>{" "} */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-telegram-plane"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>{/* <i class="fas fa-phone"></i> */}</a>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
                <div className={style.news_item}>
                  <Card className={style.Card}>
                    <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU"} />

                    <div className={style.overlay}>
                      <div className={style.textover2}>
                        <b style={{ fontSize: "18px" }}>Bessie Cooper</b>
                        <p>Communications Director</p> <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor{" "}
                        </p>
                        <p>
                          incididunt ut labore et dolore magna aliqua. Volutpat
                          commodo sed egestas egestas.
                        </p>
                        <p>
                          Feugiat in ante metus dictum at tempor commodo
                          ullamcorper a. Vitae auctor eu augue
                        </p>
                        <p>
                          ut lectus. Curabitur vitae nunc sed velit dignissim
                          sodales ut eu sem. {" "}
                        </p>
                      </div>
                    </div>
                    <div className={style.social_icons_Item}>
                      <ul
                        style={{
                          listStyleType: "none",
                          textDecoration: "none",
                          paddingLeft: "20px"
                        }}
                        className={style.social_icons}
                      >
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-facebook-f"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-instagram"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="far fa-envelope"></i>{" "} */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-telegram-plane"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>{/* <i class="fas fa-phone"></i> */}</a>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>

                <div className={style.news_item}>
                  <Card className={style.Card}>
                    <Card.Img
                      variant="top"
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"                    }
                      className="img-fluid"
                    />

                    <div className={style.overlay}>
                      <div className={style.textover1}>
                        <b style={{ fontSize: "18px" }}>Nazokat Alimova</b>
                        <p>Coder</p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor{" "}
                        </p>
                        <p>
                          incididunt ut labore et dolore magna aliqua. Volutpat
                          commodo sed egestas egestas.
                        </p>
                        <p>
                          Feugiat in ante metus dictum at tempor commodo
                          ullamcorper a. Vitae auctor eu augue
                        </p>
                        <p>
                          ut lectus. Curabitur vitae nunc sed velit dignissim
                          sodales ut eu sem.{" "}
                        </p>
                      </div>
                    </div>
                    <div className={style.social_icons_Item}>
                      <ul
                        style={{
                          listStyleType: "none",
                          textDecoration: "none",
                          paddingLeft: "20px"
                        }}
                        className={style.social_icons}
                      >
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-facebook-f"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-instagram"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="far fa-envelope"></i>{" "} */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>
                            {/* <i class="fab fa-telegram-plane"></i> */}
                          </a>
                        </li>
                        <li>
                          <a href={x}>{/* <i class="fas fa-phone"></i> */}</a>
                        </li>
                      </ul>
                    </div>
                    {/* <svg
          className={style.Curved}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#184E61"
            fill-opacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div
        
          className={style.CardFooterText1}
        >
          <p>Dori-Darmon</p>
          <br />
          <p> Toshkent, Yunusobod tumani, 2-kvartal</p> <br />
        </div>{" "}
        <div className={style.social_icons_Item}>
          <ul
            style={{ listStyleType: "none", textDecoration: "none" }}
            className={style.social_icons}
          >
            <li>
              <a href={x}>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href={x}>
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href={x}>
                <i class="far fa-envelope"></i>{" "}
              </a>
            </li>
            <li>
              <a href={x}>
                <i class="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={style.CallMeGroup}>
          <i>
            <FiPhoneCall className={style.CallMeGroupIcon} />
          </i>
        </div> */}
                  </Card>
                </div>
              </Carousel>
        </div>
      </div>

    </div>
  );
}
