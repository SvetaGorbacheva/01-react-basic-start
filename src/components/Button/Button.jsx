import classes from './Button.module.css'


export default function Button({ children, isActive, ...props}) {

    console.log(classes)

    // let classes = 'button'
    // if (isActive){
    //     classes += ' active'
    // }
    // console.log('Button Component Render');

    // return (
    //     <button className={classes} onClick={onCLick}>
    //         {children}
    //     </button>
    // )

    return (
        <button
            {...props}
            className={
                isActive ? `${classes.button} ${classes.active}` : classes.button
            }>
            {children}
        </button>
    )
}