
import React, { useEffect, useState } from 'react';
import { Admin, Resource } from "react-admin";
import localForageDataProvider from 'ra-data-local-forage';
import { MyLayout } from './MyLayout';
import { MedicineList } from './medicine';
import { ScheduleList } from './schedule';

const MyAdmin = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        async function startDataProvider() {
            const localForageProvider = await localForageDataProvider({
                defaultData: {
                    medicines: [
                        {
                            id: 0,
                            name: 'FORTEKOR 5MG',
                            nickname: 'PRESION VIEJA',
                            dosis: '1',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 1,
                            name: 'PREDMISOLON 20MG',
                            nickname: 'CORTISONA',
                            dosis: '3/4',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 2,
                            name: 'TUBO DE COMIDA',
                            nickname: 'ASTRONAUTA',
                            dosis: '1 CDA',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 3,
                            name: 'LATA COMIDA RIÑON',
                            nickname: 'COMIDA',
                            dosis: '1/2',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 4,
                            name: 'CBD',
                            nickname: 'MARIHUANA',
                            dosis: '1',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 5,
                            name: 'AMODIP 1,2',
                            nickname: 'PRESION NUEVA',
                            dosis: '1/2',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 6,
                            name: 'REMES / VISCUM',
                            nickname: 'HOMEOPATIA',
                            dosis: '1ML',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 7,
                            name: 'SUPLEMENTO ROCKO',
                            nickname: 'HIERRO',
                            dosis: '2',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 8,
                            name: 'REISHI',
                            nickname: 'HONGITOS',
                            dosis: '1',
                            start: Date.now(),
                            end: null,
                        },
                        {
                            id: 9,
                            name: 'PORUS ONE + ADD ON',
                            nickname: 'CARBON',
                            dosis: '1',
                            start: Date.now(),
                            end: null,
                        },
                    ],
                    schedules: [
                        { id: 0, medicine_id: 0, time: '08:30:00' },
                        { id: 1, medicine_id: 0, time: '20:30:00' },
                        { id: 2, medicine_id: 1, time: '08:30:00' },
                        { id: 3, medicine_id: 2, time: '09:30:00' },
                        { id: 4, medicine_id: 3, time: '09:30:00' },
                        { id: 5, medicine_id: 3, time: '14:30:00' },
                        { id: 6, medicine_id: 3, time: '19:00:00' },
                        { id: 7, medicine_id: 4, time: '09:31:00' },
                        { id: 8, medicine_id: 5, time: '14:00:00' },
                        { id: 9, medicine_id: 6, time: '14:31:00' },
                        { id: 10, medicine_id: 7, time: '19:00:00' },
                        { id: 11, medicine_id: 8, time: '19:00:00' },
                        { id: 12, medicine_id: 9, time: '22:00:00' },
                    ],
                },
                loggingEnabled: true,
            });
            setDataProvider(localForageProvider);
        }

        if (dataProvider === null) {
            startDataProvider();
        }
    }, [dataProvider]);

    if (!dataProvider) return <></>;

    return (
        <Admin dataProvider={dataProvider} layout={MyLayout}>
            <Resource name="medicines" list={MedicineList} />
            <Resource name="schedules" list={ScheduleList} />
        </Admin>
    )
};

export default MyAdmin;