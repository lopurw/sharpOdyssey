import Card_Section2_Page1 from "../Card_Section2_Page1/Card_Section2_Page1";
import  './Section2_Page1.css'
import { Link } from "react-router-dom";
import footerImage from './image.png'
export default function Section2_Page1(){
    return(
        <div className="str1_2">
            
            <h1>
                О НАС
            </h1>
            <div className="section1">
                <div className="main1">
                    
                    <div className="item1 first" >
                        <div className="card1">
                        <Card_Section2_Page1 title={'КАРТА ПРИКЛЮЧЕНИЙ'} description={'Погрузитесь в захватывающее приключение, изучая C# на каждом уровне.'} />
                        </div>
                        
                    </div>
                    <div className="item1 second" >
                        <div className="card2">
                        <Card_Section2_Page1 title={'УРОВНИ'} description={'Открывай каждый уровень получая максимальное количество звезд'} />
                        </div>
                        
                    </div>
                        
                    
                </div>
                <div className="main2">
                    <div className="item2 third"> 
                    <div className="card3">
                    <Card_Section2_Page1 title={'СЕРТИФИКАТ'} description={'Получи в конце прохождения сертификат о обучении'} />
                    </div>
                            
                    </div>
                    
                        
                </div>
            </div>
            
            <div className="footer">
                <img src={footerImage}  alt="" />
                <p>sharpodyssey</p>
                <div className="footer_nav"><Link className="link" to="/">
                    <p>Главная</p>
                </Link>
                <Link className="link" to="/SignUp">
                   <p>О нас</p> 
                </Link>
                <Link  className="link" to="/Game">
                <p>Обучение</p>
                </Link></div>
            </div>
            
        </div>
            
        
        
    )
}