import React, { useEffect, useRef, useContext } from 'react';
import { PopContainer} from "./styles";
import context from "../../providers/themes/context";


const Index = ({isOpen, children, setOpenPop, logout }: any ) => {
    const ref = useRef(null);

    const  { theme } = useContext(context)

    const updatePopView = (e: any) => {
        // @ts-ignore
        if (ref.current !== null && !ref.current.contains(e.target)) {
            // @ts-ignore
            setOpenPop(!isOpen);
        };
    }

    useEffect(() => {
        document.addEventListener("click",updatePopView);
        return () => document.removeEventListener("click", updatePopView)
    }, [updatePopView]);
    return (
        <>{
            isOpen ? (
                <PopContainer {...theme} logout ref={ref}>
                    <div className="ant-popover-arrow"/>
                    {children}
                </PopContainer>
            ) : ''
        }
        </>
    );
};

export default Index;