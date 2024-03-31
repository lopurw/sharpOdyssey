import Card_Section2_Page1 from "../Card_Section2_Page1/Card_Section2_Page1";
import  './Section2_Page1.css'
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
                        <Card_Section2_Page1 title={'ЕЖЕДНЕВНЫЕ НАГРАДЫ'} description={'Получайте стимул каждый день с небольшими наградами за вход в игру.'} />
                        </div>
                        
                    </div>
                        
                    
                </div>
                <div className="main2">
                    <div className="item2 third"> 
                    <div className="card3">
                    <Card_Section2_Page1 title={'СТАТИСТИКА'} description={'Просматривайте свой прогресс обучения.'} />
                    </div>
                            
                    </div>
                    
                        
                </div>
            </div>
            
            
            
        </div>
    )
}