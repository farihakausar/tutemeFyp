// // // import React from 'react';
// // // import { AiOutlineSend } from 'react-icons/ai';
// // // export default function Classroom() {
// // //   const messages = [
// // //     { id: 1, sender: 'Teacher', message: 'Hello students!', timestamp: '10:00 AM' },
// // //     { id: 2, sender: 'Student', message: 'Hi Teacher!', timestamp: '10:05 AM' },
// // //     // Add more messages here
// // //   ];


// // //   return (
// // //     <>
// // //     <div style={{ backgroundColor: '#f0f0f0', height: '100vh', padding: '20px' }}>
// // //       <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginBottom: '10px' }}>
// // //         Chat Room
// // //       </div>
// // //       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
// // //         {messages.map((msg) => (
// // //           <div
// // //             key={msg.id}
// // //             style={{
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               alignItems: msg.sender === 'Teacher' ? 'flex-start' : 'flex-end',
// // //             }}
// // //           >
// // //             <div style={{ backgroundColor: msg.sender === 'Teacher' ? 'white' : 'blue', color: msg.sender === 'Teacher' ? 'blue' : 'white', padding: '10px', borderRadius: '10px', maxWidth: '60%', wordWrap: 'break-word' }}>
// // //               <div>{msg.sender}</div>
// // //               <div>{msg.message}</div>
// // //               <div style={{ fontSize: '0.8em', textAlign: 'right' }}>{msg.timestamp}</div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
// // //         <input type="text" placeholder="Your message" style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid blue' }} />
// // //         <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none' }}>
// // //           <AiOutlineSend />
// // //         </button>
// // //       </div>
// // //     </div>

// // //     </>
// // //   );
// // // }



// // import PubNub from "pubnub";
// // import { PubNubProvider } from "pubnub-react";
// // import React, { useEffect } from "react";
// // // import users from "./data/users/users.json";
// // import users from "../../../data/users/users.json";

// // import "./index.css";
// // import ModeratedChat from "./moderated-chat";


// // const hash = document.location.hash.split("?")[1];
// // const params = new URLSearchParams(hash);
// // const uuid = params.get("uuid");

// // const pubnubKeys = {
// //     publishKey: params.get("pubkey") || (process.env.REACT_APP_PUB_KEY),
// //     subscribeKey: params.get("subkey") || (process.env.REACT_APP_SUB_KEY),
// // };
// // const pubnub = new PubNub({
// //     ...pubnubKeys,
// //     userId: uuid || users[3].id,
// //     fileUploadPublishRetryLimit: 0,
// //     autoNetworkDetection: true,
// //     restore: true,
// // });

// // let pamEnabled = false;
// // pubnub.addListener({
// //     status: function (status) {
// //         if (status.category === "PNAccessDeniedCategory") {
// //             pamEnabled = true;
// //         }
// //     },
// // });



// // const PamError = () => {
// //     return (
// //         <div className="pubnub-error">
// //             <h1>Warning! PubNub access manager enabled.</h1>
// //             <p>
// //                 It looks like you have access manager enabled on your PubNub keyset. This sample app is not
// //                 adapted to work with PAM by default.
// //             </p>
// //             <p>
// //                 You can either disable PAM in the{" "}
// //                 <a href="https://dashboard.pubnub.com/">PubNub Admin Portal</a> or add custom code to grant
// //                 all necessary permissions by yourself. Please referer to the{" "}
// //                 <a href="https://www.pubnub.com/docs/chat/components/react/access-manager">
// //                     Chat Component docs
// //                 </a>{" "}
// //                 for more information.
// //             </p>
// //         </div>
// //     );
// // };

// // const KeysError = () => {
// //     return (
// //         <div className="pubnub-error">
// //             <h1>A PubNub account is required.</h1>
// //             <p>
// //                 Visit the PubNub dashboard to create an account or login:
// //                 <br />
// //                 <a href="https://dashboard.pubnub.com/">https://dashboard.pubnub.com/</a>
// //                 <br />
// //                 Create a new app or locate your app in the dashboard. Enable the Presence, Files, Objects,
// //                 and Storage features using a region of your choosing. For Objects, ensure the following are
// //                 enabled:
// //             </p>
// //             <ul>
// //                 <li>User Metadata Events</li>
// //                 <li>Channel Metadata Events</li>
// //                 <li>Membership Events</li>
// //             </ul>
// //             <p>Copy and paste your publish key and subscribe key into: </p>
// //             <pre>.env</pre>
// //             <p>before continuing.</p>
// //             <br />
// //         </div>
// //     );
// // };

// // const Classroom = () => {

// //     useEffect(() => {
// //         // Setup new PubNub user
// //         pubnub.objects.getUUIDMetadata({}, (status) => {
// //             if (status.error) {
// //                 pubnub.objects.setUUIDMetadata({
// //                     data: users[3],
// //                     uuid,
// //                 });
// //             }
// //         })
// //     }, [])

// //     return (
// //         pubnubKeys.publishKey?.length && pubnubKeys.subscribeKey?.length ? (
// //             pamEnabled ? (
// //                 <PamError />
// //             ) : (
// //                 <PubNubProvider client={pubnub}>
// //                     <ModeratedChat />
// //                 </PubNubProvider>
// //             )
// //         ) : (
// //             <KeysError />
// //         )
// //     )
// // }

// // export default Classroom

// import PubNub from "pubnub";
// import { PubNubProvider } from "pubnub-react";
// import React, { useEffect, useState } from "react";
// // import users from "./data/users/users.json";

// import "./index.css";
// import ModeratedChat from "./moderated-chat";

// const hash = document.location.hash.split("?")[1];
// const params = new URLSearchParams(hash);
// const uuid = params.get("uuid");

// const pubnubKeys = {
//     publishKey: params.get("pubkey") || (process.env.REACT_APP_PUB_KEY),
//     subscribeKey: params.get("subkey") || (process.env.REACT_APP_SUB_KEY),
// };
// const pubnub = new PubNub({
//     ...pubnubKeys,
//     userId: uuid || '',  // Will set userId after fetching user data
//     fileUploadPublishRetryLimit: 0,
//     autoNetworkDetection: true,
//     restore: true,
// });

// let pamEnabled = false;
// pubnub.addListener({
//     status: function (status) {
//         if (status.category === "PNAccessDeniedCategory") {
//             pamEnabled = true;
//         }
//     },
// });

// const PamError = () => {
//     return (
//         <div className="pubnub-error">
//             <h1>Warning! PubNub access manager enabled.</h1>
//             <p>
//                 It looks like you have access manager enabled on your PubNub keyset. This sample app is not
//                 adapted to work with PAM by default.
//             </p>
//             <p>
//                 You can either disable PAM in the{" "}
//                 <a href="https://dashboard.pubnub.com/">PubNub Admin Portal</a> or add custom code to grant
//                 all necessary permissions by yourself. Please refer to the{" "}
//                 <a href="https://www.pubnub.com/docs/chat/components/react/access-manager">
//                     Chat Component docs
//                 </a>{" "}
//                 for more information.
//             </p>
//         </div>
//     );
// };

// const KeysError = () => {
//     return (
//         <div className="pubnub-error">
//             <h1>A PubNub account is required.</h1>
//             <p>
//                 Visit the PubNub dashboard to create an account or login:
//                 <br />
//                 <a href="https://dashboard.pubnub.com/">https://dashboard.pubnub.com/</a>
//                 <br />
//                 Create a new app or locate your app in the dashboard. Enable the Presence, Files, Objects,
//                 and Storage features using a region of your choosing. For Objects, ensure the following are
//                 enabled:
//             </p>
//             <ul>
//                 <li>User Metadata Events</li>
//                 <li>Channel Metadata Events</li>
//                 <li>Membership Events</li>
//             </ul>
//             <p>Copy and paste your publish key and subscribe key into: </p>
//             <pre>.env</pre>
//             <p>before continuing.</p>
//             <br />
//         </div>
//     );
// };

// const Classroom = () => {
//     const [userData, setUserData] = useState(null);

//     const getPdf = async () => {
//         try {
//             const res = await fetch('/api/users/about', {
//                 method: "GET",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 credentials: "include"
//             });

//             const data = await res.json();
//             setUserData(data);
//             console.log(data, "datafromabout");

//             if (!res.status === 200) {
//                 const error = new Error(res.error);
//                 throw error;
//             }
//         } catch (error) {
//             // history.push("/login")
//             console.log("Error fetching user data");
//         }
//     };

//     useEffect(() => {
//         getPdf();
//     }, []);

//     useEffect(() => {
//         if (userData) {
//             pubnub.objects.getUUIDMetadata({ uuid: userData.email }, (status) => {
//                 if (status.error) {
//                     pubnub.objects.setUUIDMetadata({
//                         data: userData,
//                         uuid: userData.email,
//                     });
//                 }
//             });
//         }
//     }, [userData]);

//     if (!userData) {
//         return <div>Loading...</div>;
//     }

//     return (
//         pubnubKeys.publishKey?.length && pubnubKeys.subscribeKey?.length ? (
//             pamEnabled ? (
//                 <PamError />
//             ) : (
//                 <PubNubProvider client={pubnub}>
//                     <ModeratedChat />
//                 </PubNubProvider>
//             )
//         ) : (
//             <KeysError />
//         )
//     );
// }

// export default Classroom;
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import React, { useEffect, useState } from "react";
import "./index.css";
import ModeratedChat from "./moderated-chat";
import { useParams } from 'react-router-dom'; 
const hash = document.location.hash.split("?")[1];
const params = new URLSearchParams(hash);
const uuid = params.get("uuid");

const pubnubKeys = {
    publishKey: params.get("pubkey") || (process.env.REACT_APP_PUB_KEY),
    subscribeKey: params.get("subkey") || (process.env.REACT_APP_SUB_KEY),
};

let pamEnabled = false;

const PamError = () => {
    return (
        <div className="pubnub-error">
            <h1>Warning! PubNub access manager enabled.</h1>
            <p>
                It looks like you have access manager enabled on your PubNub keyset. This sample app is not
                adapted to work with PAM by default.
            </p>
            <p>
                You can either disable PAM in the{" "}
                <a href="https://dashboard.pubnub.com/">PubNub Admin Portal</a> or add custom code to grant
                all necessary permissions by yourself. Please refer to the{" "}
                <a href="https://www.pubnub.com/docs/chat/components/react/access-manager">
                    Chat Component docs
                </a>{" "}
                for more information.
            </p>
        </div>
    );
};

const KeysError = () => {
    return (
        <div className="pubnub-error">
            <h1>A PubNub account is required.</h1>
            <p>
                Visit the PubNub dashboard to create an account or login:
                <br />
                <a href="https://dashboard.pubnub.com/">https://dashboard.pubnub.com/</a>
                <br />
                Create a new app or locate your app in the dashboard. Enable the Presence, Files, Objects,
                and Storage features using a region of your choosing. For Objects, ensure the following are
                enabled:
            </p>
            <ul>
                <li>User Metadata Events</li>
                <li>Channel Metadata Events</li>
                <li>Membership Events</li>
            </ul>
            <p>Copy and paste your publish key and subscribe key into: </p>
            <pre>.env</pre>
            <p>before continuing.</p>
            <br />
        </div>
    );
};

const Classroom = () => {
    const {teacherIdd } = useParams();
    const [userData, setUserData] = useState(null);
    const [pubnub, setPubnub] = useState(null);

    const getPdf = async () => {
        try {
            const resgh=await fetch('/api/users/about',{
              method:"GET",
              headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },credentials:"include"
            })
            const data =await resgh.json()
            setUserData(data)
            console.log(data,"datafromabout")
            if(!res.status===200){
              const error=new Error(res.error)
              throw error
      
            }
          } catch (error) {
            // history.push("/login")
            console.log("nkljkl")
          }
    };

    useEffect(() => {
        getPdf();
    }, []);

    useEffect(() => {
        if (userData) {
            const pubnubInstance = new PubNub({
                ...pubnubKeys,
                userId: uuid || userData._id,
                fileUploadPublishRetryLimit: 0,
                autoNetworkDetection: true,
                restore: true,
            });

            pubnubInstance.addListener({
                status: function (status) {
                    if (status.category === "PNAccessDeniedCategory") {
                        pamEnabled = true;
                    }
                },
            });

            pubnubInstance.objects.getUUIDMetadata({ uuid: userData._id }, (status) => {
                if (status.error) {
                    pubnubInstance.objects.setUUIDMetadata({
                        data: userData,
                        uuid: userData._id,
                    });
                }
            });

            setPubnub(pubnubInstance);
        }
    }, [userData]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        pubnubKeys.publishKey?.length && pubnubKeys.subscribeKey?.length ? (
            pamEnabled ? (
                <PamError />
            ) : (
                pubnub && (
                    <PubNubProvider client={pubnub}>
                        <ModeratedChat />
                    </PubNubProvider>
                )
            )
        ) : (
            <KeysError />
        )
    );
}

export default Classroom;

