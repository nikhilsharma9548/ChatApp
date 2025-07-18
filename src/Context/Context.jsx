import { createContext, useState ,useEffect} from "react";
import runGemini from "../config/gemini";

export const Context = createContext();

const ContextPrivider = (props) => {
    const [extended, setExtented] = useState(false);
    const[input, setInput] = useState("");//taking data from input bar
    const[resultData, setResultData] = useState("");
    const[showResult, setShowresult] = useState(false);
    const[recentPrompt, setRecentPrompt] = useState("");
    const[prevPrompt, setPrevPrompt] = useState([]);
    const[loading, setLoading] = useState(false);
     const [theme, setTheme] = useState(false);
    
            const toggleTheme = () => {
                setTheme(!theme);}
    
 

    const delayPara =(index, nextword) =>{
        setTimeout(function () {
            setResultData(prev=>prev+nextword);
        },50*index)
    }   

    const newChat = () =>{
        setLoading(false)
        setShowresult(false)
    }

    const onSent = async(prompt) =>{
        setInput("");
        setResultData("");
        setLoading(true)
        setShowresult(true)
        setRecentPrompt(input)
        let result;
        if(prompt !== undefined){
            result = await runGemini(prompt);
            setRecentPrompt(prompt)
        }
        else{
             setPrevPrompt(prev=>[...prev,input])
             setRecentPrompt(input)
             result = await runGemini(input)
        }
       
        let responseArray = result.split("**");
        let newResult = "";
        for(let i =0 ; i< responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                newResult += responseArray[i];
            }
            else{
                newResult += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResult2 = newResult.split("*").join("</br></br>")
         let newResultArray = newResult2.split(" ");
         for(let i =0; i<newResultArray.length; i++)
         {
            const nextword = newResultArray[i];
            delayPara(i,nextword+" ")
         }
         setLoading(false)
         setInput("")     
         console.log("Gemini Response:", result);
   
    };



    const contextValue = {
        theme,
        toggleTheme,
        onSent,
        extended,
        setExtented,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        prevPrompt,
        input,
       setInput,
       newChat,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextPrivider