
import { AiFillSetting } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

//data is use in Sidebar component 
const data = [{


    id: 1,
    icon: <AiFillSetting />,
    type: 'User List',
    link: "/"


},
{
    id: 2,
    icon: <VscTools />,
    type: 'Add Users',
    link: "/create"

}

]

export default data;