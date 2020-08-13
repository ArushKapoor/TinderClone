import React from 'react'
import Chat from "./Chat";
import "./Chats.css"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Elon"
                message="Hey! How are you 😁"
                timestamp="35 minutes ago"
                profilePic="https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg"
             />
             <Chat
                name="Steve"
                message="Whats Up?"
                timestamp="55 minutes ago"
                profilePic="https://www.biography.com/.image/ar_1:1,c_fill,cs_srgb,g_face,q_auto:good,w_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
             />
             <Chat
                name="Mark"
                message="Ola!"
                timestamp="3 days ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/440px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
             />
             <Chat
                name="Jeff"
                message="How ya doing?"
                timestamp="1 week ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
             />
        </div>
    )
}

export default Chats
