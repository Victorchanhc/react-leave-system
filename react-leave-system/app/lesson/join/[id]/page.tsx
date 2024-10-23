import { Button, Form } from "react-bootstrap"
import { Lesson } from "../../../../components/Lesson"
import { ParticipantSelect } from "../../../../components/ParticipantSelect"
import { AddNewParticipantCollapse } from "../../../../components/AddNewParticipantCollapse"

interface JoinLessonProps{
    params: {
            id: string
        },
        searchParams:{
            q: string
        }
}


export default function JoinLessonIDPage(props :JoinLessonProps){

    const id = props.params.id
    const q = props.searchParams.q

    const lesson = 
        {
            id: 1,
            name: "星期日 上午 荃灣",
            date: ["5/12", "13/12", "20/12"],
            startTime: "11:30",
            endTime: "13:00",
            venue: "城門谷五人場"
        }

    const participant = {
        name : 'Jacko'
    }
    

    return(
        <div className="container-fluid">
            <div className="d-flex mx-3">
                <a href="" className="mx-3 align-self-center font-weight-bold"> {`<`} </a>
                <h1>Join Lesson</h1>
            </div>
            <div className="d-flex border justify-content-between rounded mx-3 mb-2 p-3 bg-light">
                <Lesson lesson={lesson}/>
                <Button variant="outline-dark" size="sm" className="align-self-center">Change</Button>
            </div>
            <div className="d-flex border justify-content-between rounded mx-3 mb-2 p-3 bg-light">
                <ParticipantSelect participant={participant} />
            </div>
            <div className="px-3 my-4">
                <a href="" className="btn btn-primary container-fluid">Join</a>
            </div>
            <div className="border border-dark rounded mx-3 mb-2 p-2 ">
                <AddNewParticipantCollapse />
            </div>
            <div>
                
            </div>
            {q}
        </div>
    )
}