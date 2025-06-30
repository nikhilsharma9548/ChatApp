import { createContext, useState } from "react";
import runGemini from "../config/gemini";
// import runChat from "../config/gemini";

export const Context = createContext();

const ContextPrivider = (props) => {

    const[input, setInput] = useState("");//taing data from input bar
    const[resultData, setResultData] = useState("");
    const[showResult, setShowresult] = useState(false);
    const[recentPrompt, setRecentPrompt] = useState("");
    const[prevPrompt, setPrevPrompt] = useState([]);
    const[loading, setLoading] = useState(false);
    
    const delayPara =(index, nextword) =>{
        setTimeout(function () {
            setResultData(prev=>prev+nextword);
        },75*index)
    }   

    const newChat = () =>{
        setLoading(false)
        setShowresult(false)
    }

    const onSent = async(prompt) =>{
        setResultData("");
        setLoading(true)
        setShowresult(true)
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
       
        // setPrevPrompt,
        onSent,
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