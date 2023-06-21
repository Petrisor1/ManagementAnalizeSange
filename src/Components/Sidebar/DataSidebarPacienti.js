import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {VscSettingsGear} from 'react-icons/vsc';
import {TbBrandGoogleAnalytics} from 'react-icons/tb';
export const DataSidebarPacienti = [
  {
    title: 'General',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Vezi alalizele',
    path: '/pacienti/rezultatePacient',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Rezultate negative',
        path: '/analize/evolutie',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
    ]
  },
  {
    title: 'Statistici',
    path: '/statistici',
   // icon: <FaIcons.FaCartPlus />,
    icon:<TbBrandGoogleAnalytics/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Evolutie teste',
          path: '/statistici/evolutie',
          icon: <IoIcons.IoIosPaper />
        }
      ]
  },
  
  

];
