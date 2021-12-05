import "./tablamaterial.css";

function Tablamaterial(props){
    const {children} = props;

    return(
        <div className="tablamaterial">
            {children}
        </div>
    );
}

export { Tablamaterial }