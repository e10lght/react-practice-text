import axios from "axios";
import React, { useState, useEffect } from "react";

export const FetchMembersData = () => {
    const [members, setMembers] = useState<any>([])

    const callbackFunction = () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        axios
            .get("/api/members", {
                cancelToken: source.token
            })
            .then((res) => {
                console.log(res.data)
                setMembers(res.data);
                console.log(members[0].id)
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log("successfully aborted");
                    console.log(err);
                } else {
                    // handle error
                    console.log(err);
                }
            });
        return () => {
            console.log("クリーンアップ関数の実行！");
            source.cancel();
        };
    };

    useEffect(callbackFunction, []);
    return (
        <>
            <h1>APIサーバからフェッチしたデータ一覧</h1>
            <table style={{border: "1px solid #000"}}>
                <tr> 
                    <th>id</th>
                    <th>年齢</th>
                </tr>

                {members.map((member: any) => (
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};
