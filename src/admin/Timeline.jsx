import {
    BooleanInput,
    Datagrid,
    List,
    BooleanField,
    DateField,
    TextField,
    Edit,
    DateInput,
    SimpleForm,
    TextInput,
    TimeInput,
    Create
} from 'react-admin';

export const TimelineEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="date" />
            <TimeInput source="time" />
            <TextInput source="name" />
            <TextInput source="nickname" />
            <TextInput source="dosis" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);

export const TimelineCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="date" />
            <TimeInput source="time" />
            <TextInput source="name" />
            <TextInput source="nickname" />
            <TextInput source="dosis" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Create>
);

export const TimelineList = () => (
    <List>
        <Datagrid rowClick="edit">
            <DateField source="date" />
            <DateField source="time" />
            <TextField source="name" />
            <TextField source="nickname" />
            <TextField source="dosis" />
            <BooleanField source="completed" />
        </Datagrid>
    </List>
);