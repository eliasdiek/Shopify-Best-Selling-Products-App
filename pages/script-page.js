import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button, Card, Layout, Page, ResourceList, Stack } from '@shopify/polaris';

const CREATE_SCRIPT_TAG = gql`
 mutation scriptTagCreate($input: ScriptTagInput!) {
     scriptTagCreate(input: $input) {
         scriptTag {
             id
         }
         userErrors {
             field
             message
         }
     }
 }
`;

const QUERY_SCRIPT_TAGS = gql`
 query {
     scriptTags(first: 5) {
         edges {
             node {
                 id
                 src
                 displayScope
             }
         }
     }
 }
`;

const DELETE_SCRIPT_TAGS = gql`
 mutation scriptTagDelete($id: ID!) {
     scriptTagDelete(id: $id) {
         deletedScriptTagId
         userErrors {
             field
             message
         }
     }
 }
`;

function ScriptPage() {
    const [createScripts] = useMutation(CREATE_SCRIPT_TAG);
    const [deleteScripts] = useMutation(DELETE_SCRIPT_TAGS);
    const {loading, error, data} = useQuery(QUERY_SCRIPT_TAGS);

    if(loading) return <div>Loading...</div>;

    if(error) return <div>{error.message}</div>;

    console.log('this is script data', data);

    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <Card title="There are the Script Tags:">
                        <p>
                            Create or Delete a Script Tag
                        </p>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default ScriptPage;