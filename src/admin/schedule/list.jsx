import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const ScheduleList = () => (
    <List sort={{ field: 'time', order: 'ASC' }}>
        <Datagrid rowClick="edit">
            <ReferenceField source="medicine_id" reference="medicines" >
                <TextField source="name" />{' ('}
                <TextField source="nickname" />{')'}
            </ReferenceField>

            <TextField source="time" />
        </Datagrid>
    </List>
);