import { useRouter } from "next/router"

type props = {
    buttonTitle: string,
    onClickButton?: () => {},
    nextPage: string
}

const Primary = ({ buttonTitle, onClickButton, nextPage}: props) => {
    const router = useRouter()

    function  moveToSingup() {
        router.push(nextPage)
    }


    return (
        <button className="red-button" onClick={moveToSingup}>{buttonTitle}</button>
    )
}


export default Primary