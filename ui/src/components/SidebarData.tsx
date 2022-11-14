import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <FaIcons.FaChartArea size='32'/>
    },
    {
        title: 'Bill Validation',
        path: '/billvalidation',
        icon: <FaIcons.FaMoneyCheckAlt size='35' />
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <FaIcons.FaScroll size='30' />
    },
    {
        title: 'Cost Forecast',
        path: '/costforecast',
        icon: <FaIcons.FaChartLine size='35' />
    }
]