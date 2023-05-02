import * as URL from './URL';
import * as SVG from '../../public/svg';

export const AdminNavList = [
  {
    svg: <SVG.ServiceList />,
    url: URL.ServiceList,
  },
  {
    svg: <SVG.AddService />,
    url: URL.NewService,
  },
  {
    svg: <SVG.AdminIcon />,
    url: URL.StuList,
  },
  {
    svg: <SVG.My />,
    url: URL.MyProfile,
  },
  {
    svg: <SVG.Intruction />,
    url: URL.Instructiony,
  },
];
