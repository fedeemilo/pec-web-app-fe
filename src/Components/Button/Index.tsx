import { useContext } from "react";
import { CONTEXT } from "../../context";

const Btn = () => {
    const CTX: any = useContext(CONTEXT);
    let {
        data,
        setData
    } = CTX;

    const oneMore = () => setData(data++);

    return (
        <button onClick={oneMore}>
            +1
        </button>
    ) 
}

export default Btn;