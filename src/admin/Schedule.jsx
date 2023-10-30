import {
    Datagrid,
    List,
    ReferenceField,
    TextField,
    Edit,
    ReferenceInput,
    SimpleForm,
    TimeInput,
    Create
} from 'react-admin';

export const ScheduleList = () => (
    <List sort={{ field: 'time', order: 'ASC' }}>
        <Datagrid rowClick="edit">
            <ReferenceField source="medicine_id" reference="medicines" >
                <>
                    <TextField source="name" />{' ('}
                    <TextField source="nickname" />{')'}
                </>
            </ReferenceField>

            <TextField source="time" />
        </Datagrid>
    </List>
);

export const ScheduleEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="medicine_id" reference="medicines" />
            <TimeInput source="time" />
        </SimpleForm>
    </Edit>
);

export const ScheduleCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="medicine_id" reference="medicines" />
            <TimeInput source="time" />
        </SimpleForm>
    </Create>
);