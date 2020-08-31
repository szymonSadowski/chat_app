import React from 'react'
import { CTX } from './Store'
import "../App.css";
export default function ChatBody() {

    const { allChats, sendChatMsg, user } = React.useContext(CTX);
    const topics = Object.keys(allChats);

    const [value, setValue] = React.useState("");
    const [activeTopic, setActiveTopic] = React.useState(topics[0]);
    topics[0] = 'general'
    return (
        <div className="container-flude">
            <div className="card">
                {
                    allChats[activeTopic].map((msg, idx) => {
                        return (
                            <div className="card-body" key={idx}>
                                <h6 className="card-subtitle mb-2 text-muted text-left">{msg.from}</h6>
                                <p className="text-field">{msg.msg}</p>
                            </div>
                        );
                    })}
            </div>
            <div className="input-group">
                <textarea id="input-box" className="form-control" rows="1" placeholder="Say something..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className="input-group-btn">
                    <button className="btn-primary" type="button"
                        onClick={() => {
                            sendChatMsg({ from: user, msg: value, topic: activeTopic });
                            setValue("");
                        }}
                    >
                        send
                    </button>
                </span>
            </div>
        </div>
    )
}
