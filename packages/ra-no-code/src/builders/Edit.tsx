import React from 'react';
import { useResourceContext } from 'ra-core';
import {
    Edit as RaEdit,
    EditProps,
    SimpleForm,
    SimpleFormProps,
} from 'ra-ui-materialui';
import { useResourceConfiguration } from '../ResourceConfiguration';
import { getInputFromFieldDefinition } from './getInputFromFieldDefinition';

export const Edit = (props: EditProps) => (
    <RaEdit {...props}>
        <EditForm />
    </RaEdit>
);

export const EditForm = (props: Omit<SimpleFormProps, 'children'>) => {
    const resource = useResourceContext(props);
    const [resourceConfiguration] = useResourceConfiguration(resource);

    return (
        <SimpleForm {...props}>
            {resourceConfiguration.fields.map(definition =>
                getInputFromFieldDefinition(definition)
            )}
        </SimpleForm>
    );
};
