import React, { useState } from "react";

const Content = () => {
    const [user, setUser] = useState("");
    const [data, setData] = useState({});
    const [loading, setloading] = useState(false);

    const handlesubmit = async e => {
        e.preventDefault();

        await fetch(
            `https://5000-f75fcee9-6769-4ad7-8a07-a851f44ab539.ws-ap0.gitpod.io/?name=${user}`
        )
            .then(res => res.json())
            .then(datas => {
                setData(datas);
                console.log(datas);
            });
        setUser("");
        setloading(true);
    };

    return (
        <>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="&#xF002; Search"
                />
            </form>
            {loading && data.response ? (
                <div className="data">
                    <h3>{data.result.username}</h3>
                    <img
                        src={data.result.profilelPic}
                        alt={data.result.username}
                        width="100"
                        height="100"
                    />
                    <p>Followers : {data.result.followers}</p>
                    <p>Following : {data.result.following}</p>
                    <p>Posts : {data.result.posts}</p>
                </div>
            ) : (
                    <h3>{data.message}</h3>
                )}
        </>
    );
};

export default Content;
