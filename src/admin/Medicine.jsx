import {
    Datagrid,
    List,
    DateField,
    TextField,
    Edit,
    DateInput,
    SimpleForm,
    TextInput,
    Create
} from 'react-admin';

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

export const MedicineEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nickname" />
            <TextInput source="dosis" />
            <DateInput source="start" />
            <DateInput source="end" />
        </SimpleForm>
    </Edit>
);

export const MedicineCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nickname" />
            <TextInput source="dosis" />
            <DateInput source="start" />
            <DateInput source="end" />
        </SimpleForm>
    </Create>
);