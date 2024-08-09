import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Panel de control",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Agregar producto",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Cuenta",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Perfil",
        path: "/profile",
      },
      {
        title: "Editar perfil",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Reportar error",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
