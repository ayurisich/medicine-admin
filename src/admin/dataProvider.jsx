
import { useEffect, useState } from 'react';
import localForageDataProvider from 'ra-data-local-forage';

const defaultData = {
    medicines: [
        {
            id: 0,
            name: 'Aspirine C',
            nickname: 'Cold Medicine',
            dosis: '1',
            start: Date.now(),
            end: Date.now()
        }
    ],
    schedules: [
        {
            id: 0,
            medicine_id: 0,
            time: '21:00:00'
        },
    ],
    timeline: [
        {
            id: 0,
            date: Date.now(),
            time: '21:00:00',
            name: 'Aspirine',
            nickname: 'Cold Medicine',
            dosis: '1',
            completed: false
        }
    ]
};

export const useMedicationDataProvider = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        async function startDataProvider() {
            const localForageProvider = await localForageDataProvider({
                defaultData,
                loggingEnabled: true,
            });
            console.log(localForageProvider)
            setDataProvider(localForageProvider);
        }

        if (dataProvider === null) {
            startDataProvider();
        }
    }, [dataProvider]);

    return dataProvider;
}