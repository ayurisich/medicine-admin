import { Datagrid, List, DateField, TextField } from 'react-admin';

export const MedicineList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="nickname" />
            <TextField source="dosis" />
            <DateField source="start" />
            <DateField source="end" />
        </Datagrid>
    </List>
);