
import { Admin, Resource } from "react-admin";
import { useMedicationDataProvider } from './dataProvider';
import { MyLayout } from './MyLayout';
import { TimelineList, TimelineCreate, TimelineEdit } from './Timeline'
import { MedicineList, MedicineCreate, MedicineEdit } from './Medicine';
import { ScheduleCreate, ScheduleEdit, ScheduleList } from './Schedule';

const MyAdmin = () => {
    const dataProvider = useMedicationDataProvider();
    console.log(dataProvider)
    if (!dataProvider) return <></>;

    return (
        <Admin
            dataProvider={dataProvider}
            layout={MyLayout}
        >
            <Resource
                name="timeline"
                label="Timeline"
                create={TimelineCreate}
                edit={TimelineEdit}
                list={TimelineList}
            />
            <Resource
                name="medicines"
                label="Medication"
                create={MedicineCreate}
                edit={MedicineEdit}
                list={MedicineList}
                recordRepresentation="name"
            />
            <Resource
                name="schedules"
                label="Schedule"
                create={ScheduleCreate}
                edit={ScheduleEdit}
                list={ScheduleList}
            />
        </Admin>
    )
};

export default MyAdmin;