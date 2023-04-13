import { useState } from "react"

export default function Reviews(){
    const [countReview, setReviewCount] = useState(1252);
    function addReview(){
        setReviewCount(countReview +1)
    }
    setInterval(addReview, 3000)
    return(
        <div>
            <p>{countReview}</p>
        </div>
    )
}