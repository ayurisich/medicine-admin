import { CheckForApplicationUpdate, Layout } from 'react-admin';

export const MyLayout = ({ children, ...props }) => (
    <Layout {...props}>
        {children}
        <CheckForApplicationUpdate />
    </Layout>
);