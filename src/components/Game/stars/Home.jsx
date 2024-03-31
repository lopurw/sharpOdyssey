import classes from '../stars/Home.module.css';
export default function Home({path}){
    return(
        <>
        <div className={classes.item}>
            <img src={path} alt="" />
        </div>
        </>
    )
}