import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // make sure to install uuid

const Conference = () => {
  const { roomID } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      if (!roomID || !element) return;

      const appID = 700173574;
      const serverSecret = "25d00bffcc633b8f158fdcbfd8701b8a";

      const userID = uuidv4(); // ✅ unique every time
      const userName = "Guest";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal Link",
            url: `${window.location.origin}/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        showPreJoinView: false,
        turnOnCameraWhenJoining: true,
        turnOnMicrophoneWhenJoining: true,
      });
    };

    myMeeting(containerRef.current);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Conference;
