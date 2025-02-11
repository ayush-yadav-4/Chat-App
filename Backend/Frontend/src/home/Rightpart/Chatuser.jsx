import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAaVBMVEUAAAD+/v7///8BAQEFBQXS0tL7+/v29vbe3t4sLCy2tralpaWJiYnFxcXi4uLV1dUnJydZWVns7OxPT095eXlvb2++vr4gICCWlpZCQkKfn587OztISEgyMjIZGRmurq4SEhJhYWGBgYFLU65NAAAHFklEQVR4nO2ci3aqOhCGQxJAUVRQ1Naq6Ps/5Em4CQK5zAS2Xaezulc3UsjHn0xuzEg4J7/A/ijd2R8lxljn6GMpWZvzYyklVwP6sZSCk/1ROjHRLn8LZXP00ZSNmB9NyWs5P5ZScjZifiqltM9vl13731Eypv8boDmj5FPWiqN7V97IT7vldXni7c9cmDsFrtl6FcX+druNo9U5u7i6rzQ8ZanY2k9Dj74sTLfnXXEae39pLrTcHeISzXtZcbxZf+HvLg1JKZVa+4Iv8AZMcH4vRRloPVGUsvRk43VEfOP00jMWEUkprr1EVMFYgvrJP6UUQi7oYFV3MUO0nHBKceE61OhYN88oH72NUZsFU4q7r3SVXVtA493YADoppQ2klNNHtSwgpYC8W0AKzO0S0cEDKTlZW0EKzBjMCK/xLNQ79xsmwtOBlD+pnZKSMshmpRTeGltDCszFFTpYwrTMDDrzAcyIANsXgJKR3QYgpcT8Afo5gFL4dwCkhPo5pMavQCnFiJ7B6tyekpEDEFJgHnMIJEhLqJRSTNhyyJqSkb3lqNPBXIP8x5qSi1kGGNKjm3koSe4jKD1vCYAEUCb2g2NbTFCV21MegJ1lRRnZM0Ioz6gKp/4slPyIo1xA+iJryhvOeWi6n4PyBO/TC8oQMsu0ptyhXHwuyqXZGnyUMjj8BkrvqSthoD+dvcb1Wg6sOuwpp/Ye5oLytED2RA9tEQ4oc8jysUW5+bGHBIyQmImb3Ik52RYIolzjKEELNHvKDNUV0e95Zm5XjPtQCtq+BqzOMO5DQwgkZHX2xFAe56EUFiIoYe8rIJR3+Hp8u5uNcu9Bd2C8M2w7C0LJI6iUC0sp4ZE6jJMHrMsMxDIXZrBdVtgoSTdASNiONSGQSSYNHjPuBcs6PwAciEbwt4mQK+WLs+E34irIbXO5qZ+j49ysp5k0vdT1bVwmlpKRq13TpOFrvWMfGwPVkpPLwgpyYEfdnBbxFv/HfApHw+fgasYUE/MW/7I1wwxompVB012bRUsiPd2Ak8q3zkM2AD4BZRUToemSaHA/Dcs2l5aEfB1VgTpFqM6eQIccR5Ty4oM/Xu2ULlRvxWfTUhR0ynw6EFVUhpBdlDAufLx3j9GbXlebKhav5JM/4eao2/Z10RP1GjcbjqgsP0vO97hCFYB+dM5y7W2N3cdN/GVZ2ulrnzyyxyPZf42+e2LmXXnLnEWJmunCYQGu5pQu4mf5xJQjbdLSGPA2M1FC8SqbKapeMiJCWo0oWVUQSg/Mxf8oQ8ES+I/y3Waq8bJpyeED0O9hWrUtJS8MVmBzjfXVlpTF6EHeK28IWrVcsH5ImxFS3puN1dwyyZ7n77P4WR+yvXoH0LryUeN4qVd+y1Z+moZhUM7bgiAM09RfZcvitAv3xPr4/nDfvDJRmkl6aZv7ExL/4I6ykPG0jlNVhoI4l8ZrB2LCI8Fv+2PoqReQ5eoiPCb5TJTdpHNGbofBJdmwoDR+nlD5SBYzt/Zh5ltEaAUBDbaQcA07yvfu57E1k7Ej6CLhFnp2CzSjbCZt0mmuESTSTegZXYoHNqPk7WcyoJSA9d+L3wdwVLCXZubdZzkSm1HK0UY+FquPlkft9pVCTnq8mE7ZC8rXwYvnnbBl9WeJ4ZblmJyiderwinGYjVAOiNqHxMVeFpzh89WtDY3mJaQ5ZY1YfQsCI7lN3tG4nKu8VUK/UJmCz1kHslXjQ1cUjlNl3RISOYCUnPdb3c6HxOQvM6YUPllNKJHhoS8LaHxrlqW9MluUA7n4/R02XmlZHuaxGyWlyWS5prJ6E2oV5ZD0zT2YjCmBdkB9C+QrSVZK8z6nl5/UyxYDyqKbbL5KwlGbrK2JMhkMvXtrlQpKKX1FKf59u0QsMM/FMNTfzqw7Id7uwRWUzZcAMJK5hizeS3LSd6Cy7+Nv8CpKxquFyz5w1yZfmGWI41u4ZU3ZhVFQ8hpyiRsWxzA35bDcr/H+C0qF97D6HDx+SI15rxB6c4herzhK+fKyxzSQokMqApmZwVbHCGXZgov/3nAhtgqjm7zuNVVCjlK2HBwZu6rGvI9ymVE2rpPg4tPVlEGxqcAUA6CKktRSwnJdze2ohNBSlidkKtyUkF4VY69bZYxRFnMhjgtcNbAqyEgnpvI8Q4Yqm2AWI9BQvL8xJcldzXzHbWEipvr0F3o1prUyr0Ijpprye3LIIqkPOvYUz0fI1K1SUqYGSeVKysThKmIc86zflVGte8TSdnpIIaZ+iFS1Sz7JvLKPqc+QVFHucWlRxpT6BBAV5RMal25JuUBpicvkMadMtftwKsoJZ5YdSk+bra2gRGaYWWCuEFois/UsKGNdLpqCEpmfaUGZ6voiBSUy19WCkuqyDxWUV7cbWCpMXSanknImSI/qMozVWs5l3wjKhT+TbTVfVvUfdiRM5oXGTjcAAAAASUVORK5CYII=" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
